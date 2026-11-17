// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { computeTrackStats, loadGpx } from './gpx.ts';

describe('computeTrackStats', () => {
  it('computes distance and elevation stats for a single segment', () => {
    // 1 degree of latitude is about 111.19 km.
    const stats = computeTrackStats([
      [
        [0, 0, 0],
        [1, 0, 100]
      ]
    ]);

    expect(stats.distance).toBe(111);
    expect(stats.ascent).toBe(100);
    expect(stats.descent).toBe(0);
    expect(stats.elevationMax).toBe(100);
    expect(stats.elevationMin).toBe(0);
  });

  it('chains segments and splits ascent and descent', () => {
    const stats = computeTrackStats([
      [
        [0, 0, 100],
        [0, 0.5, 200]
      ],
      [
        [0, 0.5, 200],
        [0, 1, 50]
      ]
    ]);

    // 0.5 + 0.5 degrees of latitude is about 111.19 km in total.
    expect(stats.distance).toBe(111);
    expect(stats.ascent).toBe(100);
    expect(stats.descent).toBe(150);
    expect(stats.elevationMax).toBe(200);
    expect(stats.elevationMin).toBe(50);
  });

  it('ignores points without elevation for elevation stats', () => {
    const stats = computeTrackStats([
      [
        [0, 0],
        [0, 1, 30]
      ]
    ]);

    expect(stats.ascent).toBe(0);
    expect(stats.descent).toBe(0);
    expect(stats.elevationMax).toBe(30);
    expect(stats.elevationMin).toBe(30);
  });

  it('returns zeros for an empty track', () => {
    expect(computeTrackStats([])).toEqual({
      distance: 0,
      ascent: 0,
      descent: 0,
      elevationMax: 0,
      elevationMin: 0
    });
  });
});

describe('loadGpx', () => {
  const GPX = `<?xml version="1.1" encoding="UTF-8"?>
<gpx version="1.1" creator="test" xmlns="http://www.topografix.com/GPX/1/1">
  <trk>
    <name>Test track</name>
    <trkseg>
      <trkpt lat="0" lon="0"><ele>10</ele></trkpt>
      <trkpt lat="0" lon="0.5"><ele>20</ele></trkpt>
    </trkseg>
  </trk>
</gpx>`;

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('parses the track and caches the result per url', async () => {
    const fetchMock = vi.fn(async () => new Response(GPX));
    vi.stubGlobal('fetch', fetchMock);

    const [first, second] = await Promise.all([loadGpx('/test-track.gpx'), loadGpx('/test-track.gpx')]);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(second).toBe(first);
    expect(first.start).toEqual([0, 0]);
    expect(first.end).toEqual([0, 0.5]);
    expect(first.lines).toHaveLength(1);
    // 0.5 degree of longitude at the equator is about 55.6 km.
    expect(first.stats.distance).toBe(56);
    expect(first.stats.ascent).toBe(10);
    expect(first.stats.descent).toBe(0);
  });

  it('rejects when the file cannot be fetched', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(null, { status: 404 }))
    );

    await expect(loadGpx('/missing.gpx')).rejects.toThrow('Failed to fetch the GPX file: 404');
  });
});

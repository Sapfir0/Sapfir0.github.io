import { parseGPX } from '@we-gold/gpxjs';

export async function parse(path: string) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Failed to fetch the GPX file: ${response.status} ${response.statusText}`);
  }

  const [parsedFile, error] = parseGPX(await response.text());

  if (error) {
    throw error;
  }

  return parsedFile.toGeoJSON();
}

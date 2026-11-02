import { ActivityDay } from './components/activity-day.tsx';
import type { TTrekking } from './types.ts';

export function Arhyz({ data }: { data: TTrekking }) {
  return (
    <>
      {data.days.map((day) => (
        <div>
          <ActivityDay day={day} />
        </div>
      ))}
    </>
  );
}

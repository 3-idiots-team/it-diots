import { Icon } from '@it-diots/shared/ui';

import { ActivityHeatmap } from '@/features/[userId]/activity-heatmap';
import { EditReadme } from '@/features/[userId]/edit-readme';

export function ReadMe() {
  return (
    <div className="flex flex-col gap-8">
      <EditReadme />

      <section>
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <Icon name="Activity" /> Reading streak
        </h2>

        <div className="mt-4 flex gap-4">
          <div className="rounded-10 w-12 w-40 rounded-lg border p-3">
            <span className="text-xl font-bold">2</span>
            <br />
            <span className="text-muted-foreground text-sm">Longest streak 🏆</span>
          </div>

          <div className="rounded-10 w-12 w-40 rounded-lg border p-3">
            <span className="text-xl font-bold">2</span>
            <br />
            <span className="text-muted-foreground text-sm">Total reading days</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold">Posts read in the last year</h2>

        <ActivityHeatmap
          startDate={new Date('2025-01-01')}
          endDate={new Date('2025-12-31')}
          activityList={[
            { date: '2025-01-01', count: 0 },
            { date: '2025-01-02', count: 1 },
            { date: '2025-01-03', count: 2 },
            { date: '2025-01-04', count: 3 },
            { date: '2025-01-05', count: 4 },
          ]}
        />
      </section>
    </div>
  );
}

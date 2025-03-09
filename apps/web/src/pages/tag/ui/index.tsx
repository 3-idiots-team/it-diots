import { Separator } from '@it-diots/shared/ui';

import { AllTags } from '@/widgets/all-tags/ui';
import { TagListForm } from '@/widgets/tag-list-form/ui';

export function TagPage() {
  return (
    <div className="w-full flex flex-col gap-6 p-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <TagListForm title="🔥 추천 태그" />
        <TagListForm title="🚀 인기 태그" />
        <TagListForm title="🔎 최근 추가된 태그" />
      </div>

      <div>
        <p className="text-xl font-bold">모든 태그</p>
        <Separator className="my-4" />

        <AllTags />
      </div>
    </div>
  );
}

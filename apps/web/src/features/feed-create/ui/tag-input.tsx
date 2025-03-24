'use client';

import { useState } from 'react';

import { TagInput as TagInputPrimitive, TagType } from '@it-diots/shared/ui';

export function TagInput() {
  const [exampleTags, setExampleTags] = useState<TagType[]>([]);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  return (
    <TagInputPrimitive
      id="input-56"
      tags={exampleTags}
      inlineTags={false}
      setTags={setExampleTags}
      placeholder="Add a tag"
      styleClasses={{
        tagList: {
          container: 'gap-1',
        },
        input:
          'rounded-lg transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20',
        tag: {
          body: 'relative h-7 bg-background border border-input hover:bg-background rounded-md font-medium text-xs ps-2 pe-7',
          closeButton:
            'absolute -inset-y-px -end-px p-0 rounded-s-none rounded-e-lg flex size-7 transition-colors outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 text-muted-foreground/80 hover:text-foreground',
        },
      }}
      activeTagIndex={activeTagIndex}
      setActiveTagIndex={setActiveTagIndex}
      inputFieldPosition="top"
    />
  );
}

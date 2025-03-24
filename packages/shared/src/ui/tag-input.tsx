'use client';

import { type Tag as TagType, TagInput as TagInputPrimitive, type TagInputProps } from 'emblor';

function TagInput({ ...props }: TagInputProps) {
  return <TagInputPrimitive {...props} />;
}

export { TagInput, TagType };

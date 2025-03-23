'use client';

import { useState } from 'react';

import { Button, Textarea } from '@it-diots/shared/ui';

export function EditReadme() {
  const [startsEdit, setStartsEdit] = useState(false);

  return (
    <section>
      {startsEdit && (
        <div className="grid w-full gap-2">
          <Textarea placeholder="Readme를 작성해주세요!" rows={7} />

          <Button className="ml-auto w-fit" onClick={() => setStartsEdit(false)}>
            저장
          </Button>
        </div>
      )}

      {!startsEdit && (
        <Button variant="outline" onClick={() => setStartsEdit(true)}>
          Readme 수정하기
        </Button>
      )}
    </section>
  );
}

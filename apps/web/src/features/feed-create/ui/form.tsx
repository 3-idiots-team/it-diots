'use client';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Textarea,
} from '@it-diots/shared/ui';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { OGDataInput } from './og-data-input';
import { TagInput } from './tag-input';

import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  username: z.string().min(1, {
    message: 'Username is required',
  }),
});

export function FeedCreateForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={() => (
            <FormItem>
              <FormLabel>URL</FormLabel>

              <FormControl>
                <OGDataInput />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={() => (
            <FormItem>
              <FormLabel>Tags</FormLabel>

              <FormControl>
                <TagInput />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={() => (
            <FormItem>
              <FormLabel>Description</FormLabel>

              <FormControl>
                <Textarea />
              </FormControl>
            </FormItem>
          )}
        />

        <Button className="self-end" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

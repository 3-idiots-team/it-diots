'use client';

import { usePathname } from 'next/navigation';

import { BREADCRUMB_ROUTES } from '@it-diots/shared/constants/page-routes';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Separator,
  SidebarTrigger,
} from '@it-diots/shared/ui';

export function Header() {
  const pathname = usePathname();

  const currentBreadcrumb = BREADCRUMB_ROUTES.find(({ url }) => url === pathname);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 max-h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbPage>{currentBreadcrumb?.group}</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>{currentBreadcrumb?.text}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}

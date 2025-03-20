import { usePathname } from 'next/navigation';

import { BREADCRUMB_ROUTES } from '@it-diots/shared/constants/page-routes';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@it-diots/shared/ui';

export function PathBreadcrumb() {
  const pathname = usePathname();

  const currentBreadcrumb = BREADCRUMB_ROUTES.find(({ url }) => url === pathname);

  return (
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
  );
}

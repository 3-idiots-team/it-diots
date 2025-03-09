import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

declare type Url = string;

export class CustomRouter implements AppRouterInstance {
  back(): void {
    window.history.back();
  }

  forward(): void {
    window.history.forward();
  }

  refresh() {
    window.location.reload();
  }

  push(url: Url): boolean {
    window.location.href = url as string;
    return true;
  }

  replace(url: Url): boolean {
    window.location.href = url as string;
    return true;
  }

  prefetch(): void {}
}

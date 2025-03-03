import { BookMarked, History, Layers, LucideIcon, Newspaper, Tag } from 'lucide-react';

export const PAGE_ROUTES = {
  feed: '/',
  readLater: '/read-later',
  bookmark: '/bookmark',
  history: '/history',
  tag: '/tag',
} as const;

type PageRoutes = typeof PAGE_ROUTES;

interface NavigationRoute {
  text: string;
  url: PageRoutes[keyof PageRoutes];
  icon: LucideIcon;
}

export const NAVIGATION_ROUTES: NavigationRoute[] = [
  {
    text: '전체 피드',
    url: PAGE_ROUTES.feed,
    icon: Newspaper,
  },
  {
    text: '북마크',
    url: PAGE_ROUTES.bookmark,
    icon: BookMarked,
  },
  {
    text: '나중에 볼 피드',
    url: PAGE_ROUTES.readLater,
    icon: Layers,
  },
  {
    text: '히스토리',
    url: PAGE_ROUTES.history,
    icon: History,
  },
  {
    text: '태그',
    url: PAGE_ROUTES.tag,
    icon: Tag,
  },
];

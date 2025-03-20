import { SidebarHeader } from '@it-diots/shared/ui';

export function LogoHeader() {
  return (
    <SidebarHeader className="h-16 flex-row items-center gap-3 pl-5 overflow-hidden">
      <svg
        className="-rotate-12 min-w-5 min-h-5 w-5 h-5"
        viewBox="0 0 202 202"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M171 66L31 66"
          className="dark:stroke-zinc-300 stroke-zinc-500 transition-colors"
          stroke="currentColor"
          strokeWidth="44"
          strokeLinecap="square"
        />
        <path
          d="M171 136L31 136"
          className="dark:stroke-zinc-300 stroke-zinc-500 transition-colors"
          stroke="currentColor"
          strokeWidth="44"
          strokeLinecap="square"
        />
        <path
          d="M66 171L66 31"
          className="dark:stroke-zinc-50 stroke-zinc-900 transition-colors"
          stroke="currentColor"
          strokeWidth="44"
          strokeLinecap="square"
        />
        <path
          d="M136 171L136 31"
          className="dark:stroke-zinc-50 stroke-zinc-900 transition-colors"
          stroke="currentColor"
          strokeWidth="44"
          strokeLinecap="square"
        />
      </svg>

      <h1 className="text-lg font-bold tracking-tight transition-opacity group-data-[state=collapsed]:opacity-0">
        TAGTECH
      </h1>
    </SidebarHeader>
  );
}

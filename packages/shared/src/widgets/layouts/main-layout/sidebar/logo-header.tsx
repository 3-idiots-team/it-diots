import { SidebarHeader } from '@it-diots/shared/ui';

export function LogoHeader() {
  return (
    <SidebarHeader className="h-16 flex-row items-center gap-3 overflow-hidden pl-5">
      <svg
        className="h-5 min-h-5 w-5 min-w-5 -rotate-12"
        viewBox="0 0 202 202"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M171 66L31 66"
          className="stroke-zinc-500 transition-colors dark:stroke-zinc-300"
          stroke="currentColor"
          strokeWidth="44"
          strokeLinecap="square"
        />
        <path
          d="M171 136L31 136"
          className="stroke-zinc-500 transition-colors dark:stroke-zinc-300"
          stroke="currentColor"
          strokeWidth="44"
          strokeLinecap="square"
        />
        <path
          d="M66 171L66 31"
          className="stroke-zinc-900 transition-colors dark:stroke-zinc-50"
          stroke="currentColor"
          strokeWidth="44"
          strokeLinecap="square"
        />
        <path
          d="M136 171L136 31"
          className="stroke-zinc-900 transition-colors dark:stroke-zinc-50"
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

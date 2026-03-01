'use client';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute left-0 top-0 z-[200] h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [-webkit-clip-path:inset(50%)] [clip-path:inset(50%)] focus:left-4 focus:top-4 focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:rounded-md focus:bg-foreground focus:px-4 focus:py-3 focus:text-background focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background focus:[clip-path:none] focus:[-webkit-clip-path:none]"
    >
      Skip to main content
    </a>
  );
}

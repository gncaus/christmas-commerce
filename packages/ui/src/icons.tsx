// Small stroke icon set for storefront UI (trust bar, chips, steps).
const paths: Record<string, React.JSX.Element> = {
  truck: <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7zM7 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />,
  card: <path d="M3 6h18v12H3zM3 10h18M7 15h4" />,
  pix: <path d="M12 3l3.5 3.5L12 10 8.5 6.5zM12 14l3.5 3.5L12 21l-3.5-3.5zM3 12l3.5-3.5L10 12l-3.5 3.5zM14 12l3.5-3.5L21 12l-3.5 3.5z" />,
  refresh: <path d="M20 11a8 8 0 0 0-14.5-4.5M4 4v4h4M4 13a8 8 0 0 0 14.5 4.5M20 20v-4h-4" />,
  shield: <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6zM8.5 12l2.5 2.5 4.5-5" />,
  clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2" />,
  gift: <path d="M4 10h16v10H4zM3 7h18v3H3zM12 7v13M12 7c-2-3-6-3-6-1s3 1 6 1zM12 7c2-3 6-3 6-1s-3 1-6 1z" />,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" />,
  needle: <path d="M5 19L19 5M15 5h4v4M5 19c3-1 4-3 4-6" />,
  chat: <path d="M4 5h16v11H9l-5 4z" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  receipt: <path d="M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6" />,
};

export type IconName = keyof typeof paths;

export function Icon({ name, className }: { name: IconName | string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

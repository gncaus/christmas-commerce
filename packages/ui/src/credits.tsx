export type ImageCredit = {
  file: string;
  title: string;
  creator: string | null;
  license: string;
  licenseUrl: string | null;
  page: string;
};

// Credit list for openly licensed pictures (CC BY / BY-SA require it on the page).
export function Credits({ items, className }: { items: ImageCredit[]; className?: string }) {
  return (
    <details className={className}>
      <summary>Créditos das imagens</summary>
      <ul>
        {items.map((item) => (
          <li key={item.file}>
            <a href={item.page} rel="noopener" target="_blank">
              {item.title}
            </a>
            {item.creator ? `, ${item.creator}` : ""},{" "}
            {item.licenseUrl ? (
              <a href={item.licenseUrl} rel="noopener license" target="_blank">
                {item.license}
              </a>
            ) : (
              item.license
            )}
          </li>
        ))}
      </ul>
    </details>
  );
}

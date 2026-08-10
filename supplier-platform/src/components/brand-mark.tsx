export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
    >
      <rect x="6" y="6" width="20" height="20" rx="2" transform="rotate(45 16 16)" />
      <circle cx="16" cy="16" r="4.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

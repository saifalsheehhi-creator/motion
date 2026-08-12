export function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="brandGradient" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5fd0ea" />
          <stop offset="1" stopColor="#2f6fd1" />
        </linearGradient>
      </defs>
      <path
        d="M16 2 28 9v14l-12 7-12-7V9Z"
        fill="url(#brandGradient)"
      />
      <path d="M16 2v14L4 9Z" fill="#ffffff" fillOpacity="0.22" />
      <path d="M16 16 4 23l12 7 12-7Z" fill="#04101f" fillOpacity="0.18" />
    </svg>
  );
}

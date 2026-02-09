export default function LoveLetterIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
      <path d="M12 11.5c.6-.5 1.5-.7 2 .2.5 1-1 1.5-2 2-1-.5-2.5-1-2-2 .5-.9 1.4-.7 2-.2z" fill="currentColor" stroke="none" opacity="0.7" />
    </svg>
  );
}

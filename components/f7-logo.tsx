export function F7Logo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-gold-dark font-heading text-lg font-bold text-navy shadow-[0_4px_15px_rgba(212,175,55,0.3)] ${className}`}
      aria-hidden="true"
    >
      F7
    </span>
  )
}

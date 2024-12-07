export function CustomLogo({
  className = "h-12 w-12",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Circular background */}
      <circle cx="50" cy="50" r="48" fill="currentColor" opacity="0.1" />

      {/* Main circle outline */}
      <path
        d="M50 2 A48 48 0 0 1 50 98 A48 48 0 0 1 50 2"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />

      {/* Rocking base */}
      <path
        d="M30 75 Q50 85 70 75"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M35 80 Q50 90 65 80"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />

      {/* Bird body outline */}
      <path
        d="M40 45 L60 45 L55 65 L45 65 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />

      {/* Striped bird body - horizontal lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d="M42 47 L58 47"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          transform={`translate(0, ${i * 4})`}
        />
      ))}

      {/* Bird head */}
      <path
        d="M40 45 Q50 35 60 45"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

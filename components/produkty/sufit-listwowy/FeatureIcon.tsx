import { cn } from "@/lib/utils";

const iconClass = "text-alacer-primary";

export function FeatureIcon({
  name,
  className,
}: {
  name: "modular" | "revision" | "material" | "acoustic";
  className?: string;
}) {
  const props = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    className: cn(iconClass, className),
    "aria-hidden": true as const,
  };

  switch (name) {
    case "modular":
      return (
        <svg {...props}>
          <path
            d="M2 8h12M8 2v12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "revision":
      return (
        <svg {...props}>
          <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 5v3l2 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "material":
      return (
        <svg {...props}>
          <path
            d="M3 13 L8 3 L13 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 10h6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "acoustic":
      return (
        <svg {...props}>
          <path
            d="M2 4h12v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M5 4V2h6v2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

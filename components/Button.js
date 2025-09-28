// components/Button.js
import Link from "next/link";

export default function Button({ href, children, variant = "blue", className = "" }) {
  const base = "btn " + className;

  if (variant === "blue") 
    return (
      <Link
        href={href || "#"}
        className={`${base} bg-[#2563eb] text-white hover:bg-[#1d4ed8] inline-block`}
      >
        {children}
      </Link>
    );

  if (variant === "gray") 
    return (
      <Link
        href={href || "#"}
        className={`${base} bg-[#6b7280] text-white hover:bg-[#4b5563] inline-block`}
      >
        {children}
      </Link>
    );

  // default light variant
  return (
    <Link
      href={href || "#"}
      className={`${base} bg-white text-[#1f2937] border border-gray-300 hover:bg-gray-100 inline-block`}
    >
      {children}
    </Link>
  );
}

import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type: "button" | "link";
  href?: string;
  className?: string;
}

function Button({
  children,
  onClick,
  disabled = false,
  type,
  href,
  className,
}: ButtonProps) {
  if (type === "button") {
    return (
      <button
        className={`btn ${className ? className : ""}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  if (type === "link") {
    return (
      <Link
        className={`btn ${className ? className : ""}`}
        href={href ? href : "/"}
      >
        {children}
      </Link>
    );
  }
}

export default Button;

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "gradient" | "primary" | "default";
  className?: string;
  children: React.ReactNode;
};

const variantClasses: Record<string, string> = {
  gradient:
    "text-white bg-gradient-to-bl from-[#66E1F7] via-[#64C7E9] to-[#0FB9BC]",
  primary:
    "text-white bg-gradient-to-r from-[#21bcc6] to-[#66dbf4] font-semibold shadow-md hover:bg-black hover:outline hover:outline-black transition-transform duration-500 hover:scale-105",
  default: "",
};

const Button = ({
  children,
  className,
  variant = "gradient",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`py-2 px-4 rounded-lg cursor-pointer ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

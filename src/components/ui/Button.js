import React from "react";
import { cn } from "@/utils/merge";

const Button = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-100",
    ghost: " text-blue-500  hover:bg-gray-100",
    success: "bg-green-500 text-white hover:bg-green-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      ref={ref}
      className={cn(
        "px-4 py-2 rounded-md font-medium transition-colors",
        variants[variant],
        className // Ajout des classes supplémentaires via `className`
      )}
      {...props}
    />
  );
});

Button.displayName = "Button";

export default Button;

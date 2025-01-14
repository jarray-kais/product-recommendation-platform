import React from "react";
import { cn } from "@/utils/merge";

const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export default Input;

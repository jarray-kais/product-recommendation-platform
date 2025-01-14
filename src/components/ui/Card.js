import React from "react";
import { cn } from "@/utils/merge";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border shadow p-4", className)} {...props} />
));
Card.displayName = "Card";

export const CardHeader = ({ children, className }) => (
  <div className={cn("border-b p-4", className)}>{children}</div>
);

export const CardBody = ({ children, className }) => (
  <div className={cn("p-4", className)}>{children}</div>
);

export const CardFooter = ({ children, className }) => (
  <div className={cn("border-t p-4", className)}>{children}</div>
);

export default Card;

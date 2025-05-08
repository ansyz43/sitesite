import React from "react";
import { cn } from "@/lib/utils";

interface MontserratTextProps {
  children: React.ReactNode;
  className?: string;
}

const MontserratText = ({ children, className }: MontserratTextProps) => {
  return <span className={cn("font-montserrat", className)}>{children}</span>;
};

export default MontserratText;

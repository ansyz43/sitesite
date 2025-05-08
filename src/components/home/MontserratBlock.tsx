import React from "react";

interface MontserratBlockProps {
  children: React.ReactNode;
  className?: string;
}

const MontserratBlock = ({
  children,
  className = "",
}: MontserratBlockProps) => {
  return (
    <div
      className={className}
      style={{
        fontFamily: "Montserrat, Arial, sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      {children}
    </div>
  );
};

export default MontserratBlock;

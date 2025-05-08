import React from "react";

interface HeroTextBlockProps {
  text: string;
  className?: string;
}

const HeroTextBlock = ({ text, className = "" }: HeroTextBlockProps) => {
  return (
    <div
      className={`text-xl md:text-2xl text-white font-bold text-center tracking-[1.5px] ${className}`}
      style={{
        fontFamily: "Montserrat, Arial, sans-serif !important",
        textShadow:
          "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black",
      }}
    >
      {text}
    </div>
  );
};

export default HeroTextBlock;

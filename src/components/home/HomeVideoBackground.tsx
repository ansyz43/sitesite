import React, { useEffect, useState } from "react";

interface HomeBackgroundProps {
  children: React.ReactNode;
  imageSrc?: string;
}

const HomeVideoBackground = ({
  children,
  imageSrc = "/back (3).jpg",
}: HomeBackgroundProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => console.error(`Failed to load image: ${imageSrc}`);
  }, [imageSrc]);

  return (
    <div className="relative min-h-screen bg-[#111111] overflow-hidden">
      {/* Image background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute h-full w-full bg-cover bg-center bg-no-repeat transition-opacity duration-300"
          style={{
            backgroundImage: `url(${imageSrc})`,
            opacity: imageLoaded ? 1 : 0,
          }}
        ></div>
        {/* Fallback background color while image loads */}
        <div className="absolute inset-0 bg-[#111111]"></div>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default HomeVideoBackground;

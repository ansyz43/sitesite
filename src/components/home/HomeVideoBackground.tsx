import React, { useRef, useEffect, useState } from "react";

interface HomeVideoBackgroundProps {
  children: React.ReactNode;
  videoSrc?: string;
}

const HomeVideoBackground = ({
  children,
  videoSrc = "/home.mp4",
}: HomeVideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video slightly

      // Add event listener for when video can play
      const handleCanPlay = () => {
        setIsVideoLoaded(true);
        videoRef.current?.play().catch((error) => {
          console.error("Video autoplay failed:", error);
        });
      };

      videoRef.current.addEventListener("canplay", handleCanPlay);

      // Clean up
      return () => {
        videoRef.current?.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#111111] overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default HomeVideoBackground;

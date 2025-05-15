import React, { useEffect, useState } from "react";

interface ImageDebugProps {
  imagePaths: string[];
}

const ImageDebug = ({
  imagePaths = [
    "./back (1).jpg",
    "./back (2).jpg",
    "./back (3).jpg",
    "./back (4).jpg",
    "./back (5).jpg",
    "./back (6).jpg",
    "./back (7).jpg",
  ],
}: ImageDebugProps) => {
  const [imageStatuses, setImageStatuses] = useState<Record<string, boolean>>(
    {},
  );

  useEffect(() => {
    const checkImages = async () => {
      const statuses: Record<string, boolean> = {};

      for (const path of imagePaths) {
        const img = new Image();
        img.src = path;

        try {
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });
          statuses[path] = true;
        } catch (e) {
          statuses[path] = false;
          console.error(`Failed to load image: ${path}`);
        }
      }

      setImageStatuses(statuses);
    };

    checkImages();
  }, [imagePaths]);

  return (
    <div className="fixed top-0 right-0 bg-black/80 p-4 text-white z-50 max-w-xs overflow-auto max-h-screen">
      <h3 className="text-lg font-bold mb-2">Image Debug</h3>
      <ul className="space-y-1 text-sm">
        {imagePaths.map((path) => (
          <li key={path} className="flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-full ${imageStatuses[path] === undefined ? "bg-yellow-500" : imageStatuses[path] ? "bg-green-500" : "bg-red-500"}`}
            ></span>
            <span className="truncate">{path}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageDebug;

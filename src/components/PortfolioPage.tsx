import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface ImageItem {
  id: string;
  path: string;
  title: string;
  category: string;
}

const PortfolioPage: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const location = useLocation();
  const currentPath = location.pathname;

  // Filter category based on current path
  const filterCategory =
    currentPath === "/portfolio/photo"
      ? "Фото"
      : currentPath === "/portfolio/video"
        ? "Видео"
        : null;

  useEffect(() => {
    // This is a static list of portfolio images from the public folder
    // In a real application, you would fetch this from an API or backend
    const portfolioImages: ImageItem[] = [
      {
        id: "1",
        path: "/portfolio/assets_task_01jv2weq82e2t8yy852qtemebp_1747074971_img_1.jpg",
        title: "Проект 1",
        category: "Фото",
      },
      {
        id: "2",
        path: "/portfolio/assets_task_01jv2weq82e2t8yy852qtemebp_1747074971_img_1.webp",
        title: "Проект 2",
        category: "Фото",
      },
      {
        id: "3",
        path: "/portfolio/assets_task_01jv2wmmpzecetrwv0azfbg7x0_1747075176_img_0.jpg",
        title: "Проект 3",
        category: "Фото",
      },
      {
        id: "4",
        path: "/portfolio/assets_task_01jv2wmmpzecetrwv0azfbg7x0_1747075176_img_0.webp",
        title: "Проект 4",
        category: "Фото",
      },
      {
        id: "5",
        path: "/portfolio/assets_task_01jv2wz9b6etf8mgta8hh7jxxq_1747075513_img_0.webp",
        title: "Проект 5",
        category: "Фото",
      },
      {
        id: "6",
        path: "/portfolio/assets_task_01jv2x97mheee9d30r9808pkj0_1747075853_img_0.webp",
        title: "Проект 6",
        category: "Фото",
      },
      {
        id: "7",
        path: "/portfolio/assets_task_01jv2xgz06exfs027gekmtw4rx_1747076106_img_0.webp",
        title: "Проект 7",
        category: "Видео",
      },
      {
        id: "8",
        path: "/portfolio/assets_task_01jv31q4yvecy9t2kfq1a1ypj5_1747080490_img_0.webp",
        title: "Проект 8",
        category: "Видео",
      },
      {
        id: "9",
        path: "/portfolio/assets_task_01jv31v8x7fnw96brb8hvbghq8_1747080636_img_0.jpg",
        title: "Проект 9",
        category: "Видео",
      },
      {
        id: "10",
        path: "/portfolio/assets_task_01jv32ba95e3s92e7t8nae7w93_1747081155_img_1.webp",
        title: "Проект 10",
        category: "Видео",
      },
      {
        id: "11",
        path: "/portfolio/assets_task_01jv33c5ddfx6t1z0cjzppk5yr_1747082236_img_1.webp",
        title: "Проект 11",
        category: "Видео",
      },
      {
        id: "12",
        path: "/portfolio/assets_task_01jv33k30vf7qv86jy9cqg8hy6_1747082457_img_0.webp",
        title: "Проект 12",
        category: "Видео",
      },
    ];

    // Filter images based on the current path
    if (filterCategory) {
      setImages(
        portfolioImages.filter((img) => img.category === filterCategory),
      );
    } else {
      setImages(portfolioImages);
    }
  }, [filterCategory]);

  return (
    <div className="bg-[#111111] min-h-screen text-white py-20">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <Link
            to="/"
            className="text-white/70 hover:text-white mb-8 inline-block transition-colors"
          >
            &larr; Назад на главную
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            {filterCategory ? `Наши работы: ${filterCategory}` : "Наши работы"}
          </h1>
        </motion.div>

        {!filterCategory && (
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <Link
              to="/portfolio/photo"
              className="bg-[#1a1a1a] border border-[#333333] hover:border-[#E30613] p-8 rounded-lg transition-all duration-300 ease-in-out text-center w-full md:w-1/2"
            >
              <h3 className="text-white text-2xl font-bold mb-3 tracking-[2px] uppercase">
                Фото
              </h3>
            </Link>
            <div className="bg-[#1a1a1a] border border-[#333333] p-8 rounded-lg text-center w-full md:w-1/2 opacity-70 cursor-not-allowed">
              <h3 className="text-white text-2xl font-bold mb-3 tracking-[2px] uppercase">
                Видео (Скоро)
              </h3>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {images.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="relative cursor-pointer group overflow-hidden rounded-lg"
            >
              <div className="aspect-[9/16] bg-gray-900 w-full">
                <img
                  src={item.path}
                  alt={`${item.title}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="flex items-center mt-2">
                  <span className="inline-block px-3 py-1 bg-[#E30613] text-white text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filterCategory && (
          <div className="flex justify-center">
            <Link
              to="/portfolio"
              className="bg-[#1a1a1a] border border-[#333333] hover:border-[#E30613] px-8 py-4 rounded-lg transition-all duration-300 ease-in-out text-center"
            >
              <span className="text-white text-lg font-medium">
                Смотреть все работы
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;

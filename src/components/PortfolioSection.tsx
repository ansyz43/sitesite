import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PortfolioItem {
  id: string;
  brand: string;
  metric: string;
  thumbnailUrl: string;
  gifUrl: string;
  videoUrl: string;
}

interface USP {
  icon: string;
  title: string;
}

interface PortfolioSectionProps {
  portfolioItems?: PortfolioItem[];
  usps?: USP[];
}

const PortfolioSection = ({
  portfolioItems = [
    {
      id: "1",
      brand: "Luxury Brand",
      metric: "CPA -28%",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      gifUrl:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      videoUrl: "https://example.com/video1.mp4",
    },
    {
      id: "2",
      brand: "Tech Company",
      metric: "CTR +45%",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
      gifUrl:
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
      videoUrl: "https://example.com/video2.mp4",
    },
    {
      id: "3",
      brand: "Fashion Label",
      metric: "ROI +120%",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      gifUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      videoUrl: "https://example.com/video3.mp4",
    },
  ],
  usps = [
    { icon: "⚡", title: "Speed" },
    { icon: "💰", title: "Budget-70%" },
    { icon: "♾", title: "Visual freedom" },
    { icon: "📈", title: "Engagement ↑" },
    { icon: "🧩", title: "Unified style" },
  ],
}: PortfolioSectionProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#111111] text-white relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('/u3178933537_Ultra-minimalist_website_homepage_for_a_creative__39ef95b2-48c9-4d13-a92e-b7e616fbb154_3.png')",
          backgroundBlendMode: "overlay",
        }}
      />
      <div className="container relative z-10 mx-auto max-w-[1280px] px-4 md:px-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Portfolio</h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Discover how our AI-generated content has transformed brands and
            boosted performance metrics.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {portfolioItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * parseInt(item.id) }}
                  viewport={{ once: true }}
                  className="relative cursor-pointer group overflow-hidden rounded-lg"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <AspectRatio ratio={4 / 3} className="bg-gray-900">
                    <img
                      src={
                        hoveredItem === item.id
                          ? item.gifUrl
                          : item.thumbnailUrl
                      }
                      alt={`${item.brand} project`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold">{item.brand}</h3>
                    <div className="flex items-center mt-2">
                      <span className="inline-block px-3 py-1 bg-[#E30613] text-white text-sm font-medium rounded-full">
                        {item.metric}
                      </span>
                      <span className="ml-auto text-sm text-white/70">
                        Click to view
                      </span>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-[#111111] border-gray-800">
                <div className="aspect-video w-full">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    poster={item.thumbnailUrl}
                  >
                    <source src={item.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white">{item.brand}</h3>
                  <p className="text-gray-300 mt-2">
                    Performance: {item.metric}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Why Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Us</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300 border border-white/10"
            >
              <span className="text-4xl mb-4">{usp.icon}</span>
              <h3 className="text-lg font-medium text-white">{usp.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

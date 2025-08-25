import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ImagesSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
}
const ImagesSection = ({ images, className }: ImagesSectionProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDir, setScrollDir] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (scrollDir && containerRef.current) {
      interval = setInterval(() => {
        containerRef.current!.scrollLeft += scrollDir === "right" ? 5 : -5;
      }, 16); // ~60fps
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [scrollDir]);

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Image
        src={images[selectedImage]}
        alt="Product Image"
        className="w-full h-auto object-cover rounded-2xl"
        width={500}
        height={500}
      />
      <div className="relative flex flex-row">
        <div
          className="absolute flex items-center justify-center text-white p-0.5 h-[90%] top-[5%] hover:bg-black/30 bg-black/20 cursor-pointer"
          onMouseEnter={() => setScrollDir("left")}
          onMouseLeave={() => setScrollDir(null)}
        >
          <IoIosArrowBack />
        </div>
        <div
          ref={containerRef}
          className="scrollbar-hide max-w-96 overflow-auto flex flex-row flex-wrap"
        >
          <div className=" flex flex-row gap-3 px-4 py-2">
            {images.map((image, index) => (
              <Image
                aria-selected={index === selectedImage}
                src={image}
                alt="Product"
                width={100}
                height={100}
                onMouseEnter={() => setSelectedImage(index)}
                className={cn(
                  "rounded-md cursor-pointer aria-selected:outline-2 aria-selected:outline-amber-400"
                )}
              />
            ))}
            {images.map((image, index) => (
              <Image
                aria-selected={index === selectedImage}
                src={image}
                alt="Product"
                width={100}
                height={100}
                onMouseEnter={() => setSelectedImage(index)}
                className={cn(
                  "rounded-md cursor-pointer aria-selected:outline-2 aria-selected:outline-amber-400"
                )}
              />
            ))}
          </div>
        </div>
        <div
          className="absolute flex items-center justify-center text-white p-0.5 h-[90%] right-0 top-[5%] hover:bg-black/30 bg-black/20 cursor-pointer"
          onMouseEnter={() => setScrollDir("right")}
          onMouseLeave={() => setScrollDir(null)}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;

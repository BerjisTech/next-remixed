"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";
import Image from "next/image";

const ImageCarousel = () => {
  const images = Array.from(
    { length: 29 },
    (_, i) => `/next/next_assets/images/justin/${i + 1}.jpeg`
  );

  return (
    <Carousel className="w-full justify-center items-center">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="w-full h-[500px] overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;

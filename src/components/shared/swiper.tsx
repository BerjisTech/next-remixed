import React, { useEffect, useState } from "react";
import { SwiperProps } from "@/interfaces/general";
import Image from "next/image";
import clsx from "clsx";

const Swiper: React.FC<SwiperProps> = ({ items, onGetRoomClick, onSlideClicked, className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (items.length > 2) {
      showNext(0);
    }
  }, [items]);

  const createRoomClicked = (user: any) => {
    onGetRoomClick({ user });
  };

  const showPrev = (i: number) => {
    if (selectedIndex > 0) {
      setSelectedIndex(i - 1);
    }
    updateSlides(i, selectedIndex - 1, "prev");
  };

  const showNext = (i: number) => {
    if (selectedIndex < items.length - 1) {
      setSelectedIndex(i + 1);
    }
    updateSlides(i, selectedIndex + 1, "next");
  };

  const updateSlides = (index: number, selected: number, type: string) => {
    onSlideClicked({ index, selected, type });
  };

  return (
    <div className={`slider-container ${className}`}>
      <div className="swiper-slider-container">
        {items.map((item, i) => (
          <div
            key={i}
            className={clsx(
              "slider-item mswiper-item",
              i === selectedIndex && "selected",
              i === selectedIndex - 1 && "prev",
              i === selectedIndex + 1 && "next",
              i < selectedIndex - 1 && "hideLeft",
              i > selectedIndex + 1 && "hideRight"
            )}
          >
            {i === selectedIndex && (
              <button
                type="button"
                className="btn slider-button left-slide-btn"
                onClick={() => showPrev(i)}
              >
                <i className="uil uil-angle-left"></i>
              </button>
            )}
            <div className="slider-img">
              <div className="inner-item-wrap mswiper">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={300}
                  height={300}
                  className="img-item object-cover object-center w-full h-full max-h-[300px]"
                />
              </div>
            </div>
            {i === selectedIndex && (
              <button
                type="button"
                className="btn slider-button right-slide-btn"
                onClick={() => showNext(i)}
              >
                <i className="uil uil-angle-right"></i>
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 my-8 mt-12">
        <div className="span-cols-1 text-right">
          <button
            type="button"
            className="btn btn-sm p-2 border-0"
            onClick={() => showPrev(selectedIndex)}
          >
            <i className="w-8 h-8">
              <Image
                src="/next/next_assets/images/chevron-left.svg"
                alt="chevron-left"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </i>
          </button>
        </div>
        <div className="span-cols-1 text-left">
          <button
            type="button"
            className="btn btn-sm p-2 border-0"
            onClick={() => showNext(selectedIndex)}
          >
            <i className="w-8 h-8">
              <Image
                src="/next/next_assets/images/chevron-right.svg"
                alt="chevron-right"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swiper;

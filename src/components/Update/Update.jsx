'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import useLandingPageStore from "../../../libs/useLandingPageStore";
import { GrNext, GrPrevious } from "react-icons/gr";

const Update = () => {
  const details = useLandingPageStore((state) => state.details);
  const images = details?.imageCarousel || [];

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 15 },
      },
    },
    centered: true,
    renderMode: "performance",
    created: (slider) => setCurrent(slider.track.details.rel),
  });

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 3) return;

    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, instanceRef]);

  const showControls = images.length > 3;

  return (
    <section className="py-20 bg-eerie-black-2 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-gold-crayola">Recent Updates</h2>
        <div className="w-24 h-[2px] bg-gold-crayola mx-auto my-3" />
        <h1 className="text-4xl font-forum-display">Upcoming Event</h1>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div ref={sliderRef} className="keen-slider">
          {images.map((item, index) => (
            <div
              key={item.id}
              className={`keen-slider__slide flex justify-center transition-transform duration-300`}
            >
              <div className="relative w-full h-[400px] max-w-xs rounded-lg overflow-hidden">
                <Image
                  src={item.image.url}
                  alt={item.image.alt || "Event"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        {showControls && (
          <>
            {/* <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gold-crayola text-black px-3 py-2 rounded-l-md z-20"
            >
              ◀
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gold-crayola text-black px-3 py-2 rounded-r-md z-20"
            >
              ▶
            </button> */}

      <div className='absolute inset-0 z-20 w-full h-20 hidden md:flex my-auto justify-between items-center px-5'>
        <button onClick={()=>instanceRef.current?.prev()} className='bg-gold-crayola text-black rotate-45 w-12 h-12 border border-gold-crayola flex justify-center items-center cursor-pointer transition-all hover:bg-gold-crayola hover:text-black'>
            <GrPrevious className='-rotate-45'  />
        </button>
        <button
              onClick={() => instanceRef.current?.next()}
          className='bg-gold-crayola text-black rotate-45 w-12 h-12 border border-gold-crayola flex justify-center items-center cursor-pointer transition-all hover:bg-gold-crayola hover:text-black'>
            <GrNext className='-rotate-45' />
        </button>
      </div>

          </>
        )}
      </div>
    </section>
  );
};

export default Update;

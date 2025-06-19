'use client';
import Image from 'next/image';
import Link from 'next/link';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import React, { useState, useEffect } from 'react';
import Seperator from '../Seperator';
import useLandingPageStore from '../../../libs/useLandingPageStore';

const heroSlides = [
  {
    id: 1,
    subtitle: "Traditional & Hygiene",
    title: "For the love of\ndelicious food",
    text: "Come with family & feel the joy of mouthwatering food",
    btnText: "View Our Menu",
    btnHref: "#",
  },
  {
    id: 2,
    subtitle: "Delightful experience",
    title: "Flavors Inspired by\nthe Seasons",
    text: "Come with family & feel the joy of mouthwatering food",
    btnText: "View Our Menu",
    btnHref: "#",
  },
  {
    id: 3,
    subtitle: "Amazing & delicious",
    title: "Where every flavor\ntells a story",
    text: "Come with family & feel the joy of mouthwatering food",
    btnText: "View Our Menu",
    btnHref: "#",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Get details from store
  const details = useLandingPageStore((state) => state.details);
  const videos = details?.showCase?.videos || [];

  useEffect(() => {
    // Only start interval if we have videos
    if (videos.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % videos.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [videos.length]);

  const renderSlides = () => {
    // Use videos from API if available, otherwise fallback to default slides
    const slidesToRender = videos.length > 0 ? videos : heroSlides;
    
    return slidesToRender.map((slide, index) => (
      <div
        key={slide.id}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          width={1880}
          height={950}
          alt={slide.videoTitle || "Hero slide"}
          className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none transition-transform duration-5000 ease-out ${
            index === currentSlide ? 'scale-110' : 'scale-100'
          }`}
          src={videos.length > 0 ? slide.VideoThumbnail : `/images/${slide.image}`}
          priority={index === 0}
          style={{
            animation: index === currentSlide ? 'zoomIn 5s ease-out forwards' : 'none',
          }}
        />
      </div>
    ));
  };

  // Use first slide data for static text content
  const currentSlideData = heroSlides[0];
  const bgImage = details.backgroundImage?.url

  return (
    <section className={` bg-cover bg-center relative min-h-dvh flex justify-center items-center px-5 xl:px-0 overflow-hidden `}
    style={{
      backgroundImage: `url(${bgImage})`
    }}
    >
      {renderSlides()}
      
      <div className="absolute inset-0 bg-black/80 z-10" />
      
      <div className="relative z-20 mt-20 w-full text-center max-w-[700px] space-y-5">
        <div className={`flex items-center justify-center flex-col gap-[2px]`}>
          <p className="text-gold-crayola uppercase tracking-wide">
            {details.heroTicker}
          </p>
          <span className="text-gold-crayola uppercase tracking-wide">
            <Seperator/>
          </span>
        </div>
        
        <h1 className="text-4xl font-forum-display md:text-4xl xl:text-7xl whitespace-pre-line">
          {details.heroTitle}
        </h1>
        
        <p className="text-sm md:text-base">
          {details.heroSubText}
        </p>
        
        <div>
          <Link
            href='#'
            className="group border-2 border-gold-crayola relative inline-block text-[14px] font-medium uppercase py-5 px-10 bg-transparent overflow-hidden"
          >
            <p className="relative z-10 transition-colors text-gold-crayola duration-300 group-hover:text-black">
              View Events
            </p>
            <span className="absolute left-0 top-0 w-full h-0 bg-gold-crayola transition-all duration-500 ease-in-out group-hover:h-full z-0" />
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes zoomIn {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
      `}</style>
      
      <Link href={'#'} className=' text-center absolute isolate bottom-5 z-20 uppercase text-[13px] right-10 w-[80px] md:w-[100px] aspect-square text-black bg-gold-crayola inline-flex justify-center items-center gap-1 flex-col'>
        <div className="absolute -z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite] border-2 border-gold-crayola w-full aspect-square"></div>
        <Image src={'/images/hero-icon.png'} width={48} height={48} alt="hero-icon" className=' w-[28px] md:w-[48px]' />
        <p className='px-5 leading-none'>Make <br />Reservation</p>
      </Link>
    </section>
  );
};

export default Hero;
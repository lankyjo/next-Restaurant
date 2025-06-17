'use client';
import Image from 'next/image';
import Link from 'next/link';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import React, { useState, useEffect } from 'react';
import Seperator from '../Seperator';

const heroSlides = [
  {
    id: 1,
    image: "hero-slider-1.jpg",
    subtitle: "Traditional & Hygiene",
    title: "For the love of\ndelicious food",
    text: "Come with family & feel the joy of mouthwatering food",
    btnText: "View Our Menu",
    btnHref: "#",
  },
  {
    id: 2,
    image: "hero-slider-2.jpg",
    subtitle: "Delightful experience",
    title: "Flavors Inspired by\nthe Seasons",
    text: "Come with family & feel the joy of mouthwatering food",
    btnText: "View Our Menu",
    btnHref: "#",
  },
  {
    id: 3,
    image: "hero-slider-3.jpg",
    subtitle: "Amazing & delicious",
    title: "Where every flavor\ntells a story",
    text: "Come with family & feel the joy of mouthwatering food",
    btnText: "View Our Menu",
    btnHref: "#",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      animateSlideChange();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const animateSlideChange = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 600);
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  // const handleSlideChange = (index) => {
  //   if (index !== currentSlide) {
  //     setIsAnimating(true);
  //     setTimeout(() => {
  //       setCurrentSlide(index);
  //     }, 600);
  //     setTimeout(() => {
  //       setIsAnimating(false);
  //     }, 800);
  //   }
  // };

  const renderSlides = () =>
    heroSlides.map((slide, index) => (
      <div
        key={slide.id}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          width={1880}
          height={950}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none transition-transform duration-5000 ease-out ${
            index === currentSlide ? 'scale-110' : 'scale-100'
          }`}
          src={`/images/${slide.image}`}
          priority={index === 0}
          style={{
            animation: index === currentSlide ? 'zoomIn 5s ease-out forwards' : 'none',
          }}
        />
      </div>
    ));

  const currentSlideData = heroSlides[currentSlide];

function nextSlide() {
  if (isAnimating) return;  // prevent spamming buttons
  setIsAnimating(true);
  setTimeout(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, 600);
  setTimeout(() => {
    setIsAnimating(false);
  }, 800);
}

function prevSlide() {
  if (isAnimating) return;  // prevent spamming buttons
  setIsAnimating(true);
  setTimeout(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, 600);
  setTimeout(() => {
    setIsAnimating(false);
  }, 800);
}


  return (
    <section className="relative min-h-dvh flex justify-center items-center px-5 xl:px-0 overflow-hidden">
      {renderSlides()}
      {/* Navigation BUTTONS */}
      <div className='absolute inset-0 z-20 w-full h-20 hidden md:flex my-auto justify-between items-center px-5'>
        <button onClick={prevSlide} className='rotate-45 w-12 h-12 border border-gold-crayola flex justify-center items-center cursor-pointer transition-all hover:bg-gold-crayola hover:text-black'>
            <GrPrevious className='-rotate-45'  />
        </button>
        <button onClick={nextSlide} className='rotate-45 w-12 h-12 border border-gold-crayola flex justify-center items-center cursor-pointer transition-all hover:bg-gold-crayola hover:text-black'>
            <GrNext className='-rotate-45' />
        </button>
      </div>
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="relative z-20 mt-20 w-full text-center max-w-[700px] space-y-5">
        <div className={`flex items-center justify-center flex-col gap-[2px]`}>
                  <p
          className={`text-gold-crayola uppercase tracking-wide transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isAnimating ? 'opacity-0 translate-y-8 scale-95 blur-sm' : 'opacity-100 translate-y-0 scale-100 blur-0'
          }`}
          style={{ transitionDelay: isAnimating ? '0ms' : '200ms' }}
        >
          {currentSlideData.subtitle}
        </p>
        <span className={`text-gold-crayola uppercase tracking-wide transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isAnimating ? 'opacity-0 translate-y-8 scale-95 blur-sm' : 'opacity-100 translate-y-0 scale-100 blur-0'
          }`}
          style={{ transitionDelay: isAnimating ? '0ms' : '200ms' }} >
        <Seperator/>
        </span>
        </div>
        <h1
          className={`text-4xl font-forum-display md:text-4xl xl:text-7xl whitespace-pre-line transition-all duration-1200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isAnimating ? 'opacity-0 translate-y-12 scale-95 blur-sm' : 'opacity-100 translate-y-0 scale-100 blur-0'
          }`}
          style={{ transitionDelay: isAnimating ? '50ms' : '400ms' }}
        >
          {currentSlideData.title}
        </h1>
        <p
          className={`text-sm md:text-base transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isAnimating ? 'opacity-0 translate-y-8 scale-95 blur-sm' : 'opacity-100 translate-y-0 scale-100 blur-0'
          }`}
          style={{ transitionDelay: isAnimating ? '100ms' : '600ms' }}
        >
          {currentSlideData.text}
        </p>
        <div
          className={`transition-all duration-1200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isAnimating ? 'opacity-0 translate-y-10 scale-95 blur-sm' : 'opacity-100 translate-y-0 scale-100 blur-0'
          }`}
          style={{ transitionDelay: isAnimating ? '150ms' : '800ms' }}
        >
          <Link
            href={currentSlideData.btnHref}
            className="group border border-gold-crayola relative inline-block text-[14px] font-medium uppercase py-5 px-10 bg-transparent overflow-hidden"
          >
            <p className="relative z-10 transition-colors text-gold-crayola duration-300 group-hover:text-black">
              {currentSlideData.btnText}
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
      <Link href={'#'} className=' text-center absolute isolate bottom-5 z-20 uppercase text-[13px] sm:text-sm right-10 w-[80px] md:w-[100px] aspect-square text-black bg-gold-crayola inline-flex justify-center items-center gap-1 flex-col'>
        <div className="absolute -z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite] border-2 border-gold-crayola w-full aspect-square"></div>
        <Image src={'/images/hero-icon.png'} width={48} height={48} alt="hero-icon" className=' w-[28px] md:w-[48px]' />
        <p className='px-5 leading-none'>Book a table</p>
      </Link>

    </section>
  );
};

export default Hero;

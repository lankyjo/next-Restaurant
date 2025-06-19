'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Seperator from '../Seperator';
import useLandingPageStore from '../../../libs/useLandingPageStore';

const Offer = () => {
  const details = useLandingPageStore((state) => state.details);

  const services = [
    {
      title: "Upcoming Events",
      count: details?.eventGroup?.count || 0,
      image: details?.eventGroup?.images?.[0]?.image?.url || "/images/service-1.jpg",
      alt: "Events",
      menuLink: "#",
    },
    {
      title: "Artists",
      count: details?.ArtistGroup?.count || 0,
      image: details?.ArtistGroup?.images?.[0]?.image?.url || "/images/service-2.jpg",
      alt: "Artists",
      menuLink: "#",
    },
    {
      title: "Tickets Sold",
      count: details?.ticketsGroup?.count || 0,
      image: details?.ticketsGroup?.images?.[0]?.image?.url || "/images/service-3.jpg",
      alt: "Tickets",
      menuLink: "#",
    },
  ];

  return (
    <section id='about' className="relative min-h-[600px] isolate bg-smoky-black-1 py-10 xl:py-20 overflow-hidden">
      <div className="container mx-auto px-4 xl:px-0">
        {/* Title Section */}
        <div className="text-center max-w-[400px] mx-auto space-y-5">
          <div className="flex items-center justify-center flex-col gap-[2px]">
            <h2 className="text-gold-crayola">Seamless Event Management</h2>
            <Seperator />
          </div>
          <h1 className="text-5xl font-forum-display">Unforgettable Experiences</h1>
          <p>
            From concept to execution, we bring your vision to life. Whether it's a concert, conference, or celebration, our team ensures every event runs smoothly and leaves a lasting impression.
          </p>
        </div>

        {/* Offer Cards */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 mt-10 xl:-mt-45 place-items-center [&>*:nth-child(2)]:xl:mt-55">
          {services.map((service, index) => (
            <OfferCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Decorative Shapes */}
      <Image
        src="/images/shape-1.png"
        width="246"
        height="412"
        alt="shape"
        className="move-anim -z-1 absolute bottom-0 left-0"
      />
      <Image
        src="/images/shape-2.png"
        width="343"
        height="345"
        alt="shape"
        className="move-anim -z-1 absolute top-0 right-0"
      />
    </section>
  );
};

export default Offer;

function OfferCard({ title, count, image, alt, menuLink }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-xs group">
      <div className="relative isolate py-8 w-full aspect-[3/4] max-h-[400px] overflow-hidden">
        {/* Pattern background */}
        <div className="absolute group-hover:rotate-y-180 transition-transform duration-500 top-0 left-1/2 transform -translate-x-1/2 -z-10 w-28 md:w-32 lg:w-36 h-full bg-[url(/images/img-pattern.svg)] bg-repeat-y"></div>

        {/* Image Container */}
        <div className="relative w-full h-full overflow-hidden cursor-pointer rounded-lg">
          {/* Skeleton Loader */}
          {isLoading && (
            <div className="absolute inset-0 bg-white/5 animate-pulse z-10 rounded-lg" />
          )}

          <Image
            width={285}
            height={336}
            src={image}
            alt={alt}
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Shine effect overlay */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-out">
            <div className="w-50 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 scale-y-150 -translate-y-1/4"></div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl md:text-2xl lg:text-3xl uppercase font-forum-display mb-2 transition-colors duration-300 group-hover:text-gold-crayola">
          {count}
          {title === 'Tickets Sold' ? 'K' : ''}+ {title}
        </h3>
      </div>
    </div>
  );
}

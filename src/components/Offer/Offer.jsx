import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Seperator from '../Seperator';

const services = [
  {
    title: "Breakfast",
    image: "/images/service-1.jpg",
    alt: "Breakfast",
    menuLink: "#",
  },
  {
    title: "Appetizers",
    image: "/images/service-2.jpg",
    alt: "Appetizers",
    menuLink: "#",
  },
  {
    title: "Drinks",
    image: "/images/service-3.jpg",
    alt: "Drinks",
    menuLink: "#",
  },
];

const Offer = () => {
  return (
    <section className='relative min-h-dvh isolate bg-smoky-black-1 py-10 xl:py-20 overflow-hidden'>
        <div className=' container mx-auto px-4 xl:px-0'>
            {/* TITLE */}
            <div className=' text-center max-w-[400px] mx-auto space-y-5'>
              <div className='flex items-center justify-center flex-col gap-[2px]'>
              <h2 className=' text-gold-crayola '>Flavors For Royalty</h2>
              <Seperator/>
              </div>

              <h1 className='text-5xl font-forum-display '>
                We Offer Top Notch
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever.
              </p>
            </div>
<div className=' max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 mt-10 xl:-mt-45 place-items-center [&>*:nth-child(2)]:xl:mt-55'>   
  {services.map((service, index) => (
    <OfferCard key={index} {...service} />
  ))}
</div>
        </div>

          <Image src="/images/shape-1.png" width="246" height="412"  alt="shape" className="move-anim -z-1 absolute bottom-0 left-0"/>
          <Image src="/images/shape-2.png" width="343" height="345" alt="shape" className="move-anim -z-1 absolute top-0 right-0"/>
    </section>
  )
}

export default Offer


function OfferCard({title, image, alt, menuLink}){
  return(
    <div className='flex flex-col items-center gap-5 w-full max-w-xs group'>
      <div className='relative isolate py-8 w-full aspect-[3/4] max-h-[400px] overflow-hidden'>

        <div className='absolute group-hover:rotate-y-180 transition-transform duration-500 top-0 left-1/2 transform -translate-x-1/2 -z-10 w-28 md:w-32 lg:w-36 h-full bg-[url(/images/img-pattern.svg)] bg-repeat-y'></div>
        
        {/* Image container with shine effect */}
        <div className='relative w-full h-full overflow-hidden cursor-pointer rounded-lg'>
          <Image 
            width={285} 
            height={336} 
            src={image} 
            alt={alt} 
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
          />
          
          {/* Natural shine effect overlay */}
          <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-out'>
            <div className='w-50 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 scale-y-150 -translate-y-1/4'></div>
          </div>
        </div>
      </div>
      
      <div className='text-center'>
        <h3 className='text-xl md:text-2xl lg:text-3xl font-forum-display mb-2 transition-colors duration-300 group-hover:text-gold-crayola'>{title}</h3>
        <Link 
          className='text-gold-crayola uppercase text-sm hover:underline transition-all duration-200' 
          href={menuLink}
        >
          view menu
        </Link>
      </div>
    </div>
  )
}


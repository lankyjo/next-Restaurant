import React from 'react'
import Seperator from '../Seperator'
import Image from 'next/image';

const features = [
  {
    image: "/images/features-icon-1.png",
    alt: "Hygienic Food Icon",
    title: "Hygienic Food",
    description: "Lorem Ipsum is simply dummy printing and typesetting."
  },
  {
    image: "/images/features-icon-2.png",
    alt: "Fresh Environment Icon",
    title: "Fresh Environment",
    description: "Lorem Ipsum is simply dummy printing and typesetting."
  },
  {
    image: "/images/features-icon-3.png",
    alt: "Skilled Chefs Icon",
    title: "Skilled Chefs",
    description: "Lorem Ipsum is simply dummy printing and typesetting."
  },
  {
    image: "/images/features-icon-4.png",
    alt: "Event & Party Icon",
    title: "Event & Party",
    description: "Lorem Ipsum is simply dummy printing and typesetting."
  }
];


const Choose = () => {
  return (
    <section className='bg-eerie-black-2 relative pb-15 md:pb-25'>
        <div className=' container mx-auto px-5 2xl:px-0 space-y-8'>
            <div className='text-center space-y-1 flex flex-col justify-center items-center' >
                <h5 className=' text-gold-crayola tracking-widest uppercase'>why choose us</h5>
                <Seperator/>
            </div>

            <h2 className='text-4xl md:text-6xl font-forum-display text-center'>Our Strength</h2>

            <div className='grid grid-cols-1 max-sm:place-items-center md:grid-cols-2 xl:grid-cols-4 gap-5'>
              {features.map((feature, index) => (
                <ChoiceCard key={index} index={index} {...feature} />
              ))}
            </div>
        </div>
    </section>
  )
}

export default Choose


function ChoiceCard({ index, image, title, description }) {
  const bgColor = index % 2 === 0 ? 'bg-eerie-black-3' : 'bg-smoky-black-1';

  return (
<div className={`aspect-square ${bgColor} group flex flex-col justify-center items-center gap-4 text-center p-5`}>
  <Image
    width={100}
    height={80}
    alt="icon"
    src={image}
    className="transition-transform duration-200 group-hover:scale-[-1] group-hover:rotate-180"
  />
  <h4 className="text-3xl font-forum-display">{title}</h4>
  <p className="text-sm text-white/60">{description}</p>
</div>
  );
}
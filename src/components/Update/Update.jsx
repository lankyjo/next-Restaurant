import React from "react";
import Seperator from "../Seperator";
import Image from "next/image";
const events = [
  {
    image: "/images/event-1.jpg",
    date: "15/09/2022",
    subtitle: "Food, Flavour",
    title: "Flavour so good you’ll try to eat with your eyes.",
    alt: "Flavour so good you’ll try to eat with your eyes."
  },
  {
    image: "/images/event-2.jpg",
    date: "08/09/2022",
    subtitle: "Healthy Food",
    title: "Flavour so good you’ll try to eat with your eyes.",
    alt: "Flavour so good you’ll try to eat with your eyes."
  },
  {
    image: "/images/event-3.jpg",
    date: "03/09/2022",
    subtitle: "Recipie",
    title: "Flavour so good you’ll try to eat with your eyes.",
    alt: "Flavour so good you’ll try to eat with your eyes."
  }
];

const Update = () => {
  return (
    <section className="bg-eerie-black-2 relative pb-10 md:pb-20">
      <div className=" container mx-auto px-5 2xl:px-0 space-y-8">
        <div className="text-center space-y-1 flex flex-col justify-center items-center">
          <h5 className=" text-gold-crayola tracking-widest uppercase">
            Recent Updates
          </h5>
          <Seperator />
        </div>

        <h2 className="text-4xl md:text-6xl font-forum-display text-center">
         Upcoming Event
        </h2>

        <div className=" grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 gap-10">
            {events.map(event => (
              <UpdateCard key={event.date} event={event} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Update;

function UpdateCard({ event }){
return(
    <div className=" mx-auto aspect-[3/4] p-4 flex justify-between isolate  flex-col group overflow-hidden relative">
                  <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-out'>
            <div className='w-50 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 scale-y-150 -translate-y-1/4'></div>
          </div>
        <Image width={350} height={450} alt={event.alt} src={event.image} className="-z-1 object-cover object-center absolute w-full h-full inset-0 transition-transform duration-500 group-hover:scale-105" />
        <span className="bg-smoky-black-1 w-fit px-3 py-1 text-gold-crayola text-xs tracking-widest">
            {event.date}
        </span>
        <div className="text-center space-y-5">
            <p className="text-gold-crayola tracking-widest font-semibold">{event.subtitle}</p>
            <p className="text-3xl font-forum-display">{event.title}</p>
        </div>
    </div>
)
}

import React from "react";
import Seperator from "../Seperator";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    name: "Greek Salad",
    image: "/images/menu-1.png",
    price: "$25.50",
    badge: "Seasonal",
    description: "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
  },
  {
    name: "Lasagne",
    image: "/images/menu-2.png",
    price: "$40.00",
    badge: null,
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
  },
  {
    name: "Butternut Pumpkin",
    image: "/images/menu-3.png",
    price: "$10.00",
    badge: null,
    description: "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
  },
  {
    name: "Tokusen Wagyu",
    image: "/images/menu-4.png",
    price: "$39.00",
    badge: "New",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
  },
  {
    name: "Olivas Rellenas",
    image: "/images/menu-5.png",
    price: "$25.00",
    badge: null,
    description: "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
  },
  {
    name: "Opu Fish",
    image: "/images/menu-6.png",
    price: "$49.00",
    badge: null,
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
  },
];


const Selection = () => {
  return (
    <section className="bg-smoky-black-1 py-10 md:py-20 relative isolate overflow-hidden">
      <div className="container mx-auto px-5 2xl:px-0 space-y-10">
        <div className="flex items-center justify-center flex-col gap-[2px] text-gold-crayola">
          Special Selection
          <Seperator />
        </div>
        <h3 className="text-4xl md:text-6xl font-forum-display text-center">
          Delicious Menu
        </h3>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:divide-x divide-gold-crayola/10">
            {/* LEFT */}
            <div className="xl:pr-15 space-y-5">
                {menuItems.slice(0, 3).map((menuItem, index) => (
                    <MenuCard key={index} {...menuItem} />
                ))}
            </div>
            {/* LEFT */}
            <div className="xl:pl-15 space-y-5">
                {menuItems.slice(3).map((menuItem, index) => (
                    <MenuCard key={index} {...menuItem} />
                ))}
            </div>
        </div>
        {/* <div className="text-center space-y-4">
                    <p>During winter daily from 7:00 pm to 9:00 pm</p>
                  <Link
            href={'#'}
            className="group border border-gold-crayola relative inline-block text-[14px] font-medium uppercase py-5 px-10 bg-transparent overflow-hidden"
          >
            <p className="relative z-10 transition-colors text-gold-crayola duration-300 group-hover:text-black">
              View all Menu
            </p>
            <span className="absolute left-0 top-0 w-full h-0 bg-gold-crayola transition-all duration-500 ease-in-out group-hover:h-full z-0" />
          </Link>
        </div> */}
      </div>
      
                {/* <Image src="/images/shape-5.png" width={921} height={1036} alt="shape"
            className=" move-anim left-0 top-0 absolute -z-1"/>
          <Image src="/images/shape-6.png" width={343} height={345} alt="shape"
            className="absolute right-0 bottom-0 move-anim -z-1"/> */}

    </section>
  );
};

export default Selection;

const MenuCard = ({ name, image, price, badge, description }) => {
  return (
    <div className="flex md:items-center gap-5">
      <div className=" group">
        <Image
          width={100}
          height={100}
          src={image}
          alt={name}
          className="group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="flex-1">
        <div className="flex md:items-center justify-between gap-2 font-forum-display max-sm:flex-col">
          {/* title */}
          <Link href={"#"} className="whitespace-nowrap text-xl flex gap-2 max-sm:flex-col hover:text-gold-crayola duration-200">
            {name}

            {badge && (
              <span className="bg-gold-crayola px-2 w-fit text-black">{badge}</span>
            )}
          </Link>

          {/* horizontal line separator */}
          <div className="flex-1 border-b border-t hidden md:block py-[2px] border-gold-crayola/10 mx-2"></div>

          {/* price */}
          <span className="whitespace-nowrap text-gold-crayola text-3xl">{price}</span>
        </div>
        <div className="mt-2 text-white/70 text-xs md:text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};


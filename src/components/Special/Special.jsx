import Image from "next/image";
import React from "react";
import Seperator from "../Seperator";
import Link from "next/link";

const Special = () => {
  return (
    <section className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-2 py-10 md:py-0 min-h-screen items-center">
        {/* BANNER IMAGE */}
      <div className="flex-1 h-[80vh] md:h-full relative">
        <Image
          fill
          src={"/images/special-dish-banner.jpg"}
          alt="special"
          className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
      {/* BANER TEXTS */}
      <div className="flex-1 flex-col items-center md:items-start md:flex-row  text-center md:text-left flex gap-5 px-5 md:px-20">
        <Image
          width={28}
          height={41}
          alt="banner"
          className="h-fit move-anim"
          src={"/images/badge-1.png"}
        />
        <div className="space-y-8">
          <span className="flex justify-center items-center md:items-start flex-col gap-[2px]">
            <h5 className=" text-gold-crayola uppercase">Special Dish</h5>
            <span className="w-25"><Seperator /></span>
          </span>

          <h2 className="text-6xl font-forum-display">Lobster Tortellini</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printingand typesetting
            industry lorem Ipsum has been the industrys standard dummy text ever
            since the when an unknown printer took a galley of type.
          </p>

          <div className="flex gap-5 justify-center md:justify-start text-2xl">
            <span className="text-eerie-black-4">$40.00</span>
            <span>$20.00</span>
          </div>

          <Link
            href={"#"}
            className="group border border-gold-crayola relative inline-block text-[14px] font-medium uppercase py-5 px-10 bg-transparent overflow-hidden"
          >
            <p className="relative z-10 transition-colors text-gold-crayola duration-300 group-hover:text-black">
              view all menu
            </p>
            <span className="absolute left-0 top-0 w-full h-0 bg-gold-crayola transition-all duration-500 ease-in-out group-hover:h-full z-0" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Special;

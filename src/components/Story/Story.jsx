import React from "react";
import Seperator from "../Seperator";
import Link from "next/link";
import Image from "next/image";

const Story = () => {
  return (
    <section className=" py-20 bg-eerie-black-2 overflow-x-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-4 gap-10">
        {/* TEXT */}
        <div className="text-center space-y-5">
          <div className="flex items-center justify-center flex-col gap-[2px]">
            <h5 className="text-gold-crayola tracking-wider uppercase">
              our story
            </h5>
            <Seperator />
          </div>
          <h3 className="font-forum-display text-5xl">
            Every Flavor Tells a Story
          </h3>
          <p className="text-sm xl:text-base">
            Lorem Ipsum is simply dummy text of the printingand typesetting
            industry lorem Ipsum has been the industrys standard dummy text ever
            since the when an unknown printer took a galley of type and
            scrambled it to make a type specimen book It has survived not only
            five centuries, but also the leap into.
          </p>
          <div>
            <p>Book Through Call</p>
            <p className="text-gold-crayola text-2xl">+80 (400) 123 4567</p>
          </div>
          <button>
            <Link
              href={"#"}
              className="group border border-gold-crayola relative inline-block text-[14px] font-medium uppercase py-5 px-10 bg-transparent overflow-hidden"
            >
              <p className="relative z-10 transition-colors text-gold-crayola duration-300 group-hover:text-black">
                read more
              </p>
              <span className="absolute left-0 top-0 w-full h-0 bg-gold-crayola transition-all duration-500 ease-in-out group-hover:h-full z-0" />
            </Link>
          </button>
        </div>
        {/* IMAGE */}
        <div className="relative aspect-square w-full md:max-w-[500px] xl:max-w-full mx-auto">
          <Image
            src={"/images/about-banner.jpg"}
            fill
            alt="about-banner"
            className="object-center object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"

          />
          <div className="absolute w-20 md:w-40 aspect-square isolate right-0 -top-10 md:-top-18">
            <Image src={'/images/badge-2.png'} alt="spinners" width={133} height={134} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
            <Image src={'/images/badge-2-bg.png'} alt="spinners" width={133} height={134} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite]" />
          </div>
          <div className="absolute w-30 sm:w-50 xl:w-70 aspect-[3/4] isolate py-4 xl:py-8 -bottom-10 -left-5 xl:-left-25">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 w-20 xl:w-30 h-full bg-[url(/images/img-pattern.svg)]"></div>
            <Image src={'/images/about-abs-image.jpg'} width={285} height={285} alt="image" className="h-full object-cover object-center"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;

import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <section className="pt-10 md:pt-20 pb-60 min-h-dvh bg-[url(/images/testimonial-bg.jpg)]">
      <div className="max-w-[950px] mx-auto px-5 xl:px-0 space-y-25">
        <div className="text-center text-3xl  md:text-5xl font-forum-display flex flex-col">
            <span className="text-6xl leading-[0.8em]">”</span>
            <h3 className="md:leading-16">
           I wanted to thank you for inviting me down for that amazing dinner
          the other night. The food was extraordinary.
            </h3>
        </div>

        <div>
                    <Image width={100} height={100} src="/images/testi-avatar.jpg" className="mx-auto rounded-full" alt=""/>
        <p className="text-center text-gold-crayola mt-2 ">Sam Jhonson</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

import Image from "next/image";
import Link from "next/link";
import React from "react";
const navLinks = [
  { name: "Home", link: "/" },
  { name: "Menus", link: "#menus" },
  { name: "About Us", link: "#" },
  { name: "Our Chefs", link: "#our-chefs" },
  { name: "Contact", link: "#contact" },
];
const socialLinks = [
  { name: "facebook", link: "#" },
  { name: "twitter", link: "#" },
  { name: "instagram", link: "#" },
  { name: "linkedin", link: "#" },
  { name: "youtube", link: "#" },
];
const Footer = () => {
  return (
    <footer className="min-h-dvh flex flex-col bg-[url(/images/footer-bg.jpg)] py-20 bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-5 xl:px-0 flex-1 flex flex-col gap-10">
        <div className="flex-1 grid max-xl:gap-10 max-sm:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-[2fr_3fr_2fr] justify-center items-center">
          {/* LEFT */}
          <ul className="text-center text-white/50 flex-2/5 space-y-5">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
          {/* CENTER */}
          <div className="relative  px-5 md:px-8 isolate max-sm:col-span-1 max-xl:col-span-2 max-xl:row-start-1 bg-smoky-black-1 bg-[url(/images/footer-form-bg.png)]  h-[600px] w-full grid items-center bg-cover bg-center">
            <div className="absolute -z-1 top-0 left-0 h-full w-3.5 bg-[url(/images/footer-form-pattern.svg)] bg-repeat bg-cover"></div>
            <div className="absolute -z-1 top-0 right-0 h-full w-3.5 bg-[url(/images/footer-form-pattern.svg)] bg-repeat bg-cover"></div>
            <div className="flex flex-col w-full gap-10">
              <span>
                <Image
                  src={"/images/logo.svg"}
                  alt="logo"
                  width={160}
                  height={50}
                  className={"mx-auto"}
                />
              </span>

              <span className="text-center text-white/50 text-sm space-y-3">
                <p>Restaurant St, Delicious City, London 9578, UK</p>
                <Link href={"mailto:booking@grilli.com"}>
                  booking@grilli.com
                </Link>
                <div>
                  <Link href={"tel:1234567890"}>+1 123 456 7890</Link>
                </div>
                <p>Open : 09:00 am - 01:00 pm</p>
              </span>

              <span className="text-center">
                <p className="text-3xl md:text-5xl font-forum-display">Get News & Offers</p>
                <p>Subscribe us & Get 25% Off.</p>
              </span>

              <span className="w-full">
                <div className="flex max-md:gap-2 max-md:flex-col">
                  <input
                    className="bg-eerie-black-2 px-5  py-4 md:flex-2"
                    type="email"
                    placeholder="Your Email"
                  />

                  <button className="md:flex-1 w-full cursor-pointer group border border-transparent hover:border-gold-crayola relative md:inline-block text-[14px] font-medium uppercase py-4 px-10 bg-gold-crayola text-black overflow-hidden">
                    <p className="relative text-sm tracking-widest z-10 transition-colors duration-300 group-hover:text-gold-crayola">
                      subscribe
                    </p>
                    <span className="absolute left-0 top-0 w-full h-0 bg-black transition-all duration-500 ease-in-out group-hover:h-full z-0" />
                  </button>
                </div>
              </span>
            </div>
          </div>
          {/* RIGHT */}
          <ul className="text-center text-white/50 flex-2/5 space-y-5">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <small> 
            © 2022 Grilli. All Rights Reserved | Crafted by codewithsadee
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';
import { IoIosCloseCircleOutline } from "react-icons/io";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "./TopBar";
import useLandingPageStore from "../../../libs/useLandingPageStore";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Log-in", link: "#" },
  { name: "Discover", link: "#discover" },
  { name: "Contact", link: "#contact" },
];



const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false); // controls slide
  const [isOverlayVisible, setOverlayVisible] = useState(false); // controls opacity
  const [shouldShowMenu, setShouldShowMenu] = useState(false); // entry sync
  
  // Scroll states
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add background when scrolled past 80px
      setHasScrolled(currentScrollY > 80);
      
      // If we're at the very top (within 100px), always show header
      if (currentScrollY <= 100) {
        setIsVisible(true);
      } else {
        // Show header when scrolling up, hide when scrolling down
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const openMenu = (e) => {
    e.preventDefault();
    setOverlayVisible(true); // fade in overlay
    setShouldShowMenu(true); // render the mobile nav
    setTimeout(() => {
      setIsOpen(true); // slide in menu after overlay fade starts
      document.body.style.overflow = "hidden";
    }, 100); // match overlay fade duration
  };

  const closeMenu = (e) => {
    e.preventDefault();
    setIsOpen(false); // slide out menu
    setOverlayVisible(false); // fade out overlay
    setTimeout(() => {
      setShouldShowMenu(false); // unmount menu completely
      document.body.style.overflow = "auto";
    }, 200); // match overlay fade duration
  };
const details = useLandingPageStore((state) => state.details);

  return (
    <header className={`fixed top-0 left-0 w-full z-51 transition-all duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      hasScrolled ? 'bg-eerie-black-4/70 backdrop-blur-md shadow-lg pb-6' : 'bg-transparent'
    }`}>
      <TopBar />
      <div className="container mx-auto px-4 2xl:px-0 flex justify-between pt-7 items-center">
        <Link scroll={false} href="/">
          {/* <Image width={160} height={50} src="/images/logo.svg" alt="logo" /> */}
          {/* <h1 className="text-5xl font-forum-display first-letter:text-gold-crayola">Logo</h1> */}
          {
            details?.logo.image ? 
            <Image width={160} height={50} src={details?.logo.image.url} alt="logo" />
            :
            <h1 className="text-4xl md:text-5xl font-forum-display first-letter:text-gold-crayola">{details.logo.text}</h1>
          }
        </Link>






        {/* MENU */}

          <ul className="xl:flex hidden items-center gap-5 uppercase font-semibold text-[14px]">
            {navLinks.map((link, index) => (
              <li key={index} className="relative tracking-widest text-[12px] hover:text-gold-crayola  group py-3">
                <Link href={link.link} className="relative inline-block w-full z-10">
                  {link.name}
                </Link>
                <span className="absolute bottom-1.5 left-1/2 w-0 h-[1px] bg-gold-crayola/90 transition-all duration-500 group-hover:left-0 group-hover:w-full" />
                <span className="absolute bottom-0 right-1/2 w-0 h-[1px] bg-gold-crayola/90 transition-all duration-500 group-hover:right-0 group-hover:w-full" />
              </li>
            ))}
          </ul>

        <div className="flex items-center gap-5">
          <Link
            href="#"
            className="group hidden border border-transparent hover:border-gold-crayola relative md:inline-block text-[14px] font-medium uppercase py-5 px-10 bg-gold-crayola text-black overflow-hidden"
          >
            <p className="relative z-10 transition-colors duration-300 group-hover:text-gold-crayola">
              Get Tickets
            </p>
            <span className="absolute left-0 top-0 w-full h-0 bg-black transition-all duration-500 ease-in-out group-hover:h-full z-0" />
          </Link>

          {/* Hamburger */}
          <button
            className="nav-open-btn flex flex-col cursor-pointer xl:hidden gap-y-0.5"
            aria-label="open menu"
            onClick={openMenu}
          >
            <span className="line line-1 w-12 bg-white h-0.5"></span>
            <span className="line line-2 w-12 bg-white h-0.5"></span>
            <span className="line line-3 w-12 bg-white h-0.5"></span>
          </button>

        </div>
      </div>

      {shouldShowMenu && (
        <MobileNav
          isOpen={isOpen}
          isOverlayVisible={isOverlayVisible}
          onClose={closeMenu}
        />
      )}
    </header>
  );
};

export default MainHeader;

const MobileNav = ({ isOpen, isOverlayVisible, onClose }) => {
  const details = useLandingPageStore((state) => state.details);

  return (
    <div
      id="mobile-menu"
      className="fixed z-50 inset-0 w-full h-dvh xl:hidden"
    >
      <nav
        className={`relative z-10 max-w-[300px] md:max-w-[350px] px-6 md:px-12 pt-20 h-full bg-eerie-black-4 overflow-y-auto transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={onClose} className=" text-2xl cursor-pointer absolute top-4 right-4">
        <IoIosCloseCircleOutline/>
        </button>

        {/* <Image width={160} height={50} src="/images/logo.svg" className="mx-auto" alt="logo" /> */}
        <div>
          {
                        details?.logo.image ? 
            <Image width={160} height={50} src={details?.logo.image.url} alt="logo" className="mx-auto" />
            :
            <h1 className="text-4xl md:text-5xl text-center font-forum-display first-letter:text-gold-crayola">{details.logo.text}</h1>
          }
        </div>

        <ul className="my-15">
          {navLinks.map((link, index) => (
            <li key={index} onClick={onClose} className="relative group border-t py-4 text-sm last:border-b border-white-alpha-20/60 uppercase">
              <Link href={link.link}  className="relative inline-block w-full z-10">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className=" text-center mt-8">
            <h2 className="text-5xl mb-5">VISIT US</h2>
            <address className=" mb-4" >
            Restaurant St, Delicious City, <br/>
            London 9578, UK
          </address>
          <p className="mb-4">Open: 9.30 am - 2.30pm</p>
          <Link href="mailto:booking@grilli.com" className="mb-4">booking@grilli.com</Link>

          <p className="text-lg uppercase mt-5">Booking Request</p>
          <p className="text-3xl">+88-123-123456</p>
        </div>

      </nav>

      <div
        id="nav-overlay"
        onClick={onClose}
        className={`absolute inset-0 bg-black/80 transition-opacity duration-500 ${
          isOverlayVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </div>
  );
};
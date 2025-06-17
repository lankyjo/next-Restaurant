import Story from "@/components/Story/Story";
import MainHeader from "../components/Header/MainHeader";
import Hero from "../components/Hero/Hero";
import Offer from "../components/Offer/Offer";
import Special from "@/components/Special/Special";
import Footer from "@/components/Footer/Footer";
import Selection from "@/components/Selection/Selection";
import Testimonial from "@/components/Testimonal/Testimonial";
import Reservation from "@/components/Reservation/Reservation";
import Choose from "@/components/Choose/Choose";
import Update from "@/components/Update/Update";

export default function Home() {
  return (
    <main className="">
      <MainHeader/>
      <Hero/>
      <Offer/>
      <Story/>
      <Special/>
      <Selection/>
      <Testimonial/>
      <Reservation/>
      <Choose/>
      <Update/>
      <Footer/>
    </main>
  );
} 
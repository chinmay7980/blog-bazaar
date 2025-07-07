


import HeroBanner from "./herobanner/page";
import Navbar from "./navbar/page";
import Posts from "./posts_grid/page";
import Footer from "./footer/page";
import HeroSection from "./hero-section/page";



export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HeroBanner />
      <Posts />
      <Footer />
    </div>
  );
}

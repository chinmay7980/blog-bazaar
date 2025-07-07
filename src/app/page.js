


import HeroBanner from "./herobanner/page";
import Navbar from "./navbar/page";
import Posts from "./posts_grid/page";
import Footer from "./footer/page";



export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Posts />
      


      <Footer />
    </div>
  );
}

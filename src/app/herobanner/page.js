
import Image from 'next/image';
import './page.css';

export default function HeroBanner() {
  return (
    <section className="hero-box">
      <div className="hero-banner">
        <Image
          src="https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg" 
          alt="image"
          fill
        />
        <div className="hero-content">
          <span className="hero-tag">Technology</span>
          <h2 className="hero-title">
            The Impact of Technology on the Workplace: How Technology is Changing
          </h2>
          <div className="hero-author">
            <span>👤 Chinmay Soni</span>
            <span>• May 3, 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User } from "lucide-react";
import './page.css';

const post = {
  id: 1,
  title: "The Impact of Technology on the Workplace: How Technology is Changing",
  subtitle:"Discover how electric cars are shaping the future of transportation, sustainability, and innovation.",
  author: "Chinmay Soni",
  date: "July 9, 2025",
  category: "Technology",
  readTime: "5 min read",
}

export default function HeroBanner() {
  return (
    <div className='herobanner-container'>
      <Image src="https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg" alt='image' fill  className='hero-image'/>
      <div className="herobanner-overlay" />
      <div className='herobanner-content'>
        <div className='hero-inner'>
          <span className="hero-tag">{post.category}</span>

          <h1 className="herobanner-title">{post.title}</h1>

          <p className="herobanner-subtitle">{post.subtitle}</p>
          
          <div className='hero-meta'>
            <div className="hero-meta-item">
              <User className="icon" />
              <span>{post.author}</span>
            </div>

            <div className="hero-meta-item">
              <Calendar className="icon" />
              <span>{post.date}</span>
            </div>
            <span>{post.readTime}</span>

            <Link href="/blogpost/1">
              <button className="hero-button">Read Full Story</button>
            </Link>

          </div>
        </div>
      </div>
    </div>

  );
}

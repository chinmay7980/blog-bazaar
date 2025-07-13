import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, Bookmark } from 'lucide-react';
import Navbar from '../../navbar/page';
import Footer from '../../footer/page';
import './page.css';

const blogPosts = [
  {
    id: 1,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    para: "Explore how modern technology is revolutionizing the way we work, from remote collaboration tools to AI-powered productivity solutions.",
    content: `
      <p>Technology has fundamentally transformed the modern workplace, creating new opportunities and challenges for businesses and employees alike. From the rise of remote work to the integration of artificial intelligence, the way we approach our daily tasks has evolved dramatically over the past decade.</p>
      
      <h2>The Rise of Remote Work</h2>
      <p>The COVID-19 pandemic accelerated the adoption of remote work technologies, but the trend was already gaining momentum. Tools like Zoom, Slack, and Microsoft Teams have become essential for maintaining productivity and collaboration across distributed teams.</p>
      
      <h2>Artificial Intelligence in the Workplace</h2>
      <p>AI is no longer a futuristic concept—it's actively reshaping how we work today. From automated customer service chatbots to predictive analytics that help businesses make better decisions, AI is becoming an integral part of the modern workplace.</p>
      
      <h2>The Future of Work</h2>
      <p>As we look ahead, several trends are emerging that will continue to shape the workplace of tomorrow:</p>
      <ul>
        <li>Increased automation of routine tasks</li>
        <li>Greater emphasis on digital skills and continuous learning</li>
        <li>Hybrid work models becoming the norm</li>
        <li>Enhanced focus on employee well-being and work-life balance</li>
      </ul>
      
      <p>The key to thriving in this evolving landscape is adaptability. Organizations and individuals who embrace change and invest in new technologies will be best positioned for success in the digital age.</p>
    `,
    author: "Chinmay Soni",
    date: "May 3, 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    readTime: "8 min read",
    tags: ["Workplace", "Digital Transformation", "Future of Work", "AI"]
  },
  
  {
    id: 2,
    title: "Sustainable Living: Small Changes That Make a Big Impact",
    para: "Discover practical ways to reduce your environmental footprint through simple lifestyle changes that anyone can implement.",
    content: `
      <p>Living sustainably doesn't require dramatic lifestyle overhauls. Small, consistent changes in our daily habits can collectively make a significant impact on the environment. Here's how you can start your journey toward more sustainable living today.</p>
      
      <h2>Energy Conservation at Home</h2>
      <p>Simple changes like switching to LED bulbs, unplugging electronics when not in use, and adjusting your thermostat by just a few degrees can significantly reduce your energy consumption and utility bills.</p>
      
      <h2>Sustainable Transportation</h2>
      <p>Consider walking, cycling, or using public transportation for short trips. If you need a car, carpooling or choosing electric vehicles can dramatically reduce your carbon footprint.</p>
      
      <h2>Mindful Consumption</h2>
      <p>Before making purchases, ask yourself: "Do I really need this?" Choosing quality over quantity, buying second-hand when possible, and supporting sustainable brands are all ways to consume more mindfully.</p>
    `,
    author: "Tracey Wilson",
    date: "August 20, 2025",
    category: "Lifestyle",
    image: "/images/image2.jpg",
    readTime: "6 min read",
    tags: ["Sustainability", "Environment", "Green Living"]
  },
  {
    id: 3,
    title: "The Art of Minimalist Photography",
    para: "Learn how to create stunning photographs using minimalist principles and composition techniques.",
    content: `
      <p>Minimalist photography is about finding beauty in simplicity. By stripping away unnecessary elements and focusing on the essential, you can create powerful, impactful images that speak volumes with very little.</p>
      
      <h2>Understanding Minimalism</h2>
      <p>At its core, minimalist photography embraces the "less is more" philosophy. It's about using negative space, simple compositions, and clean lines to create images that are both aesthetically pleasing and emotionally resonant.</p>
      
      <h2>Key Techniques</h2>
      <p>Master these fundamental techniques to improve your minimalist photography:</p>
      <ul>
        <li>Use negative space effectively</li>
        <li>Focus on geometric shapes and patterns</li>
        <li>Limit your color palette</li>
        <li>Pay attention to lighting and shadows</li>
        <li>Eliminate distracting elements</li>
      </ul>
    `,
    author: "Tracey Wilson",
    date: "August 20, 2025",
    category: "Photography",
    image: "/images/image3.jpg",
    readTime: "5 min read",
    tags: ["Photography", "Art", "Minimalism"]
  }, 
  {
    id: 4,
    title: "Building Better Habits: A Scientific Approach",
    para: "Understand the psychology behind habit formation and learn proven strategies to build lasting positive habits.",
    content: `
      <p>Habits shape our daily lives more than we realize. Understanding the science behind habit formation can help us build better routines and break negative patterns.</p>
      
      <h2>The Habit Loop</h2>
      <p>Every habit consists of three components: cue, routine, and reward. By identifying and modifying these elements, we can reshape our behaviors.</p>
    `,
    author: "Tracey Wilson",
    date: "August 30, 2025",
    category: "Self-Improvement",
    image: "/images/image4.jpg",
    readTime: "7 min read",
    tags: ["Habits", "Psychology", "Personal Development"]
  },
  {
    id: 5,
    title: "The Future of Renewable Energy",
    para: "Explore the latest developments in renewable energy technology and their potential impact on our planet's future.",
    content: `
      <p>Renewable energy technologies are advancing rapidly, offering hope for a sustainable energy future. From solar and wind to emerging technologies like tidal and geothermal power.</p>
      
      <h2>Solar Power Revolution</h2>
      <p>Solar technology has become increasingly efficient and affordable, making it accessible to homeowners and businesses worldwide.</p>
    `,
    author: "Tracey Wilson",
    date: "August 20, 2025",
    category: "Technology",
    image: "/images/image5.jpg",
    readTime: "9 min read",
    tags: ["Renewable Energy", "Solar Power", "Environment"]
  },
  {
    id: 6,
    title: "Mastering the Art of Coffee Brewing",
    para: "From bean selection to brewing techniques, discover how to make the perfect cup of coffee at home.",
    content: `
      <p>Great coffee starts with understanding the fundamentals: quality beans, proper grinding, water temperature, and brewing time.</p>
      
      <h2>Bean Selection</h2>
      <p>Choose freshly roasted beans and understand the difference between various origins and roast levels.</p>
    `,
    author: "Tracey Wilson",
    date: "August 20, 2025",
    category: "Lifestyle",
    image: "/images/image6.jpg",
    readTime: "4 min read",
    tags: ["Coffee", "Brewing", "Lifestyle"]
  },
  {
    id: 7,
    title: "Machine Learning Fundamentals for Beginners",
    para: "A comprehensive introduction to machine learning concepts, algorithms, and practical applications in today's world.",
    content: `
      <p>Machine learning is transforming industries and creating new possibilities for problem-solving. This guide introduces fundamental concepts for those starting their ML journey.</p>
      
      <h2>What is Machine Learning?</h2>
      <p>Machine learning is a subset of artificial intelligence that enables computers to learn and improve from experience without being explicitly programmed.</p>
      
      <h2>Types of Machine Learning</h2>
      <p>There are three main types: supervised learning, unsupervised learning, and reinforcement learning, each suited for different types of problems.</p>
    `,
    author: "Alex Chen",
    date: "June 15, 2025",
    category: "Technology",
    image: "/images/image7.jpg",
    readTime: "10 min read",
    tags: ["Machine Learning", "AI", "Data Science", "Programming"]
  },
  {
    id: 8,
    title: "Digital Detox: Finding Balance in a Connected World",
    para: "Learn how to create healthy boundaries with technology and reclaim your mental well-being in the digital age.",
    content: `
      <p>In our hyperconnected world, taking breaks from digital devices has become essential for mental health and productivity.</p>
      
      <h2>Signs You Need a Digital Detox</h2>
      <p>Constant notifications, phantom vibrations, and difficulty focusing are indicators that it's time to step back from screens.</p>
      
      <h2>Practical Detox Strategies</h2>
      <p>Start with small changes like phone-free meals, designated tech-free hours, and creating physical boundaries between work and personal devices.</p>
    `,
    author: "Sarah Martinez",
    date: "June 10, 2025",
    category: "Lifestyle",
    image: "/images/image8.jpg",
    readTime: "6 min read",
    tags: ["Digital Wellness", "Mental Health", "Productivity", "Balance"]
  },
  {
    id: 9,
    title: "Street Photography: Capturing Life in Motion",
    para: "Master the art of street photography with techniques for capturing authentic moments and telling compelling stories.",
    content: `
      <p>Street photography is about documenting life as it happens, capturing the raw emotions and stories of everyday people in urban environments.</p>
      
      <h2>Equipment and Settings</h2>
      <p>Use a lightweight camera with fast autofocus. Master your camera settings to react quickly to fleeting moments.</p>
      
      <h2>Ethics and Approach</h2>
      <p>Respect your subjects and understand the legal and ethical considerations of photographing people in public spaces.</p>
    `,
    author: "Marcus Johnson",
    date: "June 5, 2025",
    category: "Photography",
    image: "/images/image9.jpg",
    readTime: "8 min read",
    tags: ["Street Photography", "Urban", "Documentary", "Visual Storytelling"]
  },
];

export default function BlogPost({ params }) {
  const {id} = params;
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    notFound();
  }

  return (
    <div className="blog-post-container">
      <Navbar />
      
      <main className="blog-post-main">
      
        <div className="back-nav">

          <Link href="/" className="back-link">
            <ArrowLeft className="back-icon" />
            Back to Home
          </Link>

        </div>

   
        <header className="article-header">

          <div className="category-badge">

            <span className={`category category-${post.category.toLowerCase()}`}>
              {post.category}
            </span>

          </div>
          
          <h1 className="article-title">{post.title}</h1>
          
          <div className="article-meta">
            <div className="meta-item">
              <User className="meta-icon" />
              <span>{post.author}</span>
            </div>
            <div className="meta-item">
              <Calendar className="meta-icon" />
              <span>{post.date}</span>
            </div>
            <div className="meta-item">
              <Clock className="meta-icon" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="article-actions">
            <button className="action-btn">
              <Heart className="action-icon" />
              Like
            </button>
            <button className="action-btn">
              <Bookmark className="action-icon" />
              Save
            </button>
            <button className="action-btn">
              <Share2 className="action-icon" />
              Share
            </button>
          </div>
        </header>

       
        <div className="image">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="article-image"
            priority
          />
        </div>

      
        <article className="article-content">

          <div 
            className="content-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
        </article>

    
        <div className="article-tags">

          <h3>Tags:</h3>

          <div className="tags-list">
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

        </div>

        <section className="related-posts">

          <h2>Related Articles</h2>

          <div className="related-grid">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              // Sirf top 2 results leta hai

              .map(relatedPost => (
                <Link key={relatedPost.id} href={`/blogpost/${relatedPost.id}`} className="related-card">
                  
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    width={300}
                    height={200}
                    className="related-image"
                  />

                  <div className="related-content">

                    <span className={`category category-${relatedPost.category.toLowerCase()}`}>
                      {relatedPost.category}
                    </span>

                    <h3>{relatedPost.title}</h3>

                    <p>{relatedPost.para}</p>
                  </div>

                </Link>
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


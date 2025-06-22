import Link from 'next/link';
import Image from 'next/image';
import './page.css';
import { Section } from 'lucide-react';

const posts = [
  {
    id: 1,
    image: '/images/image1.jpg',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    category: 'Technology',
    author: 'Tracey Wilson',
    date: 'August 20, 2022',
  },
  {
    id: 2,
    image: '/images/image2.jpg',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    category: 'Technology',
    author: 'Tracey Wilson',
    date: 'August 20, 2022',
  },
  {
    id: 3,
    image: '/images/image3.jpg',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    category: 'Technology',
    author: 'Tracey Wilson',
    date: 'August 20, 2022',
  },
  {
    id: 4,
    image: '/images/image4.jpg',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    category: 'Technology',
    author: 'Tracey Wilson',
    date: 'August 20, 2022',
  },
  {
    id: 5,
    image: '/images/image5.jpg',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    category: 'Technology',
    author: 'Tracey Wilson',
    date: 'August 20, 2022',
  },
  {
    id: 6,
    image: '/images/image6.jpg',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    category: 'Technology',
    author: 'Tracey Wilson',
    date: 'August 20, 2022',
  },
  {
    id: 7,
    image: '/images/image7.jpg',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    category: 'Technology',
    author: 'Tracey Wilson',
    date: 'August 20, 2022',
  },
  {
    id: 8,
    image: '/images/image8.jpg',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    category: 'Technology',
    author: 'Tracey Wilson',
    date: 'August 20, 2022',
  },
  {
    id: 9,
    image: '/images/image9.jpg',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    category: 'Technology',
    author: 'Tracey Wilson',
    date: 'August 20, 2022',
  },
];

export default function Posts(){
    return (
        <div>
            <section className='posts'>
                {posts.map((post)=>{
                return (
                    <div key={post.id} className="card">
                        <div className='image'>
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={100}
                                height={100}
                                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                            />
                        </div>
                        <div className="content">
                            <span className="category">{post.category}</span>

                            <h3 className="title">{post.title}</h3>

                            <div className="author-date">
                                {post.author && <span className="author">{post.author}</span>}
                                {post.date && <span className="date">{post.date}</span>}
                            </div>
                        </div>
                    
                    </div>

                    
            )
            })}
            
            </section>
        </div>
    )
}
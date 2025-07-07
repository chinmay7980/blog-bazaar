import "./page.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import { Users, Target, Heart, Award } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To democratize knowledge and make quality content accessible to everyone, everywhere.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building a vibrant community of writers, readers, and thought leaders from around the world.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Driven by our love for storytelling and the power of shared knowledge and experiences.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Committed to maintaining the highest standards of content quality and user experience.",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & Editor-in-Chief",
    image:
      "https://images.unsplash.com/photo-1661292932068-8161765c3940?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhcmElMjBqaG9uc29ufGVufDB8fDB8fHww",
    bio: "With 10+ years in digital publishing, Sarah leads our editorial vision.",
  },
  {
    name: "Michael Chen",
    role: "Tech Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1689531953275-a5cfcc458931?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWljaGFlbCUyMENoZW58ZW58MHx8MHx8fDA%3D",
    bio: "Michael ensures our platform stays cutting-edge and user-friendly.",
  },
  {
    name: "Emily Rodriguez",
    role: "Content Strategy",
    image:
      "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Emily curates content that resonates with our diverse global audience.",
  },
];

export default function AboutPage() {
  return (
    <div className="about">
      <Navbar />
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 hero-tag">
        <div className="hero-tag-ka-content">
          <h1>About Blog-Bazaar</h1>
          <p>
            We re passionate about creating a space where knowledge thrives,
            <br />
            stories inspire, and communities connect through the power of
            <br />
            words.
          </p>
        </div>
      </section>

      <section className="story-of-blog-bazaar">
        <div className="story-container">
          <div className="story-grid">
            <div className="story-of-text">
              <h2>Our Story</h2>
              <p>
                Blog-Bazaar was born from a simple belief: everyone has a story
                worth telling, and everyone deserves access to quality content
                that informs, inspires, and empowers.
              </p>
              <p>
                Founded in 2020, we ve grown from a small team of passionate
                writers to a thriving platform that hosts thousands of articles
                across technology, lifestyle, business, and innovation.
              </p>
              <p>
                Today, we re proud to serve over 50,000 readers monthly,
                connecting minds and fostering meaningful conversations that
                drive positive change in our world.
              </p>
            </div>

            <div className="story-image">
              
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Team collaboration"
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="value-section">
        <div className="value-container">
          <div className="value-header">
            <h2>Our Values</h2>
            <p>
              The principles that guide everything we do and shape our
              community.
            </p>
          </div>

          <div className="value-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <value.icon className="icon" />
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="team-container">
          <div className="team-header">
            <h2>Meet Our Team</h2>
            <p>The passionate individuals behind Blog-Bazaar success.</p>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                

                <Image 
                  src={member.image}
                  alt={member.name}
                  className="team-photo"
                  height={100}
                  width={100}
                />

                <h3>{member.name}</h3>

                <p className="team-role">{member.role}</p>

                <p className="team-bio">{member.bio}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

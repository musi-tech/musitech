import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import adImage from '../assets/images/tech.webp';
import adImage1 from '../assets/images/art1.jpeg';
import adImage2 from '../assets/images/ceo.webp';
import adImage3 from '../assets/images/chip1.jpg';
import adImage4 from '../assets/images/sora.webp';
import adImage5 from '../assets/images/chess.jpg';
import adImage6 from '../assets/images/art.webp';
import adImage7 from '../assets/images/meta.webp';



const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Unlock Hidden Tech Skills in 2024-25: Your Path to High-Paying Jobs!',
      description:
        'Discover the top 5 in-demand tech skills for 2025 that can unlock high-paying jobs! From AI to Blockchain, explore actionable insights, expert tips, & salary trends. Start building your future!',
      author: 'Abhishek Katale',
      date: 'December 6, 2024',
      image: adImage,
      link: '/blogs/unlock-hidden-techskills-2025',
    },
    {
      id: 2,
      title: 'Elon Musk’s Grok AI Goes Free: A Bold Challenge to ChatGPT and Google’s Gemini',
      description:
        'Discover how Elon Musk’s Grok AI is revolutionizing the AI industry! Learn about its groundbreaking features, free access for all, and how it challenges OpenAI’s ChatGPT and Google’s Gemini.',
      author: 'Abhishek Katale',
      date: 'December 7, 2024',
      image: 'https://assets-news-bcdn.dailyhunt.in/cmd/resize/1060x596_90/fetchdata20/images/3d/4c/c8/3d4cc88a27cfce29dab98a63058bc734e914d225dd6df17879903d2192c19e00.jpg',
      link: '/blogs/elon-musks-grok-ai-goes-free',
    },
    {
      id: 3,
      title: 'How to Make Money with AI (on the Side) in 2025: 10 Real Ways',
      description:
        'Alright so you’ve played around with ChatGPT… you’ve tried some other AI tools and you’re wondering about how to make money with AI. ',
      author: 'Abhishek Katale',
      date: 'December 8, 2024',
      image: adImage1,
      link: '/blogs/make-money-ai',
    },
    {
      id: 4,
      title: 'How much do companies of worlds richest people spend on their security?',
      description:
        'Discover how much top companies like Meta, Alphabet, Tesla, and Amazon spend on security for their CEOs, including Mark Zuckerberg, Sundar Pichai, and Elon Musk, with expenses reaching millions annually. ',
      author: 'Abhishek Katale',
      date: 'December 9, 2024',
      image: adImage2,
      link: '/blogs/how-much-world-richest-companies-spend-on-ceo-security',
    },
    {
      id: 5,
      title: 'Willow: Google’s Quantum Leap Towards the Future of Computing',
      description:
        'Discover Willow, Google’s latest breakthrough in quantum computing. With enhanced coherence time, smarter error correction, and unmatched computational power, Willow is shaping the future of technology and science. ',
      author: 'Abhishek Katale',
      date: 'December 10, 2024',
      image: adImage3,
      link: '/blogs/willow-googles-quantum-leap-towards-the-future-of-computing',
    },
    {
      id: 6,
      title: 'Transform Creativity with SORA AI: Revolutionary Text-to-Video Generator',
      description:
        'Discover SORA AI, the cutting-edge video generation tool that turns text prompts into stunning videos. Unleash your creativity with photorealistic visuals, dynamic animations, and seamless editing capabilities—all in an intuitive platform. ',
      author: 'Abhishek Katale',
      date: 'December 11, 2024',
      image: adImage4,
      link: '/blogs/sora-video-generator',
    },
    {
      id: 7,
      title: "D Gukesh Becomes Youngest World Chess Champion, Defeats Ding Liren in Thrilling Finale",
      description:
        "18-year-old D Gukesh makes history as the youngest-ever world chess champion, defeating Ding Liren 7.5-6.5 in a nail-biting 2024 FIDE World Championship finale in Singapore.",
      author: 'Abhishek Katale',
      date: 'December 12, 2024',
      image: adImage5,
      link: '/blogs/d-gukesh-victory',
    },
    {
      id: 8,
      title: "what do you think about AI Art Vs Human Made Art", 
      description:
        "Explore the fascinating debate between AI-generated art and human-made art. Dive into their differences, strengths, and how they shape the future of creativity. Learn how AI and human artists are shaping the future of art together. .",
      author: 'Abhishek Katale',
      date: 'December 13, 2024',
      image: adImage6,
      link: '/blogs/ai-vs-human-art',
    },
    {
      id: 9,
      title: "The Metaverse Explained: What It Is and What’s Next in This Digital Revolution", 
      description:
        "Discover the metaverse—a seamless blend of virtual and physical worlds powered by AI, AR, VR, and blockchain. Learn what it is, how it’s evolving, and what the future holds for this immersive digital universe.",
      author: 'Abhishek Katale',
      date: 'December 14, 2024',
      image: adImage7,
      link: '/blogs/metaverse-explained',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            MusiTech Blog
          </h1>
          <p className="text-center text-lg text-gray-600 mb-10">
            Stay updated with the latest trends and insights in the Tech industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <a
                    href={post.link}
                    target="_blank"
                    className="mt-4 inline-block w-full py-2 px-4 bg-green-500 text-white text-center rounded-md hover:bg-green-600 transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;

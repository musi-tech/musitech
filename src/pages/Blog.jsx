import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import adImage from '../assets/images/tech.webp';
import adImage1 from '../assets/images/money.webp';


const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Unlock Hidden Tech Skills in 2024-25: Your Path to High-Paying Jobs!',
      description:
        'Discover the top 5 in-demand tech skills for 2025 that can unlock high-paying jobs! From AI to Blockchain, explore actionable insights, expert tips, and salary trends. Start building your future today!',
      author: 'Abhishek Katale',
      date: 'December 6, 2024',
      image: adImage,
      link: '/blogs/unlock-hidden-techskills-2025',
    },
    {
      id: 2,
      title: 'Elon Musk’s Grok AI Goes Free: A Bold Challenge to ChatGPT and Google’s Gemini',
      description:
        'Discover how Elon Musk’s Grok AI is revolutionizing the AI industry! Learn about its groundbreaking features, free access for all, and how it challenges OpenAI’s ChatGPT and Google’s Gemini. Dive into the future of AI innovation with insights into Grok’s unique offerings and the bold vision reshaping technology worldwide.',
      author: 'Abhishek Katale',
      date: 'December 7, 2024',
      image: 'https://assets-news-bcdn.dailyhunt.in/cmd/resize/1060x596_90/fetchdata20/images/3d/4c/c8/3d4cc88a27cfce29dab98a63058bc734e914d225dd6df17879903d2192c19e00.jpg',
      link: '/blogs/elon-musks-grok-ai-goes-free',
    },
    {
      id: 2,
      title: 'How to Make Money with AI (on the Side) in 2025: 10 Real Ways',
      description:
        'Alright so you’ve played around with ChatGPT… you’ve tried some other AI tools and you’re wondering about how to make money with AI. ',
      author: 'Abhishek Katale',
      date: 'December 8, 2024',
      image: adImage1,
      link: '/blogs/make-money-ai',
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
            Stay updated with the latest trends and insights in the music industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
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

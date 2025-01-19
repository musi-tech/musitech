import React from 'react';



import adImage41 from '../assets/images/voice.webp';
import adImage42 from '../assets/images/pr1.webp';
import adImage43 from '../assets/images/pr2.webp';


const Blog = () => {
  const blogPosts = [
    {
      id: 45,
      title:"7 Proven Tips to Optimize Your Site for Voice Search in 2025",
      description:
        "Discover the latest strategies to optimize your site for voice search in 2025. Learn how to use conversational keywords, featured snippets, schema markup, and improve mobile usability for better voice search ranking.",
      author: 'Abhishek Katale',
      date: 'January 18, 2025',
      image: adImage42,
      link: '/blogs/optimize-site-for-voice-search-2025',
    },
    {
      id: 44,
      title:"The Best SEO Strategies for 2025: Stay Ahead in the AI-Driven Era",
      description:
        "Discover the top SEO strategies for 2025, including Generative Engine Optimization (GEO), dual SEO tactics, E-E-A-T enhancements, and AI integration. Stay competitive in the evolving digital landscape!",
      author: 'Abhishek Katale',
      date: 'January 18, 2025',
      image: adImage43,
      link: '/blogs/the-best-seo-strategies-for-2025',
    },
    {
      id: 43,
      title:"3 Proven SEO Tips for Voice Search Optimization in 2025",
      description:
        "Boost your website traffic with these 3 expert SEO tips for voice search optimization. Learn how to use HTTPS, improve site speed, and craft concise answers to stay ahead of the competition in 2025!",
      author: 'Abhishek Katale',
      date: 'January 18, 2025',
      image: adImage41,
      link: '/blogs/voice-search-optimization',
    },
    
   
  ];

  return (
    <>
      <div className="bg-white min-h-screen py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            MusiTech Blogs
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
    </>
  );
};

export default Blog;

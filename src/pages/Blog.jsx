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
import adImage8 from '../assets/images/bitcoin.webp';
import adImage9 from '../assets/images/eye.webp';
import adImage10 from '../assets/images/work.webp';
import adImage11 from '../assets/images/fiveskill.webp';
import adImage12 from '../assets/images/veo.webp';
import adImage13 from '../assets/images/chat.webp';
import adImage14 from '../assets/images/os.webp';
import adImage15 from '../assets/images/game.webp';
import adImage16 from '../assets/images/agi.webp';
import adImage17 from '../assets/images/sing.webp';
import adImage18 from '../assets/images/brain.webp';
import adImage19 from '../assets/images/netflix.webp';
import adImage20 from '../assets/images/gap.webp';
import adImage21 from '../assets/images/china.webp';



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
    {
      id: 10,
      title: "How Cryptocurrency Works: Simplified Guide to the Future of Money", 
      description:
        "Discover how cryptocurrency works, its evolution, advantages, challenges, and future potential. Learn about blockchain, Bitcoin, Ethereum, and the impact on global finance.",
      author: 'Abhishek Katale',
      date: 'December 15, 2024',
      image: adImage8,
      link: '/blogs/cryptocurrency-how-it-works',
    },
    {
      id: 11,
      title: "AI Just Gave Vision To A Legally Blind Person", 
      description:
        "Discover how groundbreaking AI-assisted eye surgery restored a legally blind woman's vision to better than 20/20, setting new benchmarks in personalized vision care.",
      author: 'Abhishek Katale',
      date: 'December 16, 2024',
      image: adImage9,
      link: '/blogs/ai-vision-restoration',
    },
    {
      id: 12,
      title: "AI Agents Will Apply for Jobs And Make Money in 2025?", 
      description:
        "Discover how AI agents will revolutionize industries by 2025, performing tasks autonomously, applying for jobs, and generating income. Microsoft AI CEO Mustafa Suleyman unveils the future of AI-driven progress.",
      author: 'Abhishek Katale',
      date: 'December 17, 2024',
      image: adImage10,
      link: '/blogs/ai-applying-for-jobs',
    },
    {
      id: 13,
      title: "One Month Can Change Your Life: Learn These 5 Skills to Earn $5,000+ in 2025", 
      description:
        "One month can change your life! Learn these 5 in-demand skills to earn $5,000 to $10,000 monthly in 2025. Take action today and transform your future.",
      author: 'Abhishek Katale',
      date: 'December 18, 2024',
      image: adImage11,
      link: '/blogs/five-golden-skills-2025',
    },
    {
      id: 14,
      title: "Google’s New Veo 2 Outshines OpenAI’s Sora: Unreal AI Video Quality in 4K", 
      description:
        "Discover Google’s Veo 2, the next-gen AI video generation tool surpassing OpenAI’s Sora. With 4K resolution, lifelike physics, and cinematic quality, it’s revolutionizing video production for creators worldwide.",
      author: 'Abhishek Katale',
      date: 'December 19, 2024',
      image: adImage12,
      link: '/blogs/google-veo2-vs-openai-sora-comparison',
    },
    {
      id: 15,
      title: "ChatGPT Now on WhatsApp: Transform Your AI Experience with Simple Text or Calls", 
      description:
        "Discover how ChatGPT's integration with WhatsApp makes AI more accessible than ever. Learn how to text or call ChatGPT for instant assistance, learning, and creative ideas—no account or extra app required!",
      author: 'Abhishek Katale',
      date: 'December 20, 2024',
      image: adImage13,
      link: '/blogs/chatgpt-on-whatsapp',
    },
    {
      id: 16,
      title: "The OS From Movie Her Just Became a Reality: Explore Google’s Gemini Stream", 
      description:
        "Discover how Google’s Gemini Stream brings us closer to the futuristic OS from the movie Her. With real-time AI assistance for screen sharing, coding, gaming, and more, the future of AI is here!",
      author: 'Abhishek Katale',
      date: 'December 21, 2024',
      image: adImage14,
      link: '/blogs/gemini-stream',
    },
    {
      id: 17,
      title: "How AAA Games Are Destroying the Gaming Industry in 2025", 
      description:
        "Explore how AAA games are impacting the gaming industry with rising costs, job losses, and a lack of innovation. Discover why AA games could be the key to saving gaming in 2025.",
      author: 'Abhishek Katale',
      date: 'December 22, 2024',
      image: adImage15,
      link: '/blogs/aaa-impact-gaming-2025',
    },
    {
      id: 18,
      title: "Breaking News: OpenAI O3 Brings Us Closer to AGI – A Giant Leap in AI Evolution", 
      description:
        "OpenAI unveils O3, its most advanced AI model yet, showcasing unmatched skills in coding, math, and sci. With groundbreaking Arc AGI benchmark scores, O3 is a step closer to AGI",
      author: 'Abhishek Katale',
      date: 'December 23, 2024',
      image: adImage16,
      link: '/blogs/openai-achieved-agi',
    },
    {
      id: 19,
      title: "Singapore’s Rise to Prosperity: A Blueprint for Developing Nations", 
      description:
        "Discover how Singapore transformed from a resource-poor island to a thriving global economic powerhouse through visionary leadership and strategic decision-making.",
      author: 'Abhishek Katale',
      date: 'December 24, 2024',
      image: adImage17,
      link: '/blogs/singapore-rise-to-prosperity',
    },
    {
      id: 20,
      title: "Don’t Follow the Crowd: Thrive in the AI-Powered Era with These Proven Strategies", 
      description:
        "Discover how to thrive in an AI-powered world! Learn actionable strategies like critical thinking, leveraging AI tools, and adopting an mindset to stand out in the rapidly evolving job market.",
      author: 'Abhishek Katale',
      date: 'December 25, 2024',
      image: adImage18,
      link: '/blogs/thrive-in-ai-world',
    },
    {
      id: 21,
      title: "Math Predicts Your Next Netflix Show: Discover the 37% Rule", 
      description:
        "Learn how the 37% Rule, a math strategy, can help you make smarter decisions—from picking your next Netflix show to landing the perfect job. Explore the secret to efficient decision-making!",
      author: 'Abhishek Katale',
      date: 'December 26, 2024',
      image: adImage19,
      link: '/blogs/math-predicts-netflix',
    },
    {
      id: 22,
      title: "160% vs 4%: Unveiling the Tech Pay Gap in India", 
      description:
        "Explore the stark pay gap in India's tech industry. CEOs enjoy a 160% salary hike, while freshers see just a 4% increase. Discover the causes and solutions for a more equitable future.",
      author: 'Abhishek Katale',
      date: 'December 27, 2024',
      image: adImage20,
      link: '/blogs/tech-pay-gap-india',
    },
    {
      id: 23,
      title: "How Short Form Dramas Are Revolutionizing Entertainment in China", 
      description:
        "Discover how short form dramas with 1-2 minute episodes are taking over China, reshaping entertainment trends, and surpassing traditional formats like movies and TV shows.",
      author: 'Abhishek Katale',
      date: 'December 28, 2024',
      image: adImage21,
      link: '/blogs/short-form-dramas-china',
    },
    
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen py-10">
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

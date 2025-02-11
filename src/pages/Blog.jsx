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
import adImage22 from '../assets/images/cool.webp';
import adImage23 from '../assets/images/hustle.webp';
import adImage24 from '../assets/images/gen.webp';
import adImage25 from '../assets/images/social.webp';
import adImage26 from '../assets/images/blinkit.webp';
import adImage27 from '../assets/images/lam.webp';
import adImage28 from '../assets/images/siri.webp';
import adImage29 from '../assets/images/aichess.webp';
import adImage30 from '../assets/images/aibi.webp';
import adImage31 from '../assets/images/nivid.webp';
import adImage32 from '../assets/images/digi.webp';
import adImage33 from '../assets/images/aiage.webp';
import adImage34 from '../assets/images/ps.webp';
import adImage35 from '../assets/images/metaa.webp';
import adImage36 from '../assets/images/plan.webp';
import adImage37 from '../assets/images/iit.jpeg';
import adImage38 from '../assets/images/aimake.webp';
import adImage39 from '../assets/images/aldigital.webp';
import adImage40 from '../assets/images/mlad.webp';
import adImage41 from '../assets/images/voice.webp';
import adImage42 from '../assets/images/pr1.webp';
import adImage43 from '../assets/images/pr2.webp';
import adImage44 from '../assets/images/emailai.webp';
import adImage45 from '../assets/images/emailauto.webp';
import adImage46 from '../assets/images/emailwork.webp';
import adImage47 from '../assets/images/dmt.webp';
import adImage48 from '../assets/images/acc.webp';
import adImage49 from '../assets/images/hat.webp';
import adImage50 from '../assets/images/bloge.webp';
import adImage51 from '../assets/images/deek.webp';
import adImage52 from '../assets/images/denta.webp';
import adImage53 from '../assets/images/craw.webp';
import adImage54 from '../assets/images/load.webp';
import adImage55 from '../assets/images/drive.webp';
import adImage56 from '../assets/images/tre.webp';
import adImage57 from '../assets/images/page.webp';
import adImage58 from '../assets/images/saas.webp';
import adImage59 from '../assets/images/upload.webp';
import adImage60 from '../assets/images/pwa.webp';
import adImage61 from '../assets/images/inter.webp';
import adImage62 from '../assets/images/seek.webp';
import adImage63 from '../assets/images/alexa.webp';
import adImage64 from '../assets/images/kpi.webp';
import adImage65 from '../assets/images/o3.webp';
import adImage66 from '../assets/images/dnss.webp';
import adImage67 from '../assets/images/go.webp';
import adImage68 from '../assets/images/dii.webp';
import adImage69 from '../assets/images/green.webp';
import adImage70 from '../assets/images/eat.webp';
import adImage71 from '../assets/images/emm.webp';
import adImage72 from '../assets/images/wm.webp';


const Blog = () => {
  const blogPosts = [
    {
      id: 76,
      title: "what do you think about AI Art Vs Human Made Art", 
      description:
        "Explore the fascinating debate between AI-generated art and human-made art. Dive into their differences, strengths, and how they shape the future of creativity. Learn how AI and human artists are shaping the future of art together. .",
      author: 'Abhishek Katale',
      date: 'Feb 10, 2025',
      image: adImage6,
      link: '/blogs/ai-vs-human-art',
    },
    {
      id: 75,
      title: "ChatGPT Now on WhatsApp: Transform Your AI Experience with Simple Text or Calls", 
      description:
        "Discover how ChatGPT's integration with WhatsApp makes AI more accessible than ever. Learn how to text or call ChatGPT for instant assistance, learning, and creative ideas—no account or extra app required!",
      author: 'Abhishek Katale',
      date: 'Feb 09, 2025',
      image: adImage13,
      link: '/blogs/chatgpt-on-whatsapp',
    },
    {
      id: 74,
      title: "WhatsApp Marketing: A Quick Guide for Businesses (2025)",
      description:"Discover the power of WhatsApp Marketing in 2025! Learn how to engage customers, boost sales, and build lasting relationships using WhatsApp Business API. Enroll in our free masterclass today!",
      author: 'Ghanashyam Kadam',
      date: 'Feb 08, 2025',
      image: adImage72,
      link: '/blogs/what-is-whatsapp-marketing',
    },
    {
      id: 73,
      title: "Email Marketing: More Than Just a Strategy, It's a Conversation",
      description:"Discover how email marketing goes beyond sales—it builds genuine connections. Learn strategies, real-life success stories, and expert tips to craft emails that engage and convert.",
      author: 'Ghanashyam Kadam',
      date: 'Feb 07, 2025',
      image: adImage71,
      link: '/blogs/what-is-email-marketing',
    },
    {
      id: 72,
      title:"Mastering Soft Skills: The Key to Career Success in the Digital Age",
      description:"Discover the essential soft skills that can set you apart in today’s competitive job market. Learn how communication, teamwork, adaptability, and problem-solving can elevate your career success.",
      author: 'Ghanashyam Kadam',
      date: 'Feb 06, 2025',
      image: adImage70,
      link: '/blogs/what-is-eat-in-seo-how-to-improve',
    },
    {
      id: 71,
      title:"Green Marketing: Real-Life Stories and Practical Steps Towards a Sustainable Future",
      description:"Discover the impact of green marketing through real-world examples and personal stories. Learn how sustainable practices by companies like Starbucks, Apple, and IKEA are shaping a more eco-friendly future and how you can contribute to the movement.",
      author: 'Ghanashyam Kadam',
      date: 'Feb 05, 2025',
      image: adImage69,
      link: '/blogs/what-is-green-marketing',
    },
    {
      id: 70,
      title:"OpenAI's Deep Research: The AI Tool That Revolutionizes Online Research",
      description:"Discover OpenAI's Deep Research, an AI-powered assistant that transforms the way we gather and analyze information. Learn how it works, its benefits, limitations, and its impact on the future of research.",
      author: 'Ghanashyam Kadam',
      date: 'Feb 04, 2025',
      image: adImage68,
      link: '/blogs/ai-research-assistant',
    },
    {
      id: 69,
      title:"How to Set Effective Marketing Goals: A Guide to SMART Goal Setting",
      description:"Learn how to set SMART marketing goals to boost brand awareness, increase leads, and improve ROI. Follow our step-by-step guide for actionable insights and success in digital marketing.",
      author: 'Ghanashyam Kadam',
      date: 'Feb 03, 2025',
      image: adImage67,
      link: '/blogs/how-to-set-smart-marketing-goals',
    },
    {
      id: 68,
      title:"Did AI Finally Crack Aging? How GPT-4B Micro is Revolutionizing Longevity",
      description:"Discover how AI-driven breakthroughs, like GPT-4B Micro and Yamanaka factors, are transforming stem cell therapy and pushing the boundaries of aging reversal. Is a longer, healthier life within reach? Find out now!",
      author: 'Ghanashyam Kadam',
      date: 'Feb 02, 2025',
      image: adImage66,
      link: '/blogs/ai-aging-breakthrough',
    },
    {
      id: 67,
      title:"OpenAI’s O3 Mini: The Future of AI Coding, Reasoning, and Affordability",
      description:"Discover OpenAI’s latest breakthrough, O3 Mini—an affordable yet powerful AI model excelling in coding, STEM reasoning, and massive text processing. Learn how it outperforms competitors while staying cost-effective.",
      author: 'Ghanashyam Kadam',
      date: 'Feb 01, 2025',
      image: adImage65,
      link: '/blogs/openai-o3-mini',
    },
    {
      id: 66,
      title:"Digital Marketing Metrics & KPIs Explained with Real-Life Insights",
      description:"Let's be honest—listening to a digital marketer talk about metrics and KPIs can sometimes feel like decoding a foreign language. It reminds me of the first time I sat in a meeting where acronyms like CPA, LTV, and CTR were being thrown around. ",
      author: 'Ghanashyam Kadam',
      date: 'January 30, 2025',
      image: adImage64,
      link: '/blogs/digital-marketing-metrics',
    },
    {
      id: 65,
      title:"How to Fetch an Alexa Ranking with PHP",
      description:"Learn how to fetch Alexa rankings using PHP and XML parsing. This step-by-step guide explains how to extract website rankings, format data, and apply it to SEO tracking. Perfect for developers and digital marketers!",
      author: 'Ghanashyam Kadam',
      date: 'January 29, 2025',
      image: adImage63,
      link: '/blogs/how-to-fetch-alexa-ranking-with-php',
    },
    {
      id: 64,
      title:"DeepSeek Just Crashed $1 Trillion Off the US Market",
      description:"The US stock market just took a major hit. Over $1 trillion vanished in a matter of hours. Big tech companies, especially chipmakers, saw their stock prices fall sharply. Nvidia dropped 177%. Broadcom also plunged 177%. ARM lost 10%. Investors are in shock.",
      author: 'Ghanashyam Kadam',
      date: 'January 28, 2025',
      image: adImage62,
      link: '/blogs/what-is-deepseek',
    },
    {
      id: 63,
      title:"Unlock the Power of Interactive Content: Boost Engagement and Build Connections",
      description:"Discover how quizzes, infographics, games, and more can transform your content strategy. Learn tips to create interactive content that drives engagement and builds lasting customer relationships.",
      author: 'Ghanashyam Kadam',
      date: 'January 27, 2025',
      image: adImage61,
      link: '/blogs/interactive-content-benefits-engagement-strategies',
    },
    {
      id: 62,
      title:"What is a PWA? How Progressive Web Apps Work (Features & Benefits)",
      description:"Discover the power of Progressive Web Apps (PWAs): A fast, secure, and app-like experience for websites. Learn how PWAs work, key features, and real-world examples. Optimize your app strategy today!",
      author: 'Ghanashyam Kadam',
      date: 'January 27, 2025',
      image: adImage60,
      link: '/blogs/what-is-a-pwa-how-progressive-web-apps-work',
    },
    {
      id: 61,
      title:"How to Upload Your Website to the Internet: A Beginner's Guide",
      description:"Building a website is an exciting journey, but the real magic happens when you upload your website to the internet. This step allows your hard work to shine and become accessible to everyone online.",
      author: 'Ghanashyam Kadam',
      date: 'January 26, 2025',
      image: adImage59,
      link: '/blogs/how-to-upload-website-to-internet',
    },
    {
      id: 60,
      title:"How to Sell SEO to SaaS Companies: A Personal Perspective",
      description:"How SaaS Companies Can Optimize for SEO : Selling SEO services to SaaS companies can be challenging, but it's not impossible. My journey working with SaaS companies has taught me valuable lessons.",
      author: 'Abhishek Katale',
      date: 'January 25, 2025',
      image: adImage58,
      link: '/blogs/how-saas-companies-can-optimize-for-seo',
    },
    {
      id: 59,
      title:"Understanding Orphan Pages: A Comprehensive Guide with Real-Life Examples",
      description:"Learn about orphan pages, why they occur, and how they can impact SEO and user experience. Discover strategies to identify and fix them for a healthier website.",
      author: 'Abhishek Katale',
      date: 'January 25, 2025',
      image: adImage57,
      link: '/blogs/seo-orphan-pages-guide',
    },
    {
      id: 58,
      title:"The New Approach to SEO That Changes Everything in 2025",
      description:"Discover actionable SEO strategies for 2025! Learn how to integrate SEO into digital marketing, optimize e-commerce sites, boost local visibility, and master off-page tactics. Stay ahead in the evolving search landscape!",
      author: 'Abhishek Katale',
      date: 'January 24, 2025',
      image: adImage56,
      link: '/blogs/the-new-approach-to-seo-that-changes-everything-in-2025',
    },
    {
      id: 57,
      title:"Driving Traffic Growth with Competitor Keyword Analysi",
      description:"Driving Traffic Growth with Competitor Keyword Analysis:  One of the best ways to grow your website’s traffic is by analyzing your competitors’ keywords. By understanding the strategies they use, you can uncover opportunities to steal their SEO traffic and improve your rankings.",
      author: 'Abhishek Katale',
      date: 'January 24, 2025',
      image: adImage55,
      link: '/blogs/driving-traffic-growth-with-competitor-keyword-analysi',
    },
    {
      id: 56,
      title:"10 Proven Tips to Decrease Page Load Time and Boost Website Speed",
      description:
       "Learn 10 actionable tips to decrease your website's page load time, improve user experience, boost SEO rankings, and increase conversions. Start optimizing your site today!",
      author: 'Abhishek Katale',
      date: 'January 23, 2025',
      image: adImage54,
      link: '/blogs/decrease-page-load-time',
    },
    {
      id: 55,
      title:"How Search Engines Work: Crawling, Indexing, and Ranking Explained",
      description:
       "Discover how search engines work with a simple breakdown of crawling, indexing, and ranking. Learn actionable tips to optimize your website for better visibility and rankings.",
      author: 'Abhishek Katale',
      date: 'January 23, 2025',
      image: adImage53,
      link: '/blogs/how-search-engines-work-crawling-indexing-ranking',
    },
    {
      id: 54,
      title:"Denta Water IPO Review 2025: Should You Invest or Skip?",
      description:
       "Discover a detailed review of the Denta Water IPO, opening for subscription from January 22 to January 24, 2025. Learn about its financials, key strengths, risks, and whether it's a good investment for listing gains or long-term returns.",
      author: 'Abhishek Katale',
      date: 'January 22, 2025',
      image: adImage52,
      link: '/blogs/denta-water-ipo-review-2025',
    },
    {
      id: 53,
      title:"DeepSeek R1: Redefining AI with Open-Source Brilliance",
      description:
       "Discover how DeepSeek R1 is revolutionizing artificial intelligence with its open-source approach, outperforming industry giants while empowering developers and creators worldwide. Dive into its benchmarks, human-like reasoning, and transformative impact.",
      author: 'Abhishek Katale',
      date: 'January 22, 2025',
      image: adImage51,
      link: '/blogs/deepseek-r1-ai-open-source-revolution',
    },
    {
      id: 52,
      title:"How to Write a Blog Post From Start to Finish: 7 Simple Tips",
      description:
       "Learn how to write a blog post that captures attention, drives traffic, and engages your readers. Follow these 7 simple tips to create content that resonates!",
      author: 'Abhishek Katale',
      date: 'January 21, 2025',
      image: adImage50,
      link: '/blogs/how-to-write-a-blog-post-from-start-to-finish',
    },
    {
      id: 51,
      title:"Understanding White Hat, Black Hat, and Gray Hat SEO: Techniques & Real-World Applications",
      description:
       "Learn about White Hat, Black Hat, and Gray Hat SEO techniques. Discover ethical practices, risky shortcuts, and their real-world applications to boost your website’s rankings effectively and sustainably.",
      author: 'Abhishek Katale',
      date: 'January 21, 2025',
      image: adImage49,
      link: '/blogs/understanding-white-hat-black-hat-gray-hat-seo',
    },
    {
      id: 50,
      title:"Digital Marketing Accessibility in 2025: 10 Powerful Strategies for Success",
      description:
       "Discover why digital marketing accessibility is essential in 2025. Learn powerful strategies, real-world success stories, and actionable tips to create inclusive campaigns that drive results.",
      author: 'Abhishek Katale',
      date: 'January 20, 2025',
      image: adImage48,
      link: '/blogs/digital-marketing-accessibility-2025',
    },
    {
      id: 49,
      title:"Digital Marketing Trends 2025 😱 | Game-Changing Innovations You Can't Ignore",
      description:
       "Discover the top Digital Marketing Trends 2025 reshaping the industry, from AI and automation to content quality, influencer marketing shifts, and social e-commerce!",
      author: 'Abhishek Katale',
      date: 'January 20, 2025',
      image: adImage47,
      link: '/blogs/digital-marketing-trends-2025',
    },
    {
      id: 48,
      title:"Email List Segmentation 2025: The Ultimate Guide by Mailtrap",
      description:
        "Learn the secrets to effective email marketing with Mailtrap's Email List Segmentation 2025 tutorial. Discover why segmentation matters, how to segment your list, and actionable tips to boost engagement, conversions, and ROI.",
      author: 'Abhishek Katale',
      date: 'January 19, 2025',
      image: adImage46,
      link: '/blogs/email-list-segmentation-2025',
    },
    {
      id: 47,
      title:"Mastering Email Marketing Automation with MailerLite: Step-by-Step Guide",
      description:
        "Learn how to create and optimize email marketing automation workflows with MailerLite. This comprehensive tutorial covers triggers, templates, advanced features, and tips to boost engagement and conversions.",
      author: 'Abhishek Katale',
      date: 'January 19, 2025',
      image: adImage45,
      link: '/blogs/mastering-email-marketing-automation-mailerlite',
    },
    {
      id: 46,
      title:"Interactive Emails: A Complete Guide with Tips and Examples",
      description:
        "Discover how interactive emails can transform your email campaigns with engaging elements like polls, animations, and more. Learn tips, tools, and examples to create dynamic emails that boost engagement and conversions.",
      author: 'Abhishek Katale',
      date: 'January 19, 2025',
      image: adImage44,
      link: '/blogs/interactive-emails',
    },
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
    {
      id: 42,
      title:"Machine Learning in Advertising: Transforming the Future of Marketing",
      description:
        "Discover how machine learning is revolutionizing advertising by enabling personalization, predictive pricing, and real-time adaptation. Learn insights from industry leaders and explore trends shaping the future of ethical, data-driven marketing.",
      author: 'Abhishek Katale',
      date: 'January 17, 2025',
      image: adImage40,
      link: '/blogs/machine-learning-advertising',
    },
    {
      id: 41,
      title:"Top 10 AI Tools for Digital Marketing in 2025 to Boost Efficiency and Results",
      description:
        "Discover the top AI tools revolutionizing digital marketing in 2025. From content creation to lead generation, these tools help businesses save time, optimize strategies, and drive better results.",
      author: 'Abhishek Katale',
      date: 'January 17, 2025',
      image: adImage39,
      link: '/blogs/top-ai-tools-for-digital-marketing-in-2025',
    },
    {
      id: 40,
      title:"Beginner's Guide to AI Marketing: Actionable Tips for Success in 2025",
      description:
        "Discover the ultimate beginner's guide to AI marketing! Learn actionable tips on leveraging AI tools for keyword research, content creation, SEO, and more. Perfect for marketers ready to thrive in 2025.",
      author: 'Abhishek Katale',
      date: 'January 17, 2025',
      image: adImage38,
      link: '/blogs/ai-marketing-guide',
    },
    {
      id: 39,
      title:"Mahakumbh 2025: An IIT Bombay Engineer’s Inspiring Journey to Spiritual Vairagi",
      description:
        "Discover the remarkable story of Abhay Ji, an IIT Bombay aerospace engineer who renounced a conventional life for spiritual vairagya. Follow his inspiring journey of resilience, self-discovery, and inner peace at Mahakumbh 2025.",
      author: 'Abhishek Katale',
      date: 'January 16, 2025',
      image: adImage37,
      link: '/blogs/mahakumbh-2025-iit-bombay-engineer-journey',
    },
    {
      id: 38,
      title:"Microsoft Launches New Pay-As-You-Go Copilot Plan for Businesses",
      description:
        "Discover Microsoft’s new pay-as-you-go Copilot plan for business users. Affordable AI-powered tools, seamless Microsoft 365 integration, and advanced features like workflow automation.",
      author: 'Abhishek Katale',
      date: 'January 15, 2025',
      image: adImage36,
      link: '/blogs/copilot-plan',
    },
    {
      id: 37,
      title:"Meta to Lay Off 5% of Workforce, Focuses on AI and Plans to Rehire in 2025",
      description:
        "Discover why Meta is cutting 5% of its workforce in 2025 as part of its “Year of Efficiency” strategy. Learn about its focus on AI investments, updated content policies, and plans to rehire impacted roles later this year.",
      author: 'Abhishek Katale',
      date: 'January 14, 2025',
      image: adImage35,
      link: '/blogs/meta-hiring-in-2025',
    },
    {
      id: 36,
      title:"PlayStation's Groundbreaking Smell Feature: Experience Games Like Never Before",
      description:
        "Sony redefines gaming with its revolutionary smell technology, allowing players to experience in-game scents. Discover how this innovation is changing immersive gameplay forever, from The Last of Us to the future of multi-sensory experiences.",
      author: 'Abhishek Katale',
      date: 'January 11, 2025',
      image: adImage34,
      link: '/blogs/playstation-smell-feature',
    },
    {
      id: 35,
      title:"Agentic AI: Revolutionizing Workflows with Autonomous Intelligence",
      description:
        "Discover how Agentic AI is transforming industries by managing workflows autonomously. Explore its applications, benefits, and challenges as this groundbreaking technology redefines the future of work. ",
      author: 'Abhishek Katale',
      date: 'January 10, 2025',
      image: adImage33,
      link: '/blogs/agenticai-article',
    },
    {
      id: 34,
      title:"Nvidia DIGITS: The Personal AI Supercomputer Revolutionizing Computing",
      description:
        "Discover Nvidia DIGITS, the world’s first personal AI supercomputer. Compact, powerful, and energy-efficient, DIGITS brings supercomputing to your desk, empowering developers, researchers, and students like never before. ",
      author: 'Abhishek Katale',
      date: 'January 9, 2025',
      image: adImage32,
      link: '/blogs/nvidia-digits',
    },
    {
      id: 33,
      title:"RTX 5090: Twice the Power, AI Graphics, and Next-Gen Gaming for $2,000",
      description:
        "Discover the Nvidia RTX 5090, the next-gen GPU offering double the power of the RTX 4090, AI-generated graphics, and groundbreaking specs. Perfect for gamers and creators at $2,000. Launching January 30, 2025. ",
      author: 'Abhishek Katale',
      date: 'January 8, 2025',
      image: adImage31,
      link: '/blogs/nvidia-rtx-5090-blog',
    },
    
   
  ];

  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

export default Blog;

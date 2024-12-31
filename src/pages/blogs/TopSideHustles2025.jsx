import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "Why Side Hustles Matter",
            description: "Side hustles aren't just about extra income. They offer numerous benefits that can reshape your career and lifestyle:\n\n    Income Diversity: Secure your financial future with multiple income streams.\n    Skill Enhancement: Learn new tools, improve existing skills, and gain hands-on experience.\n    Portfolio Building: Add real-world projects to your resume to stand out.\n    Networking Opportunities: Expand your professional network by working with new clients and teams.\n\nNow, let’s explore the top 5 side hustles you can start in 2025 to earn big!"
        },
        {
            id: 2,
            title: "Freelance Web Development: A High-Demand Skill in 2025",
            description: "The demand for web development is soaring, fueled by AI-powered tools. Businesses need developers for websites, SaaS platforms, and custom solutions.\n\nSkills to Learn:\n- Frontend: React.js, Next.js\n- Backend: Django, Flask, Node.js\n- Databases: Firebase, Supabase, MongoDB, SQL\n- No-code tools: WordPress, Webflow, Shopify\n\nHow to Start:\n- Build a strong GitHub portfolio with live projects.\n- Create demo websites to showcase your expertise.\n- Join platforms like Upwork, Fiverr, and Toptal.\n\n💡 Pro Tip: Even using no-code tools can earn you ₹50,000–₹1,00,000 per project!"
        },
        {
            id: 3,
            title: "Content Creation",
            description: "Platforms like YouTube, Instagram, and TikTok offer incredible earning potential for creators. Whether it’s tech tutorials, financial tips, or lifestyle vlogs, there’s an audience for everyone.\n\nHow to Start:\n\n- Choose a niche: technology, fitness, or personal finance.\n- Focus on short, engaging videos to build an audience.\n- Monetize through ads, sponsorships, and brand collaborations.\n\n💡 Inspiration: Top creators like Nishant Jahar earn lakhs per month sharing knowledge and experiences."
        },
        {
            id: 4,
            title: "Online Teaching and Courses",
            description: "If you have expertise in coding, design, or other professional skills, online teaching can generate passive income.\n\nHow to Start:\n\n- Identify topics you’re confident in.\n- Create engaging, structured lessons.\n- Use platforms like Udemy, Coursera, and Skillshare.\n\n💡 Earnings: Popular instructors earn ₹50,000 to ₹2,00,000 per course based on demand."
        },
        {
            id: 5,
            title: "Affiliate Marketing",
            description: "Affiliate marketing allows you to earn commissions by promoting products or services through blogs, videos, or social media.\n\nHow to Start:\n\n- Join programs like Amazon Associates or Flipkart Affiliate.\n- Focus on trending categories like tech gadgets or lifestyle products.\n- Create content showcasing the benefits of these products.\n\n💡 Potential: Successful affiliate marketers earn over ₹1 lakh per month!"
          },
          {
            id: 6,
            title: "AI and Automation Services",
            description: "AI-driven solutions are transforming industries. Automating workflows, creating AI-powered tools, or offering chatbot services can be highly lucrative.\n\nSkills to Learn:\n\n- AI and Machine Learning basics\n- Tools like Zapier, OpenAI APIs, TensorFlow\n- Chatbot platforms like Dialogflow or ChatGPT\n\nHow to Start:\n\n- Develop sample projects demonstrating automation.\n- Market your services on LinkedIn and freelance platforms.\n- Offer solutions to small and medium-sized businesses.\n\n💡 Bonus: AI services are among the fastest-growing fields in tech!"
          },
          {
            "id": 7,
            "title": "The Best Time to Start is Now",
            "description": "Side hustles are not just about earning more—they’re about building a secure future and learning new skills. The saying holds true: “Yesterday was the best time to start, but today is the next best time.”\n\nSo, pick a hustle, start small, and take charge of your financial independence in 2025!\n\nWhich of these side hustles will you explore? Let us know in the comments below!"
        }
        
          
                
            
        ];
        
        

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/hustle.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    Earn LAKHS with These 5 Side Hustles in 2025! 💰💸         </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    As we approach 2025, the job market continues to evolve. With economic challenges, industry shifts, and AI-driven transformations, relying solely on a 9-to-5 job has become increasingly risky. If you're a tech enthusiast or software engineer, you've likely felt this shift firsthand. But there's good news—side hustles can be your gateway to financial freedom and personal growth.
 
                    </p>
                    <iframe className="mx-auto mt-6 rounded-lg shadow-lg" width="350" height="215" src="https://www.youtube.com/embed/bfCeabWUGDQ?si=KKyNWwtr0u25L5b6"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  
                </header>
                <nav className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Table of Contents</h2>
                    <ul className="list-disc list-inside text-green-600">
                        {blogData.map((item) => (
                            <li key={item.id}>
                                <a href={`#section-${item.id}`} className="hover:underline">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <section>
                    {blogData.map((section) => (
                        <article
                            id={`section-${section.id}`}
                            key={section.id}
                            className="mb-8 p-4 bg-white shadow-md rounded-md border border-gray-200"
                        >
                            <h2 className="text-2xl font-semibold text-green-600 mb-2">
                                {section.title}
                            </h2>
                            <p className="text-gray-700 whitespace-pre-line">{section.description}</p>
                            <div className="text-gray-800">{section.explore}</div>

                            
                        </article>
                    ))}
                </section>
            </div>
            <Footer />
        </>
    );
};

export default BlogArticle;


import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        {
            "id": 1,
            "title": "Shopify Development: A Golden Skill to Earn $5,000 to $10,000 in 2025",
            "description": "E-commerce is rapidly growing worldwide, with India witnessing unprecedented growth. Shopify stands out as a top platform for building online stores, and businesses are willing to pay premium prices for experts who can tailor their stores to perfection.\n\nAs a Shopify Developer, you'll be responsible for:\n\n- Creating and customizing Shopify stores to meet specific business needs.\n- Integrating essential features like payment gateways, apps, and tools for enhanced functionality.\n- Optimizing stores to increase conversions and drive higher sales.\n\nTo get started, you can:\n\n- Learn for free through YouTube tutorials.\n- Take paid courses on platforms like Udemy or Coursera.\n- Gain hands-on experience by building your own Shopify store or working on small projects.\n\nEarnings potential varies based on experience:\n\n- Beginners can earn $500 to $1,000 per project.\n- Experienced developers can earn $2,000 to $5,000 per project.\n\nBy completing 2 to 3 projects each month, you could easily make between $5,000 and $10,000."
        },
        {
            "id": 2,
            "title": "Paid Advertising (Google, Facebook, Instagram Ads)",
            "description": "Every business relies on ads to grow. Skilled ad managers are in high demand as businesses struggle to run ads effectively.\n\nWhat You’ll Do:\n\n    Write ad copy and create campaigns.\n    Target the right audience.\n    Analyze and improve ad results.\n\nHow to Learn:\n\n    Google Skillshop: Free Google Ads training.\n    Facebook Blueprint: Master Facebook Ads.\n    Start small with a $50 ad budget for practice.\n\nEarnings Potential:\n\n    Freelancers: $300–$2,000 per client/month.\n    Agencies: Handle 5 clients = $10,000/month."
        },
        {
            "id": 3,
            "title": "Social Media Management",
            "description": "Social media is essential for every business, but many companies lack the time or skills to stay active. They hire managers to grow their brand presence.\n\nWhat You’ll Do:\n\n    Create and schedule content.\n    Engage with followers.\n    Grow followers organically.\n\nHow to Learn:\n\n    Watch YouTube tutorials.\n    Take courses on Hootsuite Academy or Udemy.\n    Master tools like Canva, Buffer, and Sprout Social.\n\nEarnings Potential:\n\n    Beginners: $300–$500 per month/client.\n    Experienced: $1,000–$2,000 per client.\n    Manage 5 clients = $5,000/month."
        },
        {
            "id": 4,
            "title": "Graphic Designing",
            "description": "Why Graphic Design?\nFrom social media to websites, good visuals attract customers. Skilled designers are needed by startups, influencers, and agencies.\n\nWhat You’ll Do:\n\n    Create eye-catching visuals.\n    Use tools like Adobe Photoshop, Illustrator, and Canva.\n\nHow to Learn:\n\n    Start with free Canva tutorials.\n    Take paid courses on Udemy or Domestika.\n    Build a portfolio with sample designs.\n\nEarnings Potential:\n\n    Freelancers: $300–$1,500 per project.\n    Experienced: $3,000–$6,000/month."
        },
        {
            "id": 5,
            "title": "AI-Powered Automation (The Rare Skill)",
            "description": "This is the rarest skill on the list. Many businesses still don’t know how AI tools can automate their processes, giving you a massive opportunity.\n\nWhat You’ll Automate:\n\n    Email sequences.\n    Customer support with chatbots (e.g., ChatGPT).\n    Workflows using tools like Zapier and Make.\n\nHow to Learn:\n\n    Explore automation tools like Zapier and Make.\n    Take courses on AI-powered automation.\n\nEarnings Potential:\n\n    Charge $500–$5,000 per automation setup.\n    Handle 5 clients = $10,000+ monthly."
        },
        {
            "id": 6,
            "title": "One Month Can Change Your Life: 5 Skills to Earn $5,000 to $10,000 in 2025",
            "description": "You’re just one month away from changing your life. By mastering even one of these 5 skills, you can start earning $5,000 to $10,000 monthly in 2025. Don’t keep scrolling. Take action today. Learn Shopify development, run paid ads, manage social media, design graphics, or master AI-powered automation. The choice is yours."
        }
        
                  
        
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/fiveskill.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    One Month Can Change Your Life: 5 Skills to Earn $5,000 to $10,000 in 2025             </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    Hurray! You’re just one month away from changing your life. Most people struggle because of information overload. You’re bombarded with so much data that it’s hard to decide what works. I’ve done the hard work for you and found 5 in-demand skills that will help you earn $5,000 to $10,000 every month in 2025.<br/>

The best part? The last skill is so rare that mastering it puts you far ahead of the competition.

                    </p>
                   
                    <iframe className="mx-auto mt-6 rounded-lg shadow-lg" width="350" height="215"  src="https://www.youtube.com/embed/FeLNpX1GljM?si=561YT-QJsTuXTN_N"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 
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


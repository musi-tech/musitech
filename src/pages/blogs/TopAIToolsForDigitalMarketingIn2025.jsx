import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "Merlin.ai",
            description: "Merlin.ai integrates ChatGPT directly into Google Chrome, offering seamless interaction with emails and documents. It automates tasks like crafting personalized responses and addressing objections, making communication efficient and consistent.",
            keyFeatures: [
                "Context-aware email replies.",<br/>,
                "Real-time objection handling.",<br/>,
                "Chrome extension for quick access."
            ]
        },
        {
            id: 2,
            title: "Notion AI",
            description: "Notion AI is a game-changer for project management. By integrating AI into the Notion ecosystem, it streamlines content creation, task management, and workflow organization.",
            keyFeatures: [
                "AI-assisted task management.",<br/>,
                "Content generation for blogs, social media, and SOPs.",<br/>,
                "Tailored for agency workflows."
            ]
        },
        {
            id: 3,
            title: "Taplio",
            description: "Taplio simplifies LinkedIn lead generation. This tool automates outreach, generates leads, and sets up automated responses, enabling personalized interactions at scale.",
            keyFeatures: [
                "Automated DM responses.",<br/>,
                "Integration with CRM tools.",<br/>,
                "Bulk messaging with personalization."
            ]
        },
        {
            id: 4,
            title: "BeHuman.ai",
            description: "BeHuman.ai brings personalized video content to life. By cloning the user’s voice and customizing video elements, it enhances engagement for outreach campaigns.",
            keyFeatures: [
                "Personalized video creation.",<br/>,
                "Ideal for onboarding and newsletters.",<br/>,
                "Voice cloning for consistent branding."
            ]
        },
        {
            id: 5,
            title: "Brandmark.io",
            description: "Brandmark.io is an AI-powered branding solution that simplifies logo creation and brand identity design, making it perfect for startups and agencies.",
            keyFeatures: [
                "Automated logo generation.",<br/>,
                "Customizable designs.",<br/>,
                "Instant branding tools."
            ]
        },
        {
            id: 6,
            title: "Jasper.ai",
            description: "Jasper.ai remains a top content-generation tool, helping marketers craft engaging blog posts, ad copy, and emails in minutes. Its templates and user-friendly interface make it essential for campaigns.",
            keyFeatures: [
                "AI-generated, tailored content.",<br/>,
                "Templates for diverse content needs.",<br/>,
                "Integration with marketing platforms."
            ]
        },
        {
            id: 7,
            title: "Canva AI",
            description: "Canva AI revolutionizes design with automated image and template generation. Marketers can create professional visuals without design expertise.",
            keyFeatures: [
                "AI-powered image creation.",<br/>,
                "Ready-to-use templates for social media.",<br/>,
                "Suggestions to save time and improve designs."
            ]
        },
        {
            id: 8,
            title: "Surfer SEO",
            description: "Surfer SEO optimizes content for search engines with AI-driven insights. It ensures content aligns with ranking factors, improving visibility.",
            keyFeatures: [
                "Real-time SEO scoring.",<br/>,
                "AI-based keyword suggestions.",<br/>,
                "Integration with popular CMS platforms."
            ]
        },
        {
            id: 9,
            title: "AdCreative.ai",
            description: "AdCreative.ai specializes in high-conversion ad design, helping marketers create effective visuals for platforms like Facebook and Google.",
            keyFeatures: [
                "AI-generated ad creatives.",<br/>,
                "Optimization for platform-specific performance.",<br/>,
                "Performance analytics for improvement."
            ]
        },
        {
            id: 10,
            title: "HubSpot AI",
            description: "HubSpot AI empowers marketing with predictive lead scoring, customer segmentation, and automated email generation. Its CRM integration makes data-driven marketing seamless.",
            keyFeatures: [
                "Predictive lead scoring.",<br/>,
                "AI-enhanced email campaigns.",<br/>,
                "Advanced customer segmentation."
            ]
        },
        {
            id: 11,
            title: "Conclusion",
            description: "AI tools for digital marketing in 2025 are reshaping the industry, offering solutions to save time, optimize strategies, and improve campaign outcomes. By embracing these tools, marketers can focus on creative and strategic aspects while letting AI handle repetitive tasks.\n\nWhich AI tool are you most excited to try? Share your thoughts in the comments!"
        }
            
        ];
        
        

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/aldigital.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    Top 10 AI Tools for Digital Marketing in 2025 </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    AI is transforming digital marketing in 2025, enabling businesses to enhance efficiency, personalize campaigns, and achieve remarkable results. From automating mundane tasks to optimizing complex strategies, these AI tools are indispensable for marketers aiming to stay ahead.
                    </p>
                    <iframe className="mx-auto mt-6 rounded-lg shadow-lg" width="350" height="215" src="https://www.youtube.com/embed/n8zKsFoo2FE?si=w8IYkMV5hQN0tt42"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  
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
                            <div className="text-gray-800">{section.keyFeatures}</div>

                            
                        </article>
                    ))}
                </section>
            </div>
            <Footer />
        </>
    );
};

export default BlogArticle;


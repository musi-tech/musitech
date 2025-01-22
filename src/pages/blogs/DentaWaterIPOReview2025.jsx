import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MusiBlog from "../../components/MusiBlog"

const BlogArticle = () => {
    const blogData = [
     
        {
            id: 1,
            title: "What Does Denta Water Do?",
            description: `Denta Water, established in 2016, specializes in water management solutions like designing, installing, and maintaining water-related projects. With water scarcity becoming a global concern, Denta Water's focus gives it a competitive edge.
    
            Core Business:
            About 95% of its revenue comes from water management, with the rest from road, railway, and operational services. Clearly, water management is the backbone of its business model.
    
            Why It Matters:
            Unlike many companies struggling to gain traction in this space, Denta Water stands out due to its expertise in rainwater harvesting and groundwater recharge, making it a trusted name in sustainable water solutions.`,
            explore: (
                <>
                    Learn More About Denta{" "}
                    <a
                        href="https://groww.in/blog/denta-water-and-infra-solutions-ipo-day-1"
                        className="text-green-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                </>
            ),
        },
        {
            id: 2,
            title: "Financial Overview: Strong Fundamentals",
            description: `Analyzing the company’s financial health reveals why Denta Water is worth considering:
    
            Revenue:
            ₹98 crore in the first two quarters of FY 2024. Annualized, that’s around ₹200 crore.
            FY 2024 revenue: ₹241 crore, showing consistent growth.
    
            Profitability:
            Debt-Free: This is rare and ensures profits aren’t eaten away by interest.
            Strong Reserves: ₹100 crore in reserves backs its stability.
    
            Valuation:
            With a P/E ratio of 45, Denta Water may seem slightly expensive compared to peers like Tech (38) and EMS (27). However, its small issue size justifies the valuation.`,
            explore: (
                <>
                    Learn More About Denta{" "}
                    <a
                        href="https://groww.in/blog/denta-water-and-infra-solutions-ipo-day-1"
                        className="text-green-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                </>
            ),
        },
        {
            id: 3,
            title: "Why the Sector is Promising",
            description: `The water management sector has limited competition, providing opportunities for niche players like Denta Water. With an order book worth ₹750 crore, the company is well-positioned to ride the wave of increasing demand for sustainable water solutions.`
        },
        {
            id: 4,
            title: "Grey Market Premium (GMP) Insights",
            description: `The GMP for Denta Water is around ₹150, indicating strong investor interest. While GMP hints at good listing gains, remember: fundamentals matter more than speculative premiums.`
        },
        {
            id: 5,
            title: "Key Strengths of Denta Water",
            description: `Here’s what makes Denta Water a standout IPO:
    
            Debt-Free: Ensures financial health and reduces risk.
            Strong Order Pipeline: ₹750 crore worth of projects secures future revenue.
            Sustainability Focus: Expertise in groundwater recharge and rainwater harvesting aligns with global trends.
            Small Issue Size: Increases chances of higher subscription and listing gains.`
        },
        {
            id: 6,
            title: "Potential Risks",
            description: `No investment is without risks. Keep these in mind:
    
            Competition: Local players might create challenges despite limited listed competitors.
            Scalability: Being a smaller company could limit its growth potential.
            Sector Dependency: Heavy reliance on water management may restrict diversification.`
        },
        {
            id: 7,
            title: "My Personal Take",
            description: `A few years ago, I invested in a renewable energy company with solid fundamentals but slow initial returns. Over time, as awareness grew, the stock performed exceptionally well. I see a similar potential in Denta Water, thanks to its strong fundamentals and alignment with global sustainability needs.`
        },
        {
            id: 8,
            title: "Should You Apply for Denta Water IPO?",
            description: `Listing Gains: If you’re looking for short-term profits, the high GMP and small issue size make this IPO a promising option. Monitor subscription levels closely.
    
            Long-Term Investment: For those with a long-term horizon, Denta Water’s debt-free status, strong order book, and sustainability focus make it a solid choice.`
        },
        {
            id: 9,
            title: "Final Thoughts",
            description: `Investing in an IPO involves balancing risk and reward. Denta Water stands out for its robust financials and promising future in a niche sector. Do your due diligence before making a decision.
    
            Don’t have a Demat account? Use the links below to open one and start your investment journey today.
    
            If you found this review helpful, leave a comment below. Your feedback motivates us to bring more such insights. Happy investing!`
        },
        {
            id: 10,
            title: "Key Details at a Glance",
            description: `Aspect Details
            Issue Open Date: January 22, 2025
            Issue Close Date: January 24, 2025
            GMP: ₹150
            Order Book: ₹750 crore
            Focus Area: Water Management`
        },
        {
            id: 4,
            title: "External Resources:",
            
            image: require("../../assets/images/local.jpeg"),
            explore: (
                <>
                    Learn More About SEO {" "}
                    <a
                        href="https://blog.hubspot.com/marketing/ai-seo"
                        className="text-green-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                    .
                    <br/>
                    AI Tools for Beginners{" "}
                    <a
                        href="https://blog.hubspot.com/marketing/ai-seo"
                        className="text-green-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                    .

                </>
                
            ),
        },
             
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/denta.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    Denta Water IPO Review 2025: Should You Invest or Skip?  </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    Discover a detailed review of the Denta Water IPO, opening for subscription from January 22 to January 24, 2025. Learn about its financials, key strengths, risks, and whether it's a good investment for listing gains or long-term returns.
                    </p>
               
                                        <iframe className="mx-auto mt-6 rounded-lg shadow-lg"  src="https://www.youtube.com/embed/ib6EPQFSvC4?si=KoyGlvfYPw6G_oKC"  width="350" height="215"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   
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
            <MusiBlog />
            <Footer />
        </>
    );
};

export default BlogArticle;


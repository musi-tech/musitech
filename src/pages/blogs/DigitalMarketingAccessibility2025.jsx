import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MusiBlog from "../../components/MusiBlog"

const BlogArticle = () => {
    const blogData = [
      
        {
            id: 1,
            title: "Why Digital Marketing Accessibility Matters",
            description: "Let’s be honest—accessibility used to be a nice-to-have. Today, it’s essential. Companies embracing accessible digital marketing don’t just create inclusive experiences; they’re also achieving measurable success.\n\nTake Coca-Cola, for instance. When they launched their app, accessibility wasn’t an afterthought—it was a priority from day one. According to Hannah Arner, Senior Manager of Digital Consumer Experience, the company saw a significant positive response from users because of this approach.",
            explore: (
                <>
                    Learn More About SEO{" "}
                    <a
                        href="https://www.musitech.in/blogs/top-ai-tools-for-digital-marketing-in-2025"
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
            title: "Success Stories: Coca-Cola’s Accessible Marketing Triumph",
            description: "Coca-Cola’s recent app launch demonstrates the power of integrating accessibility into development. They focused on making every element usable by everyone, which boosted user satisfaction and loyalty. It’s a clear win-win—serving a wider audience while growing your brand.",
            explore: (
                <>
                    Learn More About SEO{" "}
                    <a
                        href="https://www.musitech.in/blogs/top-ai-tools-for-digital-marketing-in-2025"
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
            title: "Building an Accessible Marketing Dream Team",
            description: "Who should lead the charge for accessible marketing? The truth is, it takes a team. From strategists to developers, here’s what an effective team looks like:\n\n    Marketing Strategists: Craft inclusive campaigns.\n    Creative Teams: Design visuals beyond traditional norms.\n    Developers: Code with accessibility standards in mind.\n    Content Writers: Create clear, descriptive text.\n    Accessibility Experts: Provide guidance and testing.\n\nBy collaborating, these roles ensure your marketing speaks to everyone."
        },
        {
            id: 4,
            title: "The Role of AI in Accessible Marketing",
            description: "Artificial intelligence is revolutionizing accessibility, but it’s not a silver bullet. AI tools like automated image descriptions, video transcriptions, and accessibility checks are helpful—but they require human oversight.\n\nAs Josh Loebner from VML puts it, “AI is an assistant, not a replacement.” Use it to streamline processes, but ensure human creativity remains central."
        },
        {
            id: 5,
            title: "Future Trends to Watch in Digital Accessibility",
            description: "Accessibility is going mainstream, and 2024 is just the beginning. For example, the Cannes Lions Festival will recognize excellence in accessibility through awards for image descriptions in 2025. This shift reflects growing awareness and opportunity in inclusive marketing."
        },
        {
            id: 6,
            title: "Your Action Plan for Accessible Marketing",
            description: "Here’s how to make your digital marketing accessibility-first:\n\n    Engage Leadership: Highlight the business case.\n    Start Early: Integrate accessibility in the planning stage.\n    Train Your Team: Equip everyone with knowledge.\n    Collaborate with Experts: Seek professional input.\n    Test with Real Users: Gain valuable insights.\n    Iterate and Improve: Use feedback to refine efforts.\n\nHannah Arner’s three P’s can guide you:\n\n    Process: Build accessibility into workflows.\n    Prioritize: Make it a non-negotiable goal.\n    Partners: Leverage external expertise when needed."
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
                        src={require('../../assets/images/acc.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    Digital Marketing Accessibility in 2025: 10 Powerful Ways to Transform Your Strategy    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    Did you know? People with disabilities shop online twice as much as others. Yet, most businesses still lag in making their digital marketing accessible. In 2025, it’s not just about inclusivity—it’s about better business. Let’s explore how you can transform your strategy by prioritizing accessibility.
                    </p>
                                        <iframe className="mx-auto mt-6 rounded-lg shadow-lg" src="https://www.youtube.com/embed/rszmHiFi94M?si=dVMwC94RCs8ClaoD"   width="350" height="215"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   
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


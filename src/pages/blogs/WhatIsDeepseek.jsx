import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MusiBlog from "../../components/MusiBlog"

const BlogArticle = () => {
    const blogData = [
        
            {
                "id": 1,
                "title": "What Did DeepSeek Do?",
                "description": "To understand the impact, let's first break down what DeepSeek achieved. Building AI models is expensive. Typically, companies spend about $100 million on hardware to train advanced AI systems. DeepSeek managed to do the same thing with just $5 million. That’s a 95% cost reduction.\n\nIf AI can run on fewer chips, demand for those chips drops. That’s why investors started selling chip stocks. It seemed like a logical move. If companies like Nvidia and Broadcom sell fewer chips, their profits could shrink.\n\nBut is the market looking at this the wrong way? Let’s take a step back and understand the bigger picture.",
                explore: (
                    <>
                        Learn More About DeepSeek{" "}
                        <a
                            href="https://www.deepseek.com/"
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
                "id": 2,
                "title": "A Lesson From History: The Jevons Paradox",
                "description": "In 1865, a British economist named William Jevons noticed something surprising about coal consumption. As technology made coal-burning more efficient, people didn’t use less coal. They used more.\n\nWhy? Because cheaper coal made it possible to power more factories, trains, and homes. The demand for coal skyrocketed instead of shrinking.\n\nThis same idea applies to AI chips today. Yes, DeepSeek’s innovation means AI can run on fewer chips. But this also makes AI more affordable. More companies and individuals will now have access to powerful AI. The demand for AI technology will likely explode, increasing the need for chips in the long run.",
                explore: (
                    <>
                        Learn More About DeepSeek{" "}
                        <a
                            href="https://www.deepseek.com/"
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
                "id": 3,
                "title": "AI Is About to Become Mainstream",
                "description": "Imagine a world where AI is no longer restricted to tech giants. Small businesses, schools, and startups can now afford AI tools. Artists, writers, and students can use AI without expensive hardware.\n\nThink about how smartphones became widely used. In the early 2000s, smartphones were expensive, and only a few people had them. As technology advanced and prices dropped, almost everyone got one. AI could follow the same path.\n\nIf AI becomes accessible to all, the demand for chips might rise instead of falling. That’s the Jevons Paradox in action."
            },
            {
                "id": 4,
                "title": "The Emotional Rollercoaster of Investors",
                "description": "For investors, this market crash was terrifying. Imagine waking up and seeing billions wiped from your portfolio. Some people sold their stocks in panic. Others held on, hoping for a rebound.\n\nI remember when a similar thing happened with Tesla a few years ago. News broke that battery production costs were dropping. Investors panicked, thinking Tesla would make less money. But in the long run, cheaper batteries meant more people could afford electric cars. Tesla’s stock price eventually skyrocketed.\n\nThe same thing could happen here. Right now, people see only the short-term effects. But in a year or two, AI technology will likely be everywhere, creating more demand for chips."
            },
            {
                "id": 5,
                "title": "The Future of AI and the Tech Industry",
                "description": "DeepSeek’s breakthrough is a game-changer. It marks a shift in the AI industry. Instead of needing massive computing power, companies can now develop AI with fewer resources.\n\nThis could lead to:\n\n- More startups entering the AI space\n- Faster AI adoption across different industries\n- Lower costs for AI-powered services\n\nWe may soon see AI-powered personal assistants, smarter medical tools, and better educational resources. Even small businesses could integrate AI into their services."
            },
            {
                "id": 6,
                "title": "What Should Investors Do Now?",
                "description": "If you’re an investor, don’t let panic dictate your decisions. Here are a few things to consider:\n\n- **Look Beyond the Immediate Crash** – The market often reacts strongly to big news, but long-term trends matter more.\n- **Understand the Bigger Picture** – AI is still in its early stages. A major breakthrough doesn’t mean chip demand will drop forever.\n- **Stay Informed** – Follow companies adapting to these changes. The tech world moves fast, and innovation creates new opportunities."
            },
            {
                "id": 7,
                "title": "Final Thoughts",
                "description": "The recent stock market drop shocked many people. But history has shown us that new technology doesn’t always destroy industries. It often reshapes them in ways we don’t expect.\n\nDeepSeek’s breakthrough may have caused short-term panic, but it could also spark an AI revolution. As AI becomes more affordable, the demand for technology could surge.\n\nWe are standing at the beginning of something big. The market may have crashed today, but the future of AI looks brighter than ever."
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
                        src={require('../../assets/images/seek.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    DeepSeek Just Crashed $1 Trillion Off the US Market   </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    The US stock market just took a major hit. Over $1 trillion vanished in a matter of hours. Big tech companies, especially chipmakers, saw their stock prices fall sharply. Nvidia dropped 177%. Broadcom also plunged 177%. ARM lost 10%. Investors are in shock.
                    <br/>

But why did this happen? What caused this sudden market crash?

The answer lies in a groundbreaking AI breakthrough by DeepSeek. This company has found a way to build powerful AI models using much less computing power. The implications are huge.
                    </p>
                  
                                        <iframe className="mx-auto mt-6 rounded-lg shadow-lg" src="https://www.youtube.com/embed/cSVuQ39iDx8?si=XkNt8D4V-1GzZ9dy"   width="350" height="215"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   
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


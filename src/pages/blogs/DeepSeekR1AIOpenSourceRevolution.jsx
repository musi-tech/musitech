import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MusiBlog from "../../components/MusiBlog"

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "A Transformative Journey",
            description: "I’ve always been drawn to AI, but years ago, accessing powerful tools felt impossible. The cost, the exclusivity—it was all overwhelming. Then, the open-source revolution began. DeepSeek R1 is its crown jewel, a model that not only competes with proprietary giants like OpenAI’s 01 but, in some areas, outperforms them.\n\nI remember my initial skepticism. Claims are one thing; results are another. So, I spent a week testing it rigorously. The benchmarks didn’t just meet expectations—they exceeded them. The thrill reminded me of my early coding days when I tried to push the limits of my tools on a simple laptop.",
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
            id: 2,
            title: "What Makes DeepSeek R1 Special?",
            description: "The brilliance of DeepSeek R1 lies in its open-source ethos. With its MIT license and openly shared weights, it’s designed for collaboration. This spirit reminded me of the hackathons I joined as a student. Back then, the power of shared ideas often transformed basic concepts into groundbreaking solutions.\n\nDeepSeek R1 does the same on a global scale. It isn’t just a tool—it’s an invitation. Students, indie developers, and industry leaders can now explore, adapt, and innovate without barriers. This accessibility will redefine how we think about AI, unlocking opportunities for communities everywhere.",
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
            id: 3,
            title: "Why DeepSeek R1 Thinks Like Us",
            description: "During testing, I was struck by how human-like the model feels. Take the “strawberry” test. The model didn’t just give an answer—it thought through the question, doubted, re-evaluated, and then delivered. It felt less like interacting with a machine and more like having a conversation with a thoughtful friend.\n\nAnother test—the classic “marble problem”—was a revelation. Watching DeepSeek R1 reason step by step felt like seeing curiosity in action. It wasn’t just accurate; it was engaging. That’s the magic of this model: it doesn’t just solve problems; it builds trust."
        },
        {
            id: 4,
            title: "The Open-Source AI Revolution",
            description: "DeepSeek R1 is more than a tool; it’s a movement. Like Linux reshaped the software landscape decades ago, this model has the potential to inspire a new wave of AI innovation. Its creators have shared their roadmap, benchmarks, and vision openly, encouraging the world to build on their work.\n\nThe impact is already visible. Developers report dramatic cost reductions, with API outputs priced at a fraction of proprietary options. Imagine the possibilities: schools integrating AI into curriculums, small businesses automating operations, and researchers pushing boundaries—all powered by an open-source foundation."
        },
        {
            id: 5,
            title: "A Future Worth Building",
            description: "As I finished testing DeepSeek R1, I felt inspired. This isn’t just a model—it’s a statement about what’s possible when innovation is democratized. The barriers to AI development are falling, replaced by an ecosystem of shared knowledge and collaboration.\n\nFor anyone passionate about technology, DeepSeek R1 is an opportunity. Whether you’re an experienced developer, a curious student, or someone who simply loves seeing innovation thrive, now is the time to dive in. Test it, adapt it, contribute to its evolution—and help shape the future of AI."
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
                        src={require('../../assets/images/deek.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    DeepSeek R1: Redefining AI with Open-Source Brilliance  </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    In the fast-paced world of artificial intelligence, innovations often come from behind the veils of tech giants. But DeepSeek R1 is changing the game. This open-source AI model represents more than just a technical leap; it’s a beacon of accessibility and collaboration for developers and creators everywhere.
                    </p>
                                        <iframe className="mx-auto mt-6 rounded-lg shadow-lg"  src="https://www.youtube.com/embed/_KRKqLaVYQU?si=Ps1G59aTOIk5ehys"  width="350" height="215"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   
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


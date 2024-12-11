import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        
        {
            id: 1,
            title: "What is SORA?",
            description: 
                "SORA is OpenAI’s AI-driven video creation tool, designed to generate videos based on text prompts. Whether it’s photorealistic landscapes or whimsical animations, SORA offers a wide range of possibilities for creators.\n\nIts user-friendly interface makes it easy to:\n\n- Explore prompts and videos made by others for ideas.\n- Save, remix, and edit videos to suit your needs.\n- Organize projects with folders for better workflow.",
        },
        {
            id: 2,
            title: "What Makes SORA Stand Out?",
            description: 
                "- Prompt-Based Video Creation: SORA transforms your words into visuals. This feature is powerful but also challenging—getting great results depends on crafting the perfect prompt.\n\n- Remix Options: You can modify existing videos to add elements like new backgrounds or adjust things like resolution and intensity with sliders.\n\n- Storyboard Mode: This mode allows users to string together multiple prompts to create a sequence, acting like a basic video editor.\n\n- Upload & Enhance: Users can upload still images and convert them into animated videos, adding motion and life to static visuals.",
        },
        {
            id: 3,
            title: "What SORA Does Well",
            description: 
                "- Creative Freedom: SORA lets users experiment with styles, colors, and concepts, enabling everything from dreamy animations to bold artistic renditions.\n\n- Impressive Simulations: Water and fire effects are surprisingly realistic, with believable ripples, waves, and flames.\n\n- Easy to Use: Even if you’re not tech-savvy, SORA’s intuitive interface makes advanced AI tools accessible to everyone.",
        },
        {
            id: 4,
            title: "Where SORA Falls Short",
            description: 
                "- Realism Isn’t Always Realistic:\n    - Movements and interactions between objects often don’t make sense. Characters may walk with odd leg movements, or objects might vanish mid-scene.\n    - Photorealistic videos can feel awkward due to erratic motion or jarring transitions.\n\n- High-Resolution Hurdles:\n    - Generating videos in higher resolutions like 1080p takes much longer, raising concerns about how well the platform can handle a growing user base.\n\n- Limits with Physical Logic:\n    - Animations sometimes ignore basic physics. For example, items may float unexpectedly, or objects may collide in unrealistic ways.",
        },
        {
            id: 5,
            title: "How SORA Could Be Used",
            description: 
                "- For Creators: Quickly generate animations or concept visuals without the need for expensive software.\n- For Education and Marketing: Use SORA to create engaging visuals for lessons or campaigns.\n- For Fun: Turn iconic images or memes into entertaining animated content.",
        },
        {
            id: 6,
            title: "Ethical Concerns",
            description: 
                "SORA’s ability to generate lifelike videos also comes with risks. It could be misused to create fake or misleading content, like fabricated security footage. As this technology becomes more accessible, clear guidelines and safeguards will be essential to prevent misuse.",
        },
        {
            id: 7,
            title: "Final Thoughts",
            description: 
                "SORA is a fascinating step forward for AI in the creative space. It empowers creators with tools that were once out of reach, opening the door to endless possibilities. However, its current limitations remind us that AI, while impressive, is not yet perfect.\n\nWhether you see SORA as a groundbreaking tool or a potential disruptor, one thing is clear: it’s going to change how we think about video creation. The real question is how we’ll choose to use this newfound power.",
        }
        
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/sora.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    SORA AI Video Generator: A Revolutionary Tool with Some Quirks                  </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    In a time when AI is reshaping how we create, OpenAI’s latest innovation, SORA, has emerged as an intriguing yet divisive tool. With the ability to turn simple text prompts into videos, SORA has caught the attention of tech enthusiasts, content creators, and skeptics alike. Let’s dive into what this tool offers, what it gets right, and where it falls short.
 
                    </p>
                   
                    
                    <iframe className="mx-auto mt-6 rounded-lg shadow-lg"
 width="350" height="215" src="https://www.youtube.com/embed/360ZqfabuPQ?si=Z7COYVkQDebsKqMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    
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

                            <p className="mt-4">
                                Learn more about {" "}
                                <a
                                    href="https://openai.com/sora/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-500 hover:underline"
                                >
                                    SORA
                                </a>{" "}
                            </p>
                        </article>
                    ))}
                </section>
            </div>
            <Footer />
        </>
    );
};

export default BlogArticle;


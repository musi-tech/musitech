import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
            {
                id: 1,
                title: "The Essence of Creativity",
                description: "Art has long been considered a profound expression of human creativity, emotion, and experience. From the detailed brushstrokes of a Renaissance painting to the bold abstraction of modern art, human artists pour their souls into their work. Every piece tells a story, reflects personal struggles, or comments on societal issues—elements that resonate deeply with the viewer.\n\nAI-generated art, on the other hand, is the product of algorithms. Using machine learning models, AI can analyze vast datasets of artistic styles and mimic them, creating stunning visuals in minutes. While undeniably impressive, the creative process of AI lacks personal intent and emotional depth. Can art without an artist’s soul truly be considered art?",
            },
            {
                id: 2,
                title: "Efficiency vs. Authenticity",
                description: "One of AI’s greatest strengths is its efficiency. An AI model like DALL-E or MidJourney can generate art in seconds, offering limitless possibilities for businesses, designers, and creators seeking quick solutions. This accessibility democratizes art, making it available to those who might not have the skills or time to create traditional artwork.\n\nHowever, human-made art offers authenticity. Each stroke of a brush or touch of a chisel carries an artist’s unique fingerprint. A human artist’s work is a labor of love, requiring time, effort, and often years of mastery. This dedication lends human art a timeless quality that cannot be easily replicated by machines.",
            },
            {
                id: 3,
                title: "Inspiration vs. Innovation",
                description: "AI is a tool that learns from existing works, often leading to creations that blend or mimic established styles. While this can result in breathtaking pieces, it rarely pushes boundaries in the way human artists do. Human creativity thrives on breaking rules, exploring uncharted territories, and embracing imperfections—qualities that define innovation in art.\n\nThink of Van Gogh’s Starry Night or Picasso’s Cubism. These were not products of replication but radical departures from tradition, born of human courage and imagination. AI art, though mesmerizing, may struggle to achieve the same groundbreaking status.",
            },
            {
                id: 4,
                title: "Emotional Connection",
                description: "When viewing a piece of human-made art, there is often a sense of connection to the artist. You can feel their joy, pain, or curiosity emanating from the canvas. This emotional depth is a cornerstone of art’s impact.\n\nAI-generated art, while visually stunning, often lacks this emotional resonance. It can mimic style and form but cannot imbue the work with a personal narrative or emotional authenticity. This absence may leave some viewers feeling detached, despite the art’s aesthetic appeal.",
            },
            {
                id: 5,
                title: "The Future of Art",
                description: "The debate between AI art and human-made art isn’t about choosing sides but understanding their unique roles. AI can be a powerful tool for artists, enhancing their creativity and providing new mediums for expression. Meanwhile, human-made art continues to remind us of the depth of human experience and the irreplaceable value of personal touch.\n\nUltimately, art—whether created by humans or machines—is a reflection of its time. As technology advances, the coexistence of AI and human art will shape a new era of creativity, pushing boundaries and expanding our understanding of what art can be.\n\nSo, what do you think? Can AI ever rival the depth and authenticity of human-made art, or is it simply a complement to our creativity? Share your thoughts and join the conversation on the future of art.",
            },
                    
        
        
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/art.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    What Do You Think About AI Art vs. Human-Made Art?                </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    In a world increasingly influenced by technology, the age-old question of art—its purpose, its creation, and its value—takes on a fascinating new dimension. The rise of Artificial Intelligence (AI) has introduced a new player to the creative stage: AI-generated art. But how does it compare to the centuries-old tradition of human-made art? Let’s explore this intriguing juxtaposition.

 
                    </p>
                   
                    <iframe className="mx-auto mt-6 rounded-lg shadow-lg" width="350" height="215" src="https://www.youtube.com/embed/EuKw259dhnw?si=Rhl1rayo7eEEGy5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   
                    
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


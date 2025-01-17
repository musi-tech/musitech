import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "From Small-Town Aspirations to IIT Bombay",
            description: "Abhay Ji was born and raised in Jhajjar, a small town in Haryana. Until his 12th grade, he had no idea about the prestigious IITs. It was only through inspiring mentors that he decided to pursue this ambitious goal. With determination, he cleared the rigorous entrance exam and secured a seat in the Aerospace Engineering program at IIT Bombay.\n\nMoving from a small town to Mumbai was a turning point for Abhay Ji. It wasn’t just an academic shift but also an opportunity to broaden his horizons. Studying at a top institution became his gateway to a world filled with dreams and possibilities."
        },
        {
            id: 2,
            title: "The Turning Point: A Passion Beyond Engineering",
            description: "Life at IIT Bombay introduced Abhay Ji to diverse academic and extracurricular activities. Initially, he faced challenges like language barriers and adapting to the competitive environment. However, he soon found solace in creative pursuits like poetry, sketching, and humanities courses. These activities became a medium for self-expression and inner exploration.\n\nHis newfound love for design inspired him to pursue a master’s degree. Following this, he worked briefly as a physics teacher and contributed to creative campaigns, continually exploring his artistic side."
        },
        {
            id: 3,
            title: "Wanderlust and the Seed of Vairagya",
            description: "After his studies, Abhay Ji embraced travel photography, a dream career for many. His journeys took him across India, from the serene landscapes of Sikkim to the lush greenery of Kerala. However, even as he captured the beauty of the world, a deeper sense of fulfillment eluded him. Despite professional success, an inner void persisted, urging him to search for something beyond material accomplishments."
        },
        {
            id: 4,
            title: "Battling Inner Demons",
            description: "While working in Canada, Abhay Ji encountered severe challenges. Struggling with cultural differences, isolation, and personal issues, he spiraled into depression. It was during these dark times that he stumbled upon meditation and the teachings of Jiddu Krishnamurti, which profoundly impacted his life. These spiritual insights sparked a journey inward, leading to his awakening."
        },
        {
            id: 5,
            title: "The Leap into Vairagya",
            description: "Abhay Ji’s decision to embrace vairagya wasn’t a sudden shift but a gradual realization. He understood that external success and achievements could not satisfy his quest for inner peace. Leaving behind his career and conventional aspirations, he devoted himself to spiritual growth.\n\nToday, as a vairagi, Abhay Ji exemplifies the union of intellectual rigor and spiritual wisdom. His story is a beacon of hope for those seeking meaning in life beyond societal expectations."
        },
        {
            id: 6,
            title: "Inspiration for a Modern Audience",
            description: "Abhay Ji’s journey challenges modern individuals to reflect on their priorities. His life underscores the idea that fulfillment often lies in introspection rather than outward achievements. At Mahakumbh 2025, his presence inspires thousands to explore their spiritual paths and embrace the transformative power of self-discovery."
        },
        {
            id: 7,
            title: "Key Takeaways from Abhay Ji’s Journey",
            description: "Resilience: Adapting to challenges and growing through them.\nSelf-Expression: Discovering oneself through creative outlets.\nInner Growth: Recognizing that true peace lies within, not in material success.\nSpiritual Awakening: Finding purpose through meditation and introspection.\n\nAs Mahakumbh 2025 continues to inspire millions, stories like Abhay Ji’s remind us that the journey inward is often the most rewarding path."
        },
        {
            id: 8,
            title: "External Resources:",
            
            image: require("../../assets/images/local.jpeg"),
            explore: (
                <>
                    Learn more about Jiddu Krishnamurti’s teachings {" "}
                    <a
                        href="https://timesofindia.indiatimes.com/etimes/trending/iitian-baba-at-mahakumbh-he-lived-in-canada-and-earned-rs-36-lakh-find-out-why-he-adopted-asceticism/articleshow/117295482.cms"
                        className="text-green-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                    .
                    <br/>
                    Explore the Mahakumbh 2025 schedule {" "}
                    <a
                        href="https://timesofindia.indiatimes.com/etimes/trending/iitian-baba-at-mahakumbh-he-lived-in-canada-and-earned-rs-36-lakh-find-out-why-he-adopted-asceticism/articleshow/117295482.cms"
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
                        src={require('../../assets/images/iit.jpeg')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    Mahakumbh 2025: The Remarkable Journey of an IIT Bombay Engineer to Spiritual Vairagi       </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    The Mahakumbh of 2025 is a kaleidoscope of spiritual culture, bringing forth countless stories that inspire and transform. Among these is the extraordinary journey of Abhay Ji, a former aerospace engineer from IIT Bombay who chose the path of vairagya (renunciation). His transformation from an academic achiever to a spiritual seeker has captivated hearts and minds alike.
                    </p>
                                        <iframe className="mx-auto mt-6 rounded-lg shadow-lg"  src="https://www.youtube.com/embed/h4voPhtTep4?si=1_AJiWCmWC5d4MU6"  width="350" height="215"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   
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


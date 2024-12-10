import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "What Is Quantum Computing?",
            description:
                "Before diving into what makes Willow special, let’s take a moment to understand quantum computing. Unlike classical computers, which process data as 0s and 1s (bits), quantum computers use qubits. Qubits leverage quantum mechanics principles like superposition (being in multiple states at once) and entanglement (where qubits are interconnected). This allows quantum computers to perform multiple calculations simultaneously, making them incredibly powerful for solving specific, highly complex problems that classical computers would need years—or even millennia—to crack.",
            
        },
        {
            id: 2,
            title: "The Road to Willow",
            description:
                "Google has been a leader in quantum computing for years, building on each success. They began in 2017 with their Foxtail chip, followed by Bristlecone in 2018. In 2019, their Sycamore chip achieved a historic milestone called Quantum Supremacy, solving a problem in 200 seconds that would have taken the world’s fastest supercomputer 10,000 years.\n\nWhile Sycamore was groundbreaking, it faced limitations, especially with quantum coherence time—how long qubits remain stable before noise disrupts them. Sycamore's coherence time maxed out at 20 microseconds. This is where Willow comes in, addressing these issues and setting a new benchmark for quantum technology.",
            explore: (
                <>
                    Dive deeper into how Google has built on its success and the critical role that quantum coherence plays in future quantum systems.
                </>
            )
        },
        {
            id: 3,
            title: "Why Willow Stands Out",
            description:
                "Willow brings revolutionary upgrades, building on years of innovation. Here's what makes it a game-changer:\n\n1. Longer Quantum Coherence Time\n\nWillow’s qubits remain stable for 100 microseconds, a fivefold improvement over Sycamore. This means it can handle more complex calculations with higher precision.\n\n2. Smarter Error Correction\n\nQuantum systems are notoriously sensitive to errors from noise. Willow incorporates advanced quantum error correction, surpassing a critical threshold scientists have pursued since the 1990s. This breakthrough ensures calculations are more reliable.\n\n3. Reconfigurable Qubits\n\nWillow’s qubits are tunable, meaning researchers can adjust and fix qubits that aren't performing well. This adaptability ensures top-notch performance across the entire chip.\n\n4. More Durable Logical Qubits\n\nLogical qubits, formed by combining multiple physical qubits, last longer than the individual qubits they’re made from. As Willow scales up to include more qubits, its overall accuracy actually improves—a huge step forward for quantum technology.\n\n5. Astounding Computational Power\n\nIn a test called random circuit sampling, Willow completed a task in under five minutes that would take the fastest classical supercomputer 10⁺²⁵ years—a timespan so long it’s beyond comprehension.",
            explore: (
                <>
                    Delve deeper into the unique characteristics of Willow, and see how these advancements could redefine the future of quantum computing.
                </>
            )
        },
        {
            id: 4,
            title: "How Google Built Willow",
            description:
                "A big reason for Willow’s success is Google’s state-of-the-art quantum chip fabrication facility in Santa Barbara. This cutting-edge lab enables Google to design, test, and build high-quality chips faster than ever, accelerating innovation and refining the technology with each iteration.",
            explore: (
                <>
                    Learn more about Google's state-of-the-art fabrication facility and how it enables rapid progress in quantum chip development.
                </>
            )
        },
        {
            id: 5,
            title: "What Can Willow Do?",
            description:
                "Quantum computing is still in its early days, but Willow’s advancements open the door to transformative possibilities, including:\n\n- Drug Discovery: Simulating molecules to develop new medicines.\n- Clean Energy: Designing better batteries and exploring nuclear fusion.\n- AI Advancements: Boosting machine learning capabilities.\n- Secure Data: Creating quantum-proof encryption methods.",
            explore: (
                <>
                    Explore the many potential applications of Willow and see how quantum computing will revolutionize industries and solve complex global challenges.
                </>
            )
        },
        {
            id: 6,
            title: "Why Quantum Computing Matters",
            description:
                "Quantum computing is evolving at a pace that far outstrips classical computers. Willow’s performance highlights the exponential growth in quantum power, a phenomenon known as Neven’s Law. This means quantum computers like Willow are racing ahead faster than anyone imagined.",
            explore: (
                <>
                    Learn why quantum computing matters more than ever and how Willow is at the forefront of this revolution.
                </>
            )
        },
        {
            id: 7,
            title: "Challenges Still Ahead",
            description:
                "While Willow is a massive achievement, quantum computing isn’t without hurdles. Some key challenges include:\n\n- Scaling Up: Building larger quantum systems while maintaining stability.\n- Noise Reduction: Protecting qubits from environmental interference.\n- Practical Applications: Translating breakthroughs into real-world benefits.",
            explore: (
                <>
                    Understand the ongoing challenges in quantum computing and how the industry is working towards overcoming these obstacles.
                </>
            )
        },
        {
            id: 8,
            title: "Why Willow Matters",
            description:
                "Willow isn’t just about raw power. Its improvements in coherence time and error correction bring us closer to a future where quantum computers can tackle problems beyond our current abilities—like simulating complex molecules or optimizing supply chains across the globe.\n\nIt’s a glimpse into a world where quantum technology transforms industries, solves the unsolvable, and drives innovation like never before.",
            explore: (
                <>
                    Read more on the significance of Willow and how it paves the way for quantum breakthroughs that could revolutionize industries.
                </>
            )
        },
        {
            id: 9,
            title: "The Road Ahead",
            description:
                "Google’s ultimate goal is to build a quantum computer with 1,000 logical qubits—a feat requiring 1 million physical qubits. Willow is a critical step in that journey, showing what’s possible and setting the stage for the next big breakthroughs.\n\nQuantum computing isn’t just about chips and numbers; it’s about pushing humanity forward. With Willow, Google is taking us closer to a future where quantum computers revolutionize how we think, work, and solve the toughest problems facing our world. Stay tuned—this is just the beginning.",
            explore: (
                <>
                    Learn about Google's ambitious vision for the future of quantum computing and how Willow represents a key milestone in that vision.
                </>
            )
        },
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/chip1.jpg')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    Meet Willow: Google's Next Big Leap in Quantum Computing                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    Quantum computing is reshaping how we solve complex problems, opening doors to breakthroughs in science, technology, and everyday life. In 2024, Google Quantum AI introduced Willow, their latest cutting-edge quantum chip. Willow represents a giant leap forward, tackling challenges that even the most powerful classical computers can’t handle. It's a clear sign of Google's determination to push the limits of science and computation.
 
                    </p>
                   
                    <iframe className="mx-auto mt-6 rounded-lg shadow-lg"
                            width="350" height="215" src="https://www.youtube.com/embed/W7ppd_RY-UE?si=tR6qqMlOJJ9Z9mn7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    
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


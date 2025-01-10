import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "What Is Nvidia DIGITS?",
            description: "DIGITS is Nvidia’s latest innovation in artificial intelligence and high-performance computing. This compact AI supercomputer makes previously inaccessible supercomputing power available to developers, researchers, and even students. Whether it’s training complex AI models, running simulations, or analyzing large datasets, DIGITS delivers unparalleled performance in a personal device."
        },
        {
            id: 2,
            title: "The Heart of DIGITS: The GB10 Grace Blackwell Chip",
            description: "At the core of DIGITS is Nvidia’s revolutionary GB10 Grace Blackwell chip. This chip merges a high-performance GPU with a 20-core CPU, enabling DIGITS to process data at unprecedented speeds.\nKey Features of the GB10 Grace Blackwell Chip:\n\n    Massive Power: Handles 200 billion parameters for large AI models.\n    Expandable: Connect two DIGITS devices to tackle 45 billion parameters collaboratively.\n    Energy Efficiency: Operates on standard household power, consuming less energy than traditional supercomputers.\n\nThis chip makes DIGITS a compact powerhouse, capable of delivering supercomputer-level performance at a fraction of the size and cost."
        },
        {
            id: 3,
            title: "Specifications and Features",
            description: "DIGITS comes loaded with features that set it apart:\n\n    Memory:\n    Equipped with 128 GB of memory, DIGITS can manage large datasets and computations seamlessly, eliminating memory bottlenecks.\n\n    Storage:\n    With up to 4 TB of storage, DIGITS ensures ample space for datasets, models, and projects.\n\n    Connectivity:\n    Enables seamless linking of devices for amplified computational power.\n\n    Power Efficiency:\n    Runs on a standard power outlet, making it practical and energy-efficient for personal use."
        },
        {
            id: 4,
            title: "Who Can Benefit from DIGITS?",
            description: "Nvidia designed DIGITS to democratize AI supercomputing, making it accessible to a broad audience:\n\n    Developers: Speeds up workflows and enables experimentation with complex AI models.\n    Researchers: Facilitates advanced simulations and data analysis in fields like healthcare and robotics.\n    Students: Offers a hands-on experience with tools used by industry leaders.\n    Small Businesses: Provides cost-effective AI solutions without reliance on cloud computing.\n\nDIGITS is versatile, bridging the gap between enterprise-level computing and personal accessibility."
        },
        {
            id: 5,
            title: "What Makes DIGITS Unique?",
            description: "DIGITS stands out with its innovative design and value proposition:\n\n    Compact Size: Fits on your desk, unlike traditional room-sized supercomputers.\n    Ease of Use: Intuitive setup, catering to users of all technical levels.\n    Affordability: At $3,000, DIGITS is an accessible entry point to supercomputing.\n    Sustainability: Energy-efficient operation makes it an eco-friendly choice."
        },
        {
            id: 6,
            title: "Applications of DIGITS",
            description: "DIGITS unlocks endless possibilities:\n\n    AI Model Training: Ideal for applications like natural language processing and autonomous systems.\n    Data Analysis: Handles massive datasets efficiently.\n    Simulations: Powers research in physics, biology, and engineering.\n    Education: Enhances learning with hands-on AI experiences.\n    Gaming: Doubles as a high-performance gaming system.\n\nDIGITS has the potential to transform industries, from medicine to space exploration."
        },
        {
            id: 7,
            title: "Investment in Innovation",
            description: "At $3,000, DIGITS represents a significant but worthwhile investment. Its affordability compared to traditional supercomputers makes it an attractive option for businesses, researchers, and enthusiasts. Over time, the savings from reduced reliance on cloud computing make it a cost-effective solution."
        },
        {
            id: 8,
            title: "A New Era of Computing",
            description: "With DIGITS, Nvidia is leading the charge into a future where personal supercomputers are no longer a dream. Compact, efficient, and powerful, DIGITS puts unprecedented computing power at your fingertips.\n\nWhether you’re a developer, researcher, or student, DIGITS offers tools to innovate like never before.\n\nWould you invest in this revolutionary AI supercomputer? Let us know your thoughts!"
        }
             
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/digi.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    Nvidia DIGITS: The Personal AI Supercomputer Redefining Computing         </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    Nvidia has unveiled a groundbreaking innovation that could revolutionize the way we think about computing—DIGITS, the world’s first personal AI supercomputer. Imagine having the power of the world’s most advanced supercomputers in a compact device that fits on your desk. This is the future of AI computing, brought to life by Nvidia. Let’s explore how DIGITS is set to change everything.
                    </p>
                                        <iframe className="mx-auto mt-6 rounded-lg shadow-lg"  src="https://www.youtube.com/embed/kZRMshaNrSA?si=xn3gTsh0UyRAnqBK"  width="350" height="215"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   
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


import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "Artificial Intelligence (AI) & Machine Learning (ML)",
            description:
                "Artificial Intelligence and Machine Learning are transforming industries from healthcare to customer service. Expertise in Python, computer vision, and Natural Language Processing (NLP) can land you high-paying roles. AI specialists help businesses predict trends, automate workflows, and optimize operations.",
            salary: "₹6–75 LPA+",
        },
        {
            id: 2,
            title: "Data Analytics",
            description:
                "Data Analytics is vital for uncovering insights from complex datasets to improve customer experience and streamline operations. Master tools like Python, R, Power BI, and Tableau to excel in this in-demand field and achieve financial success.",
            salary: "₹5–50 LPA",
        },
        {
            id: 3,
            title: "Cybersecurity",
            description:
                "Cybersecurity plays a crucial role in protecting digital assets from sophisticated cyberattacks. Learn network security, penetration testing, and application security to thrive in this high-stakes domain while earning a competitive salary.",
            salary: "₹5 LPA–₹1.2 Cr+",
        },
        {
            id: 4,
            title: "Blockchain Development",
            description:
                "Blockchain extends far beyond cryptocurrencies, revolutionizing supply chains, fintech, and public governance. Proficiency in smart contracts (Solidity) and Web3.js opens up exciting career opportunities in this evolving field.",
            salary: "₹6–80 LPA+",
        },
        {
            id: 5,
            title: "Product Management",
            description:
                "Product Management involves balancing customer needs with business strategies to ensure successful product launches. This role requires technical expertise and strategic acumen, leading to lucrative rewards.",
            salary: "₹8 LPA–₹1 Cr+",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                    <img
                        src={require('../../assets/images/tech.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                        Unlock Hidden Tech Skills in 2025: Your Path to High-Paying Jobs!
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                        Discover cutting-edge, in-demand skills to land lucrative roles in 2025. From AI to product management, this guide empowers you with the knowledge to stay ahead.
                    </p>
                   
                    <iframe 
                    className="mx-auto mt-6 rounded-lg shadow-lg"
                    width="350" 
                    height="215" 
                    src="https://www.youtube.com/embed/Z0fZ_GIT7vo?si=fm7lzAwOivtu6DNU" 
                    title="In-Demand Tech Skills for 2024" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>

                </header>
                <nav className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Table of Contents</h2>
                    <ul className="list-disc list-inside text-green-600">
                        {blogData.map((item) => (
                            <li key={item.id}>
                                <a href={`#skill-${item.id}`} className="hover:underline">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <section>
                    {blogData.map((skill) => (
                        <article
                            id={`skill-${skill.id}`}
                            key={skill.id}
                            className="mb-8 p-4 bg-white shadow-md rounded-md border border-gray-200"
                        >
                            <h2 className="text-2xl font-semibold text-green-600 mb-2">
                                {skill.title}
                            </h2>
                            <p className="text-gray-700 mb-2">{skill.description}</p>
                            <p className="text-lg font-bold text-green-600">
                                Salary: {skill.salary}
                            </p>
                            <p className="mt-4">
                                Learn more about these skills on{" "}
                                <a
                                    href="https://www.udemy.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-500 hover:underline"
                                >
                                    Udemy
                                </a>{" "}
                                or explore our{" "}
                                <a
                                    href="https://www.geeksforgeeks.org/"
                                    className="text-green-500 hover:underline"
                                >
                                    Resources page
                                </a>{" "}
                                for more insights.
                            </p>
                            <p>
                                Watch our recommended video:{" "}
                                <a
                                    href="https://youtu.be/Z0fZ_GIT7vo?si=_mreknm_ThtzUQQP"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-500 hover:underline"
                                >
                                    In-Demand Tech Skills for 2025
                                </a>.
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

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "What Is Agentic AI?",
            description: "Agentic AI refers to AI systems designed to act as autonomous agents. Unlike traditional AI, which performs single tasks based on instructions, Agentic AI can:\n\nPlan projects from start to finish.\n\nMake decisions independently.\n\nExecute tasks with a clear understanding of their context.\n\nFor example, while a chatbot answers specific queries, an Agentic AI acts like a digital employee. It handles tasks holistically, ensuring they align with overarching goals. This paradigm shift elevates AI from a tool to a collaborator."
        },
        {
            id: 2,
            title: "The Rise of Agentic AI",
            description: "The concept of Agentic AI emerged from the need for AI tools that go beyond basic automation. In 2023, a team developed 'Autocode Pro,' a pioneering Agentic AI system capable of:\n\nUnderstanding Objectives: It analyzed tasks comprehensively.\n\nCreating Structures: It designed databases and file systems.\n\nMaintaining Consistency: It ensured uniformity across workflows.\n\nThis approach enabled AI to handle complex projects seamlessly, highlighting the potential of Agentic AI to revolutionize industries."
        },
        {
            id: 3,
            title: "How Agentic AI Transforms Work",
            description: "1. Workflow Orchestration\n\nAgentic AI can manage interconnected tasks, such as:\n\nBooking travel arrangements.\n\nCoordinating meetings.\n\nBuilding software applications.\n\nFor instance, imagine organizing a corporate event. An Agentic AI could:\n\nBook the venue.\n\nSend invitations.\n\nManage RSVPs.\n\nOversee the budget and schedule.\n\n2. Evolving IT Roles\n\nAgentic AI will redefine IT departments, transforming them into HR-like units for AI agents. Instead of managing systems, professionals will oversee these intelligent agents, ensuring they function efficiently.\n\n3. Real-World Applications\n\nAgentic AI has the potential to disrupt multiple sectors:\n\nSoftware Development: Automating coding, testing, and deployment.\n\nBusiness Operations: Streamlining supply chains, marketing, and customer support.\n\nHealthcare: Assisting in diagnosis, managing records, and coordinating care.\n\nEducation: Personalizing learning plans and monitoring student progress.\n\nPersonal Assistance: Managing schedules, finances, and travel."
        },
        {
            id: 4,
            title: "Challenges of Agentic AI",
            description: "Despite its promise, Agentic AI poses challenges, including:\n\nJob Displacement: Automation may lead to workforce reskilling needs.\n\nAccountability: Determining responsibility for AI-driven mistakes.\n\nBias and Fairness: Ensuring unbiased decision-making.\n\nPrivacy Concerns: Safeguarding data handled by AI agents."
        },
        {
            id: 5,
            title: "Preparing for the Future",
            description: "To harness the full potential of Agentic AI, organizations must:\n\nInvest in ethical AI development.\n\nEstablish accountability frameworks.\n\nTrain employees for collaborative AI environments."
        },
        {
            id: 6,
            title: "Conclusion",
            description: "Agentic AI represents a transformative leap in technology, enabling machines to act as intelligent collaborators. By orchestrating tasks, making decisions, and managing workflows, it has the potential to redefine industries and improve productivity. As we navigate this exciting frontier, addressing ethical and practical challenges will be crucial to ensuring its responsible and effective integration into our lives."
        } 
        
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/aiage.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    Agentic AI: Redefining Work with Intelligent Machines             </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    Artificial Intelligence (AI) has already reshaped our world, from powering voice assistants to enhancing recommendation systems. Now, a groundbreaking innovation, "Agentic AI," is taking center stage. It represents a shift from task-based automation to intelligent agents capable of managing entire workflows autonomously. This article explores what Agentic AI means, how it works, and its transformative potential across industries.
                    </p>
                   
                    <iframe className="mx-auto mt-6 rounded-lg shadow-lg" width="350" height="215" src="https://www.youtube.com/embed/sMVWajWI4_Y?si=BmU4rea7x6xkFWu2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 
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


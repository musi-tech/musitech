import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "From Humble Beginnings to Economic Powerhouse",
            description: "In 1965, Singapore faced an uncertain future. Having just gained independence from Malaysia, the nation grappled with high unemployment, an economy reliant on regional trade, and the looming British military withdrawal, which threatened to worsen the job crisis."
        },
        {
            id: 2,
            title: "Learning from the Best: Attracting Multinational Companies",
            description: "Lee Kuan Yew understood that Singapore needed a robust economy to survive. His strategy to attract multinational companies (MNCs) included:\n\n" +
                "1. Investing in Public Services: Lee prioritized creating a clean, safe, and well-maintained infrastructure. Investments in public transportation, education, and healthcare projected a business-friendly image.\n\n" +
                "2. Offering Incentives: Singapore developed industrial estates and provided tax breaks to encourage MNCs to establish their operations on the island.\n\n" +
                "3. Focusing on Workforce Skills: Recognizing the need for a skilled workforce, Lee overhauled the education system and sent talented students abroad to gain expertise in fields vital to the economy."
        },
        {
            id: 3,
            title: "Building a Culture of Ownership and Meritocracy",
            description: "Beyond economic policies, Lee’s vision emphasized creating a culture of responsibility and fairness. Key initiatives included:\n\n" +
                "Promoting Homeownership: Through the Homeownership Scheme, citizens could use provident fund savings to purchase homes, fostering pride and a sense of ownership.\n\n" +
                "Meritocratic Principles: Lee revamped the civil service by offering competitive salaries to attract top talent, ensuring rewards were based on merit rather than privilege."
        },
        {
            id: 4,
            title: "Addressing Union Challenges",
            description: "Labor unions, influenced by communist ideologies, posed a potential obstacle to Singapore’s growth. Lee tackled this by:\n\n" +
                "1. Encouraging Fair Practices: Workers received fair wages and benefits while unions were urged to act responsibly to safeguard economic stability.\n\n" +
                "2. Reforming Union Decisions: Measures were implemented to ensure democratic voting on strikes, preventing disruptive unilateral actions by union leaders."
        },
        {
            id: 5,
            title: "Fighting Corruption with Clean Governance",
            description: "Lee recognized that corruption could derail progress. His government paid competitive salaries to public officials, removing the temptation for bribery and fostering trust in governance."
        },
        {
            id: 6,
            title: "Creating National Unity",
            description: "Singapore’s diverse population of Chinese, Malays, and Indians required a unifying strategy. Lee introduced English as the common language in schools to bridge communication gaps and reduce ethnic tensions."
        },
        {
            id: 7,
            title: "Making Unpopular but Necessary Decisions",
            description: "While Lee’s leadership was often criticized for strict media control and legal actions against dissent, he defended these measures as essential for maintaining stability and preventing misinformation."
        },
        {
            id: 8,
            title: "Key Lessons from Singapore’s Success",
            description: "The values driving Singapore’s transformation remain an inspiration for developing nations:\n\n" +
                "Personal Responsibility: Citizens were encouraged to take charge of their lives and contribute to national progress.\n\n" +
                "Meritocracy: Opportunities and rewards were based on talent and hard work, not connections.\n\n" +
                "Integrity: Corruption was eliminated through transparent and fair governance.\n\n" +
                "Ownership: Homeownership instilled pride and responsibility among citizens."
        },
        {
            id: 9,
            title: "Embracing Technology in Content Creation",
            description: "This video’s captivating storytelling was enhanced using AI and advanced processors, showcasing the seamless integration of real-world footage with computer-generated environments. Such innovations reflect Singapore’s forward-thinking ethos and commitment to staying ahead in a rapidly evolving world.\n\n" +
                "Singapore’s transformation underscores the power of visionary leadership, strategic decisions, and unwavering dedication to long-term goals. Its story serves as a beacon for countries aiming to achieve prosperity and stability."
        }



    ];



    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                    <img
                        src={require('../../assets/images/sing.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                        How Singapore Became a Developed Country: A Story of Tough Decisions and Unwavering Leadership           </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                        Singapore's journey from a small, resource-poor island to a thriving economic powerhouse is one of determination, strategic planning, and bold leadership. This article explores the pivotal decisions and values that defined its transformation, spearheaded by Lee Kuan Yew, Singapore’s Prime Minister for over three decades.

                    </p>

                    <iframe className="mx-auto mt-6 rounded-lg shadow-lg" width="350" height="215" src="https://www.youtube.com/embed/-Sruwwv6bnw?si=y57wUT42ni6cHSEy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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


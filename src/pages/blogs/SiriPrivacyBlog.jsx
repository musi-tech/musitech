import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "What Did Apple Do? The Allegations",
            description: "In 2019, a whistleblower revealed that Apple contractors were reviewing Siri recordings, allegedly overhearing sensitive conversations. These claims, reported by The Guardian, included discussions on personal medical information and even private moments between couples.\n\nKey allegations include:\n\n    Accidental Activations: Siri allegedly misinterpreted background noises (like a zipper) as the 'Hey Siri' command, leading to unintentional recordings.\n    Sensitive Data Captured: Users’ private conversations—such as doctor visits or intimate discussions—were reportedly recorded.\n    Targeted Ads: Plaintiffs claimed that recordings were shared with advertisers, leading to targeted ads based on keywords from private conversations. For example, users reported seeing ads for products they had only discussed verbally."
        },
        {
            id: 2,
            title: "Apple’s Initial Denial",
            description: "Apple has long branded itself as a privacy-first company. In 2018, it told the U.S. Congress that Siri was designed to activate only after detecting the clear wake command, “Hey Siri.” Apple assured that:\n\n    Siri requests were reviewed solely for quality assurance.\n    User data was not linked to Apple IDs.\n    Developers had no access to Siri recordings.\n\nDespite these assurances, whistleblower reports showed that contractors reviewed up to 1,000 recordings daily, some containing deeply personal conversations. These revelations pushed Apple to acknowledge its shortcomings and revise its policies."
        },
        {
            id: 3,
            title: "Apple’s Apology and Privacy Updates",
            description: "After the controversy, Apple apologized for failing to meet its privacy standards. In response, it implemented significant changes to Siri’s privacy features:\n\n    Opt-Out Analytics: Users can now choose whether Siri data is used for analytics.\n    No Audio Storage by Default: Audio recordings are no longer retained unless users explicitly agree.\n    Automated Transcripts: Siri processes interactions using computer-generated transcripts rather than audio.\n    Restricted Access: Only Apple employees, not contractors, can review Siri data.\n    Automatic Deletion: Mistaken recordings are deleted immediately."
        },
        {
            id: 4,
            title: "Settlement Details: Who’s Eligible?",
            description: "In 2024, Apple agreed to a $95 million settlement without admitting wrongdoing. This avoids the risk of a trial, which could have cost Apple over $1.5 billion.\n\nEligibility Criteria:\n\nTo claim compensation, individuals must:\n\n    Be U.S. residents.\n    Have used a Siri-enabled device between 2014 and 2019.\n    Confirm under oath that Siri accidentally recorded private conversations.\n\nEligible users can receive at least $20. Claims must be submitted by May 15, 2025. A dedicated website for filing claims will be live soon."
        },
        {
            id: 5,
            title: "Why Did Apple Settle?",
            description: "Settling helps Apple avoid prolonged litigation and reputational damage. For a company with a $93.74 billion annual net income, the $95 million settlement is a small price to pay to move forward."
        },
        {
            id: 6,
            title: "Privacy Concerns for Users",
            description: "The lawsuit highlights growing concerns about privacy and smart devices. Siri, designed to make life easier, unintentionally risked users’ privacy. While Apple has introduced changes, many users remain wary."
        },
        {
            id: 7,
            title: "How to Protect Yourself",
            description: "Concerned about accidental recordings? Here are simple steps to safeguard your privacy:\n\n    Disable Siri on iPhone/iPad:\n        Go to Settings > Siri & Search.\n        Toggle off Listen for \"Hey Siri\" and Press Side Button for Siri.\n\n    Disable Siri on Mac:\n        Go to System Preferences > Siri.\n        Uncheck Enable Ask Siri.\n\n    Regularly Review Settings: Ensure Siri preferences align with your privacy needs.\n\n    Keep Devices Updated: Software updates include security patches to protect your data."
        },
        {
            id: 8,
            title: "The Bigger Picture",
            description: "This settlement serves as a reminder of the challenges tech companies face balancing innovation with user privacy. While Apple’s privacy-first approach is commendable, this case underscores the importance of accountability and vigilance.\n\nVoice assistants like Siri, Alexa, and Google Assistant are integral to modern life. However, users must remain proactive in protecting their data. Privacy should never be a trade-off for convenience."
        },
        {
            id: 9,
            title: "Conclusion",
            description: "Apple’s $95 million settlement is a pivotal moment for tech privacy. While the company has improved Siri’s policies, users must stay vigilant. This case underscores the need for stronger safeguards in the age of smart devices. For Apple users, the settlement offers some resolution but also raises critical questions about the future of privacy."
        }
        
    
    ];



    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                    <img
                        src={require('../../assets/images/siri.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    Siri Eavesdropping: Apple’s $95M Settlement Explained      </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    Apple has agreed to a $95 million settlement to resolve allegations that Siri, its voice assistant, recorded users’ private conversations without consent. This class-action lawsuit has raised concerns about privacy for millions of Apple users. Here’s everything you need to know about the case, the allegations, Apple’s response, and what this settlement means for you.
                    </p>

                    <iframe className="mx-auto mt-6 rounded-lg shadow-lg" width="350" height="215" src="https://www.youtube.com/embed/T1O-w6XlIQ0?si=bCk8bXN3fgDRotYI"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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


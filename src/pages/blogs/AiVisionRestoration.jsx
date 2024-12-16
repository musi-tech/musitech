import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "How AI Made This Surgery Possible",
            description: "The groundbreaking surgery began with an advanced digital scan of Ms. Gonçalves’ eyes. Using this data, an artificial intelligence system created a detailed 3D model called an 'Eyevatar.' This virtual model allowed the AI to simulate different laser treatment scenarios, pinpointing the most effective adjustments for her unique eye structure.\n\nDr. David Allamby, a leading eye surgeon at Focus Clinics in London, performed the procedure. The surgery lasted just about an hour, with the scanning process taking only 10 minutes. During the operation, a precise laser reshaped Ms. Gonçalves’ cornea to correct her vision issues. The result? Vision clarity better than what most people with perfect eyesight experience.",
        },
        {
            id: 2,
            title: "What Does Better Than 20/20 Vision Mean?",
            description: "The term '20/20 vision' refers to the ability to see at 20 feet what an average person can see at the same distance. Achieving better-than-20/20 vision, such as 20/16, means seeing at 20 feet what others can only see from 16 feet away.\n\nBefore surgery, Ms. Gonçalves could barely identify large letters without her glasses. Post-surgery, her 20/16 vision allows her to see with greater clarity than ever before—a feat not even achievable with her glasses."
        },
        {
            id: 3,
            title: "The Surgery Process in Detail",
            description: "Here’s how this life-changing procedure unfolded:\n\nDigital Eye Scan: A comprehensive scan captured the precise shape and condition of Ms. Gonçalves’ corneas.\n\nCreation of the Eyevatar: The scan data was used to generate a 3D digital model of her eyes.\n\nAI Analysis: The AI simulated various laser treatments on the Eyevatar to determine the optimal approach.\n\nLaser Treatment: Following the AI’s custom plan, a laser reshaped her corneas, correcting her vision issues.\n\nRecovery: The minimally invasive surgery caused little ,discomfort, with vision improvements noticeable almost immediately."
        },
        {
            id: 4,
            title: "How AI Transformed Eye Care",
            description: "Traditional corrective eye surgeries often follow standardized approaches, which may not address the unique anatomy of each patient’s eyes. AI has redefined this process by delivering hyper-personalized treatments. The Eyevatar model and AI analysis ensure unparalleled accuracy, making it possible to achieve results like 20/16 vision—or even 20/10 in some cases.\n\nClinical trials with over 200 participants revealed that every patient achieved better-than-20/20 vision within three months of surgery. Astonishingly, one in twelve patients reached 20/10 vision, nearly double the clarity of standard 20/20 eyesight."
        },
        {
            id: 5,
            title: "Benefits of AI-Assisted Eye Surgery",
            description: "This groundbreaking technology opens up a world of possibilities:\n\nEnhanced Accuracy: AI’s precision reduces errors and ensures the best possible outcome for each patient.\n\nCustomized Treatments: Each surgery is uniquely tailored, providing results unattainable with traditional methods.\n\nShort Recovery Times: The minimally invasive approach allows patients to return to their daily routines quickly.\n\nAdvanced Research: Data gathered from procedures will contribute to future advancements in vision correction.\n\nAccessibility: As technology develops, AI-powered surgeries could become more affordable and widely available."
        },
        {
            id: 6,
            title: "Challenges to Address",
            description: "While promising, this technology isn’t without its challenges:\n\nHigh Costs: Advanced procedures remain expensive, limiting access for many patients.\n\nSurgeon Training: Eye specialists require additional training to effectively use AI systems.\n\nData Privacy: Ethical concerns around patient data usage need to be addressed.\n\nLong-Term Effects: More studies are needed to understand the durability of AI-assisted corrections."
        },
        {
            id: 7,
            title: "AI's Impact on Modern Medicine",
            description: "Patrícia Gonçalves’ story showcases the transformative power of AI in modern medicine. Her journey from severe visual impairment to extraordinary clarity is a beacon of hope for the future of vision care.\n\nAI-assisted eye surgery represents more than a personal triumph—it’s a leap forward for the entire field. As this technology becomes more accessible, it holds the promise of restoring sight and improving lives for millions around the globe. The possibilities are limitless, and the future of eye care looks sharper than ever."
        }
        
              
        
        
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/eye.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    AI Eye Surgery Restores Vision Beyond 20/20 for Legally Blind Woman               </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    A revolutionary AI-assisted eye surgery has transformed the life of a legally blind woman, Patrícia Gonçalves, by giving her better-than-20/20 vision. The 31-year-old Portuguese woman underwent this cutting-edge procedure in London after struggling with severe astigmatism and nearsightedness. Before the surgery, she depended heavily on glasses, unable to read even the largest letters on an eye chart unaided. Thanks to AI-driven precision, her vision now stands at an extraordinary 20/16, surpassing the standard for perfect eyesight. <br/>

This breakthrough sets a new milestone in vision restoration and offers hope to countless others facing vision challenges.

 
                    </p>
                   
                    <iframe className="mx-auto mt-6 rounded-lg shadow-lg" width="350" height="215" src="https://www.youtube.com/embed/Bxy6eLua5Es?si=LqejTHJzEiQ1wj9S"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                  
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


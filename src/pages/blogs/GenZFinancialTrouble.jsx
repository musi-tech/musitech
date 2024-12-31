import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        {
            "id": 1,
            "title": "The Show-Off Trap",
            "description": "A viral video recently showed people purchasing expensive Coldplay tickets without even knowing the names of the band members. This is a prime example of what’s being called the \"Show-Off Trap\" – where people buy things not because they need or want them, but because they want to look cool.\n\nThis issue is amplified by social media. In the past, people compared themselves mainly to their neighbors. But now, everyone is comparing their lives to what they see online. Social media creates endless pressure to upgrade one’s lifestyle in order to keep up with the rest of the world."
        },
        {
            "id": 2,
            "title": "The Digital Money Problem",
            "description": "Generation Z (those born between 1997 and 2012) faces unique financial challenges, largely because they are the first generation to grow up with smartphones and digital payments. This has significantly changed the way they view money.\n\nUnlike older generations, who dealt with physical cash and could feel the pain of spending it, Gen Z lives in a world where payments are digital and instantaneous. Whether it’s Rs. 10 or Rs. 10,000, the act of spending feels the same—a quick tap of the finger.\n\nWhile digital payments are incredibly convenient, they also make it easier to spend money without thinking twice. Apps that offer instant loans or advance salaries make it even easier to spend money that one doesn’t have."
        },
        {
            "id": 3,
            "title": "The FOMO Effect",
            "description": "Social media also fuels FOMO (Fear of Missing Out), where young people feel pressured to buy the same expensive sneakers or gadgets as influencers, even when they can’t afford them.\n\nOne of the worst traps here is the \"No-Cost EMI\" system. A Rs. 60,000 phone seems affordable if you break it into Rs. 5,000 monthly installments. But people often forget about the hidden costs—subscription fees, accessories, and maintenance—which make the phone much more expensive in the long run. Many end up spending a significant portion of their salary just to pay off EMIs for things they don’t really need."
        },
        {
            "id": 4,
            "title": "The Problem of Lifestyle Inflation",
            "description": "As young people start earning more, their expenses grow faster than their income. The person who bought Rs. 2,000 shoes may eventually upgrade to a Rs. 10,000 pair. They may start using a bike instead of public transport. Soon, designer clothes and fancy gadgets are seen as “necessities.”\n\nThis creates a dangerous cycle. Even as salaries increase, people are saving less, often living paycheck to paycheck, and accumulating debt. Most Indians are just one medical emergency away from financial ruin."
        },
        {
            "id": 5,
            "title": "Why Gen Z Struggles to Save",
            "description": "Several factors make it particularly difficult for Gen Z to save:\n\n- Growing up during uncertain times, such as the pandemic and global conflicts\n- Anxiety around climate change\n- High cost of living in cities\n- A sense of hopelessness about big financial goals like buying a house\n- Using shopping as a way to cope with emotions"
        },
        {
            "id": 6,
            "title": "Real Wealth vs. Show-Off Wealth",
            "description": "True billionaires like Ratan Tata and Bill Gates live simply, understanding the difference between actual wealth and the need to show off. Real wealth doesn’t need to be flaunted on social media. True financial security comes from making smart choices, not constantly buying the latest trends."
        },
        {
            "id": 7,
            "title": "Breaking the Show-Off Trap",
            "description": "So, what can we do to break free from the show-off trap?\n\n1. Create a Fun Fund\n\nSet aside a specific amount of money each month for discretionary spending. Once it's gone, it's gone. This helps keep your spending in check.\n\n2. Use Three Bank Accounts\n\n    Salary account\n    Spending account\n    Savings account\n\nInvest the savings immediately to avoid temptation.\n\n3. Pay Yourself First\n\nBefore spending on anything else, divide your money in half—one portion for immediate needs and the other for long-term savings. Your future self deserves that half.\n\n4. Follow the \"Buy It Twice\" Rule\n\nIf you can't afford to buy something twice, then you can't afford it once. This simple rule helps curb unnecessary spending."
        },
        {
            "id": 8,
            "title": "Learning from Finland",
            "description": "Finland, often called the world’s happiest country, provides a valuable lesson in financial discipline. People there don’t feel pressured to buy bigger homes or fancier cars to impress others. They live within their means, focusing on well-being rather than material wealth."
        },
        {
            "id": 9,
            "title": "The Happiness Trap",
            "description": "Material possessions don’t bring lasting happiness. The thrill of purchasing new items fades quickly, and social pressure often forces people to live beyond their means. Remember the Fight Club quote: \"We buy things we don't need with money we don't have to impress people we don't like.\" This perfectly captures the cycle many young Indians are trapped in.\n\nBreaking free from the show-off trap is crucial for long-term financial health. True happiness and security come from wise financial decisions—not Instagram likes."
        }
                                
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/gen.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    Why Generation Z Is Headed for Financial Trouble           </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    The recent introduction of Prime drinks and Feastables chocolates in India has revealed an alarming trend among young people. Enthusiastic consumers are paying Rs. 400 for just 35 grams of chocolate and Rs. 350 for drinks with little to no nutritional value. This isn't just about overpriced snacks; it's a symptom of a much larger issue facing India’s youth today. <br/>

                    </p>
                    
                    <iframe className="mx-auto mt-6 rounded-lg shadow-lg" width="350" height="215" src="https://www.youtube.com/embed/-zh776-IJ6U?si=s4j9Bvwr_UqTd3Sd"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   
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


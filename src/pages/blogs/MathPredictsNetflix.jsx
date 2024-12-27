import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "How to Apply the 37% Rule",
            description: "The 37% Rule is a mathematical approach to streamline decision-making and avoid overthinking. Here's how you can use it effectively: First, set a limit on the number of choices you'll evaluate. For instance, if you're choosing a restaurant, decide to consider up to 50 options. Assess the first 37% of these choices without making a commitment. Read reviews, compare menus, and gather information, but refrain from deciding. This process helps you establish a standard for what qualifies as a great choice. Once you've reviewed the initial 37%, select the first option that exceeds all prior ones. Commit to this choice, knowing you've followed a logical and efficient strategy.",
            explore: (
                <>
                    Watch Now{" "}
                    <a
                        href="https://www.netflix.com"                        
                        className="text-green-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Netflix
                    </a>
                    .
                </>
                
            ),
        },
        {
            id: 2,
            title: "Why 37%?",
            description: "The number 37% isn’t random; it comes from mathematics. Specifically, it’s derived from the constant e (approximately 2.71828). When you divide 1 by e, you get around 0.37 or 37%. This percentage is the sweet spot for maximizing your chances of finding the best option in a given set. It ensures you explore enough to understand what’s great while avoiding decision fatigue or missing out.",
            explore: (
                <>
                    Watch Now{" "}
                    <a
                        href="https://www.netflix.com"                        
                        className="text-green-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Netflix
                    </a>
                    .
                </>
                
            ),
        },
        {
            id: 3,
            title: "How Does the 37% Rule Work on Netflix?",
            description: "Imagine it’s Friday night. You’ve opened Netflix but feel overwhelmed by endless options. Instead of endlessly scrolling, the 37% Rule simplifies things: Decide your limit. Let’s say you’re willing to explore 100 movies. Start exploring without deciding. Spend the first 37% (37 movies) evaluating trailers and reviews. Commit to the standout. After the 37th movie, pick the first option that’s better than the previous ones. This process keeps you from overanalyzing while ensuring you don’t settle for something mediocre.",
            explore: (
                <>
                    Watch Now{" "}
                    <a
                        href="https://www.netflix.com"                        
                        className="text-green-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Netflix
                    </a>
                    .
                </>
                
            ),
        },
        {
            "id": 4,
            "title": "Everyday Applications of the 37% Rule",
            "description": "The 37% Rule isn’t just for Netflix. It’s a universal strategy that applies to various decisions:\n\n1. Job Applications\n\nWhen reviewing candidates, spend the first 37% of your time screening without hiring. Then, choose the first applicant who stands out above the rest.\n\n2. Dating\n\nLooking for a partner? If you plan to meet 20 people, spend the first 37% (7 people) exploring. Commit to the first person who surpasses everyone else.\n\n3. Shopping\n\nWhether it’s a car, shoes, or a new phone, use the rule to research 37% of your options. Then, pick the best option from the remainder.\n\n4. Apartment Hunting\n\nSearching for a new home? Spend 37% of your time visiting properties without deciding. Then, rent the next apartment that’s better than all the ones you’ve seen."
        },
        {
            id: 5,
            title: "Why Does the 37% Rule Work?",
            description: "The rule is grounded in both mathematics and psychology. Here’s why it’s effective:\n\nIt reduces choice overload. Limiting your search to 37% avoids the stress of too many options.\n\nIt builds a reference point. The first phase lets you learn what 'great' looks like, making it easier to identify the best option later.\n\nIt’s time-efficient. You’re not spending hours or days evaluating every option.\n\nIt prevents regret. You act before the best choices slip away."
        },
        {
            id: 6,
            title: "Limitations of the 37% Rule",
            description: "While the rule is highly effective, it’s not perfect. Consider these challenges:\n\nUnclear limits: If you don’t know how many options exist (e.g., restaurants in a city), applying the rule can be tricky.\n\nEvolving preferences: Your tastes might change as you explore options.\n\nExternal constraints: Deadlines, budgets, or availability might limit your choices.\n\nOver-optimizing: Sometimes 'good enough' is better than holding out for perfection."
        },
        {
            id: 7,
            title: "Tips for Using the 37% Rule",
            description: "To maximize this strategy, follow these tips:\n\nSet clear boundaries. Know how many options you’re willing to evaluate upfront.\n\nTrust the process. Resist the urge to continue exploring past the 37% mark.\n\nStay flexible. If an exceptional choice appears early, it’s okay to bend the rule.\n\nPractice regularly. The more you use it, the better you’ll become at spotting great options."
        },
        {
            id: 8,
            title: "Conclusion: Let Math Be Your Guide",
            description: "The 37% Rule shows that math isn’t just for classrooms—it’s a practical tool for everyday life. Whether you’re picking a Netflix show, applying for jobs, or deciding on your next vacation, this strategy can save you time and stress.\n\nSo, next time you’re stuck in decision-making limbo, remember: Explore 37%, then choose the best. Math has your back!"
        }        
        
        

   ];



    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                    <img
                        src={require('../../assets/images/netflix.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    Math Can Predict Your Next Netflix Show!        </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    Did you know that math can guide you to your next favorite Netflix show? It’s not magic but the power of the 37% Rule – a simple yet effective method for making the best decisions. Whether it’s picking movies, choosing job applicants, or even deciding where to eat, this rule can streamline your choices.

Let’s dive into how it works and why it’s so effective.

                    </p>

                    <iframe className="mx-auto mt-6 rounded-lg shadow-lg" width="350" height="215"  src="https://www.youtube.com/embed/75mj5RGxBXY?si=sOhVkELFJD81WtDV"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   

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


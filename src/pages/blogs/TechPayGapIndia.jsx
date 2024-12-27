import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        
            {
                id: 1,
                title: "Basic Economics: Supply and Demand",
                description: "The tech job market follows the basic rules of economics. When the supply of workers is higher than the demand for jobs, salaries do not rise. This is exactly what is happening in India.\n\nEvery year, India produces about 15 lakh (1.5 million) engineering graduates. This is a huge number. However, the demand for freshers in the tech industry has not grown at the same pace. In some cases, the demand has even decreased. Companies do not need as many new employees as colleges are producing.\n\nThe result? An oversaturated job market. When there are too many candidates for limited jobs, companies do not need to offer high salaries. This keeps the pay for freshers low."
            },
            {
                id: 2,
                title: "The Role of Colleges",
                description: "Colleges are a big part of the problem. Many institutions focus on quantity rather than quality. They aim to enroll as many students as possible and churn out graduates in bulk. However, most of these graduates are not ready for the industry.\n\nWhile they have degrees, they lack practical knowledge. They do not have the skills that companies look for. For example, they might know theoretical concepts but cannot apply them to real-world problems. This creates extra work for companies."
            },
            {
                id: 3,
                title: "Why Companies Spend on Training",
                description: "When companies hire freshers, they cannot expect them to be productive from day one. Instead, they need to invest in training. This training costs time and money. Companies need to teach freshers basic skills that should have been covered during their education.\n\nThis situation makes companies hesitant to offer higher salaries to freshers. They see freshers as an additional expense rather than an immediate asset."
            },
            {
                id: 4,
                title: "How CEO Salaries Keep Growing",
                description: "While freshers struggle, CEOs thrive. Why? The skills and responsibilities of CEOs are unique. There are very few individuals who can lead large companies effectively. Their decisions have a massive impact on the business’s success.\n\nCEOs’ high pay reflects their value to the company. They are rewarded for the profits, growth, and stability they bring. But this raises an important question. Should companies spend so much on top executives while ignoring the financial struggles of their entry-level employees?"
            },
            {
                id: 5,
                title: "The Impact of Inflation",
                description: "Inflation is another factor to consider. Over the last five years, the cost of living in India has gone up significantly. Prices for basic necessities like food, housing, and transportation have risen. However, the 4% salary increase for freshers does not match this rise.\n\nThis means freshers have less purchasing power now than they did five years ago. Their real income has effectively decreased, making it harder to afford a decent lifestyle."
            },
            {
                id: 6,
                title: "What Needs to Change?",
                description: "Fixing this problem will require efforts from colleges, companies, and policymakers. Here are some potential solutions:\n\n1) Improving Education Quality\n\nColleges need to focus on quality over quantity. They should aim to produce fewer graduates but ensure that these graduates are well-trained. Courses should include practical skills alongside theoretical knowledge. Internships, live projects, and hands-on training should become standard parts of the curriculum.\n\n2) Collaboration Between Colleges and Companies\n\nColleges and companies should work together. Companies can guide colleges on what skills are in demand. Colleges can then update their courses to meet industry needs. This will ensure that graduates are job-ready and reduce the need for additional training.\n\n3) Offering Competitive Salaries\n\nCompanies should consider offering competitive salaries to freshers. Higher pay can attract the best talent and motivate employees. Companies can balance this by moderating the salary growth at the top levels.\n\n4) Reducing Oversupply of Engineers\n\nIndia does not need 15 lakh engineers every year. The government and education regulators should ensure that the number of engineering colleges aligns with market demand. This will help reduce the oversupply of graduates.\n\n5) Encouraging Skill-Based Learning\n\nFreshers should focus on learning in-demand skills. For example, programming languages like Python, JavaScript, and tools like AI and cloud computing are highly sought after. Online courses and certifications can help students build these skills.\n\n6) Creating More Job Opportunities\n\nThe government can play a role by encouraging job creation. Policies that support startups, tech innovation, and foreign investments can increase the demand for fresh talent.\n\n7) Recognizing and Rewarding Talent\n\nCompanies should identify talented freshers and reward them. Performance-based bonuses, fast-track promotions, and recognition programs can boost morale. This will help freshers feel valued and motivated to perform better."
            },
            {
                id: 7,
                title: "A Shared Responsibility",
                description: "The problem of unequal pay is not just about economics. It is also about fairness and opportunity. Colleges, companies, and policymakers all have a role to play in creating a more balanced system.\n\nFreshers deserve better. They are the backbone of the tech industry. Without their hard work and innovation, companies cannot grow. It is time to bridge the gap and ensure that everyone benefits from India’s booming tech sector."
            },
            {
                id: 8,
                title: "What Do You Think?",
                description: "This is a complex issue with no easy solutions. What do you think is the best way to address the tech pay gap? Share your thoughts and ideas. Let’s start a conversation and work towards a better future for India’s tech talent."
            }
                
            
        ];
        
        

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/gap.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    160% vs 4%: Tech Pay Reality        </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    In the last five years, the salaries of CEOs at India’s biggest tech companies have skyrocketed. They received a massive 160% pay raise. This growth is impressive, but there is a shocking twist. Entry-level employees saw their salaries barely move. Their pay increased from ₹3.6 lakh per year to just ₹4 lakh per year. That is a mere 4% increase, not even enough to keep up with inflation. <br/>

This growing gap between the top and bottom of the pay scale is alarming. At companies like Wipro, the CEO earns 172 times more than a fresher. At TCS, it is even worse. The CEO earns 192 times what a fresh graduate takes home. <br />

So, what is causing this inequality? Let’s break it down and understand the root of the problem.
 
                    </p>
                    <iframe className="mx-auto mt-6 rounded-lg shadow-lg" width="350" height="215" src="https://www.youtube.com/embed/weBiyA6bz88?si=tJBO0b1zV-8wZb5u"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   
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


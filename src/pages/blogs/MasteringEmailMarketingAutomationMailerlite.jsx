import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MusiBlog from "../../components/MusiBlog"

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "What is Email Marketing Automation?",
            description: `Email marketing automation is more than sending emails—it’s about nurturing relationships automatically. Think of it as setting up a domino effect: triggers based on subscriber actions send the right email at the right time. With automation, you can:
            
            - Respond to subscriber behavior promptly.
            - Save time by automating repetitive tasks.
            - Build meaningful and lasting connections.
            
            For instance, when someone subscribes to your newsletter, a welcome email is sent automatically. If they abandon their cart, you can follow up with a discount offer. This personalized approach increases engagement and conversions.`,
            explore: (
                <>
                    Learn More About SEO{" "}
                    <a
                        href="https://www.musitech.in/blogs/top-ai-tools-for-digital-marketing-in-2025"
                        className="text-green-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                </>
            ),
        },
        {
            id: 2,
            title: "Getting Started with MailerLite Automation",
            description: `MailerLite makes it easy to set up workflows. Follow these steps to create an automated email marketing workflow:`,
            explore: (
                <>
                    Learn More About SEO{" "}
                    <a
                        href="https://www.musitech.in/blogs/top-ai-tools-for-digital-marketing-in-2025"
                        className="text-green-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                </>
            ),
        },
        {
            id: 3,
            title: "Step 1: Log in to Your Dashboard",
            description: `- Go to the Automation section in the left-hand menu.
            - Click New Automation to start building your workflow.`
        },
        {
            id: 4,
            title: "Step 2: Choose a Starting Point",
            description: `You can either start from scratch or use MailerLite’s pre-built templates. Templates are ideal for beginners or quick setups, but for this tutorial, we’ll start from scratch to cover all the basics.`
        },
        {
            id: 5,
            title: "Step 3: Set a Workflow Trigger",
            description: `Triggers activate your workflow. MailerLite offers triggers like:
            
            - When someone joins a group.
            - When a form is completed.
            - When a link is clicked.
            
            For example, let’s use “when a subscriber joins a group” to send a welcome email.`
        },
        {
            id: 6,
            title: "Step 4: Add Workflow Steps",
            description: `Build your workflow by adding steps like:
            
            Email
            
            Design and send your first email using MailerLite’s editor. Create a welcoming subject line, engaging message, and clear call-to-action (CTA). Save your email and return to the workflow setup.
            
            Delay
            
            Add a delay between emails to give subscribers time to respond. For instance, set a two-day gap before the next email.
            
            Condition
            
            Segment subscribers based on actions. For example, if someone opens your email, they proceed to the next step. If not, resend the email with a different subject line.`
        },
        {
            id: 7,
            title: "Example Workflow: Promoting a Writing Course",
            description: `Here’s a sample 4-email workflow:
            
            - Trigger: Subscriber joins the “Writing Course” group.
            - Email 1: Introduce the course and its benefits.
            - Delay: Wait two days.
            - Condition: Check if they opened Email 1.
              - If yes, send Email 2 with course details.
              - If no, resend Email 1 with a new subject line.
            - Repeat for the remaining emails, ending with a CTA to enroll.`
        },
        {
            id: 8,
            title: "Advanced Features in MailerLite",
            description: `Multiple Triggers
            
            Combine up to three triggers for enhanced engagement. Example triggers: joining a group, clicking a link, or completing a survey.
            
            A/B Testing
            
            Test different subject lines, email designs, and workflows to see what works best.
            
            E-commerce Triggers
            
            For online stores, triggers like cart abandonment or purchase completion enable personalized follow-ups with discounts or thank-you emails.`
        },
        {
            id: 9,
            title: "Tips for Effective Automation",
            description: `- Plan Ahead: Map out your emails and triggers before creating workflows.
            - Write Engaging Content: Use clear language, add value, and include strong CTAs.
            - Monitor and Optimize: Use MailerLite’s analytics to refine workflows based on subscriber behavior.
            - Save Templates: Create reusable email templates for efficiency.`
        },
        {
            id: 10,
            title: "Final Thoughts",
            description: `Mastering email marketing automation workflows with MailerLite will save you time and enhance connections with your audience. Start small with a simple workflow and gradually explore advanced features like A/B testing and e-commerce triggers. Automation doesn’t replace the human touch—it amplifies it. Focus on delivering value to your subscribers, and you’ll see your engagement and conversions grow.
            
            Ready to get started? Happy automating!`
        },
        {
            id: 4,
            title: "External Resources:",
            
            image: require("../../assets/images/local.jpeg"),
            explore: (
                <>
                    Learn More About SEO {" "}
                    <a
                        href="https://blog.hubspot.com/marketing/ai-seo"
                        className="text-green-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                    .
                    <br/>
                    AI Tools for Beginners{" "}
                    <a
                        href="https://blog.hubspot.com/marketing/ai-seo"
                        className="text-green-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                    .

                </>
                
            ),
        },
             
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/emailauto.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    How to Create and Master Email Marketing Automation Workflow: A MailerLite Tutorial    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    Hurray! You’re about to unlock the power of email marketing automation! In today’s fast-paced digital world, connecting with your audience is vital—and email marketing lets you do that effectively. But manually managing emails is overwhelming. That’s where email marketing automation shines. This guide will show you how to create and master an email marketing automation workflow using MailerLite.
                    </p>
                                        <iframe className="mx-auto mt-6 rounded-lg shadow-lg" src="https://www.youtube.com/embed/e-yfDwkoLp0?si=i1a7HtIBh3yIWK4X"  width="350" height="215"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        
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
            <MusiBlog />
            <Footer />
        </>
    );
};

export default BlogArticle;


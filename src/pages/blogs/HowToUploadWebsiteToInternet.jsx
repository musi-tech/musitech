import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MusiBlog from "../../components/MusiBlog"

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "Why Uploading Your Website to the Internet Is Important",
            description: "When I built my first website, it was only viewable on my computer. It felt incomplete—like baking a cake but not sharing it. Uploading your website to the internet allows it to reach your audience, be it customers, readers, or users. Your project evolves from something personal to something impactful that connects with the world.\n\nLet’s dive into the steps to bring your website online.",
            explore: (
                <>
                    Learn More About GoDaddy {" "}
                    <a
                        href="https://www.godaddy.com/en-in"
                        className="text-green-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                    .
                    <br/>
                    Learn More About  Namecheap{" "}
                    <a
                        href="https://www.namecheap.com/"
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
        {
            id: 2,
            title: "Step 1: Choose Your Website Name (Domain Name)",
            description: "The first step to uploading your website to the internet is choosing a domain name. A domain name is your website's unique address on the internet, like example.com.\n\nHere’s how to pick the right domain name:\n\n    Go to a domain registrar like GoDaddy or Namecheap.\n    Enter the name you want for your website. For example, when I created a website for showcasing trendy footwear, I chose shoespaw.com.\n    Check availability. If it’s available, you’re good to go!\n\nChoose a name that’s simple, memorable, and relevant. For instance, if your website is about baking, names like sweetbites.com or bakersdelight.net would work perfectly.",
            explore: (
                <>
                    Learn More About GoDaddy {" "}
                    <a
                        href="https://www.godaddy.com/en-in"
                        className="text-green-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                    .
                    <br/>
                    Learn More About  Namecheap{" "}
                    <a
                        href="https://www.namecheap.com/"
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
        {
            id: 3,
            title: "Step 2: Get Hosting and Domain",
            description: "Your website files need a place to live online, and that’s where web hosting comes in. Hosting is like renting space on a server to store your website’s data.\n\nHere’s how to get hosting:\n\n    After selecting your domain, click on Get Hosting on the registrar’s website.\n    Re-enter your domain name during the process.\n    Add it to your cart, create an account, and complete the purchase.\n\nWhen I bought my first hosting plan, I was thrilled to see my domain and hosting ready for one year. It was a major step toward making my website live."
        },
        {
            id: 4,
            title: "Step 3: Set Up Your Hosting Account",
            description: "With hosting in hand, the next step is to set up your hosting account. This prepares the server for uploading your website files.\n\n    Log in to your hosting account dashboard.\n    Click on Set Up Hosting and follow the instructions.\n    Skip unnecessary steps, like installing pre-built templates if you don’t need them.\n\nOnce done, you’ll access the cPanel (Control Panel), where you’ll manage your hosting account.\nPro Tip:\n\nTake some time to explore the cPanel. While it may seem complex at first, it’s a powerful tool that simplifies website management."
        },
        {
            id: 5,
            title: "Step 4: Upload Your Website Files to the Hosting Account",
            description: "Now, it’s time to upload your website to the internet and make it live!\n\nSteps to Upload Your Website Files:\n\n    In the cPanel dashboard, go to File Manager.\n    Navigate to the public_html folder. This is the directory where your files will live.\n    Delete default files (like placeholder index.html) to keep the folder clean.\n\nCompress Your Files:\n\n    Compress all your website files into a ZIP file.\n    Ensure your homepage is named index.html—web browsers look for this file first.\n\nUpload the ZIP File:\n\n    Click Upload in the public_html folder.\n    Drag and drop the ZIP file.\n    Once uploaded, select the file and click Extract to unpack it.\n\nYour website should now be live! Open a browser, type in your domain name (e.g., shoespaw.com), and enjoy seeing your website online."
        },
        {
            id: 6,
            title: "Common Issues and Troubleshooting",
            description: "    Homepage Not Displaying: Ensure your homepage file is named index.html.\n    Website Not Loading: Check your domain and hosting setup. DNS settings are usually configured automatically.\n    Broken Links or Images: Verify file paths in your HTML or CSS."
        },
        {
            id: 7,
            title: "Tips for a Successful Website Launch",
            description: "    Test Before Uploading: Test your website locally to catch errors.\n    Backup Files: Save copies of your files to restore your website if needed.\n    Optimize for Speed: Compress images and minimize code for faster loading times."
        },
        {
            id: 8,
            title: "Conclusion",
            description: "Uploading your website to the internet is a rewarding milestone. By following these four steps, you’ll go from working locally to having a live website ready for your audience. Remember, the journey doesn’t end here. Keep updating and optimizing your site to make it even better.\n\nStart uploading your website today, and watch your hard work come to life online!\n\nFor more guides and tips, subscribe to Website Learners and join us in exploring the world of web development."
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
                        src={require('../../assets/images/upload.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    How to Upload Your Website to the Internet: A Beginner's Guide   </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    Building a website is an exciting journey, but the real magic happens when you upload your website to the internet. This step allows your hard work to shine and become accessible to everyone online. If your website is ready on your computer and you’re wondering how to make it live, you’re in the right place. In this guide, I’ll walk you through how to upload your website to the internet in just four simple steps.
                    </p>
                                        <iframe className="mx-auto mt-6 rounded-lg shadow-lg"  src="https://www.youtube.com/embed/kvyWeTXCSKk?si=jTux0N7LeSjESZcp"  width="350" height="215"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   
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


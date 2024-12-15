import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
            {
                id: 1,
                title: "The Evolution of Money",
                description: "To understand cryptocurrency, it helps to look at how money has evolved over time:\n\n" +
                "1. Barter System: Early societies relied on trading goods directly, like exchanging a cow for grain. This system worked but was cumbersome—what if the other person didn’t need your cow?\n\n" +
                "2. Precious Metals: Coins made from gold or silver became a universal standard because they held intrinsic value and were widely accepted.\n\n" +
                "3. Paper Money: Governments introduced paper currency, backed by trust in institutions rather than the material itself, simplifying trade even further.\n\n" +
                "4. Digital Banking: Today, most money exists as digital records managed by centralized entities like banks, making transactions faster and more convenient.",
            },
            {
                id: 2,
                title: "Cryptocurrency: The Next Stage",
                description: "Cryptocurrency represents the fifth stage in this evolution—a purely digital, decentralized form of currency. Unlike traditional money controlled by governments or banks, cryptocurrency operates on a system of trust powered by blockchain technology.",
            },
            {
                id: 3,
                title: "How Cryptocurrency Works",
                description: "Think of cryptocurrency as a shared, unchangeable digital ledger:\n\n" +
                "1. Decentralized Ledger: Every transaction is recorded on a public, global database maintained by a network of computers (called nodes).\n\n" +
                "2. Mining & Verification: Miners—computers solving complex problems—verify transactions and add them to the blockchain. In return, they earn cryptocurrency as a reward.\n\n" +
                "3. Immutable Records: Once a transaction is added, it cannot be altered, as every computer on the network has its copy of the blockchain.\n\n" +
                "This system ensures that cryptocurrencies are secure, transparent, and free from centralized control.",
            },
            {
                id: 4,
                title: "Why Cryptocurrency is Revolutionary",
                description: "Cryptocurrency offers a fresh approach to how we think about money.\n\n" +
                "1. Accessible to Everyone: Anyone with internet access can use cryptocurrency, bypassing traditional barriers like bank accounts or credit history.\n\n" +
                "2. Fast & Low-Cost Transactions: Payments can be sent instantly across the world with minimal fees.\n\n" +
                "3. Global Compatibility: Cryptocurrencies work universally, without needing currency exchanges or dealing with fluctuating interest rates.\n\n" +
                "4. Highly Secure: Blockchain technology makes it incredibly difficult for hackers to manipulate or counterfeit transactions.",
            },
            {
                id: 5,
                title: "Challenges Cryptocurrencies Face",
                description: "While cryptocurrencies hold enormous potential, they are far from perfect:\n\n" +
                "1. Volatility: Cryptocurrency prices can swing wildly. A single tweet or piece of news can send values soaring or crashing in minutes.\n\n" +
                "2. Limited Adoption: Although growing, the number of businesses accepting cryptocurrencies is still relatively small.\n\n" +
                "3. Energy Consumption: Mining cryptocurrencies like Bitcoin requires immense computational power, leading to environmental concerns over energy use.",
            },
            {
                id: 6,
                title: "Investing in Cryptocurrencies",
                description: "For many, cryptocurrencies are less about daily use and more about investment potential. People exchange traditional money (like dollars) for digital coins, hoping their value will increase.\n\n" +
                "Popular Cryptocurrencies:\n\n" +
                "1. Bitcoin: The first and most widely recognized cryptocurrency.\n\n" +
                "2. Ethereum: Famous for its faster transactions and ability to run smart contracts.\n\n" +
                "3. Others: Litecoin, Cardano, and Polygon each bring unique innovations to the table.",
            },
            {
                id: 7,
                title: "What’s Next for Cryptocurrency?",
                description: "Cryptocurrencies are still in their infancy, and their future could go in multiple directions:\n\n" +
                "1. They might lead to a truly decentralized, transparent financial system.\n\n" +
                "2. Governments could regulate them more strictly, affecting their appeal.\n\n" +
                "3. Only the most practical and environmentally friendly cryptocurrencies may endure.\n\n" +
                "One thing is clear: cryptocurrency is reshaping how we think about money, trust, and transactions.",
            },
            {
                id: 8,
                title: "Bitcoin, Ethereum, Blockchain, and Smart Contracts",
                description: "1. Bitcoin: The first decentralized cryptocurrency, often called 'digital gold,' offering a store of value. [Learn More](https://www.bitcoin.org)\n\n" +
                "2. Ethereum: A platform that allows developers to build decentralized applications (dApps) and run smart contracts. [Learn More](https://www.ethereum.org)\n\n" +
                "3. Blockchain EVM: Ethereum Virtual Machine (EVM) powers the execution of smart contracts on the Ethereum blockchain, making it possible to decentralize finance and applications. [Learn More](https://ethereum.org/en/developers/docs/evm/)\n\n" +
                "4. Smart Contracts: Self-executing contracts with the terms of the agreement directly written into code. They automatically enforce and execute the terms without the need for intermediaries. [Learn More](https://ethereum.org/en/smart-contracts/)",
            }
            
        ];
        
        

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/bitcoin.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    How Cryptocurrency ACTUALLY Works            </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    Cryptocurrency might seem like a complex buzzword, with names like Bitcoin, Ethereum, and Dogecoin dominating headlines. But at its heart, cryptocurrency is an innovative evolution in how we think about and use money. Let’s simplify it and break down what it is, how it works, and why it’s changing the game—while also acknowledging its challenges.
 
                    </p>
                   <iframe className="mx-auto mt-6 rounded-lg shadow-lg" width="350" height="215" src="https://www.youtube.com/embed/WJTB2jqzfB4?si=g5uAGEglzVp350Wl"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  
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


import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "The Final Showdown",
            description: "The decisive Game 14 was everything a chess fan could hope for—high-stakes, nerve-wracking, and full of drama. The score was tied going into the final game, making it a winner-takes-all situation. Ding Liren, playing with the white pieces, was the favorite to win. Even a draw would have led to tie-breakers the next day, where Ding’s renowned speed chess skills gave him a significant edge. But Gukesh had other plans. The game opened with the Reti system, eventually transitioning into the King’s Indian Attack with the French, Reversed Grunfeld Variation. Both players were laser-focused, delivering a showcase of brilliant strategy and precision. Early on, the match seemed evenly balanced. Ding took over 18 minutes for his 11th move, showing the intense deliberation at play. Gukesh, playing black, matched his opponent’s energy and kept his position solid. As the game progressed, pieces were exchanged, and the match evolved into a battle of rooks and bishops. With so few pieces left on the board, a draw seemed inevitable. But Gukesh wasn’t ready to settle. He continued searching for an opening, unwilling to let this chance slip away.",
        },
        {
            id: 2,
            title: "A Turning Point",
            description: "The defining moment came on Ding’s 55th move. Under time pressure, Ding played 55...Rf2, an uncharacteristic blunder. Gukesh immediately recognized the error. After a brief pause, during which he calmly sipped water, he calculated the winning sequence of moves. Ding, visibly shaken, realized his mistake too late. The game transitioned into a decisive king-and-pawn endgame. Gukesh’s 58th move, Ke5, sealed the deal. Resigned to his fate, Ding offered a handshake and conceded the match. Overcome with emotion, Gukesh took a moment to compose himself, rearranging the pieces on the board as if reflecting on his journey to this historic victory.",
        },
        {
            id: 3,
            title: "The Reactions",
            description: "Speaking after the match, Gukesh was humble in victory. He praised Ding Liren as “one of the best players in history” and expressed empathy for his opponent. “To me, Ding is a real world champion,” he said. “He fought like a true champion, and I’m sorry for him and his team.” For Gukesh, this win is the culmination of years of hard work and a childhood dream realized. He reminisced about watching the 2013 World Chess Championship between Anand and Magnus Carlsen, which inspired his passion for chess. Ding Liren, gracious in defeat, admitted that the mistake in Game 14 cost him the title. “It took me a while to realize I blundered,” he said. “I think I played my best tournament this year. I have no regrets and will continue to play.”",
        },
        {
            id: 4,
            title: "A Historic Moment for Indian Chess",
            description: "Gukesh’s victory has sparked celebrations across India. Fans and fellow players hailed him as a national hero. Former world champion Viswanathan Anand called it “a moment of pride for Indian chess.” At just 18 years old, Gukesh has joined the ranks of chess legends, proving that age is no barrier to greatness. His victory is a testament to perseverance, talent, and the power of dreams. As the chess crown returns to India, a new era begins—not just for Gukesh but for the sport itself. This is more than just a victory; it’s a story of hope, inspiration, and the relentless pursuit of excellence.",
        },
        
        
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/chess.jpg')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    D Gukesh Becomes Youngest-Ever World Chess Champion, Defeats Ding Liren in a Nail-Biting Finale                  </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    In an extraordinary achievement for the chess world, 18-year-old Dommaraju Gukesh has etched his name into history by becoming the youngest-ever FIDE World Chess Champion. In a nail-biting 14-match series held in Singapore, Gukesh defeated the reigning champion Ding Liren 7.5 - 6.5, bringing the chess crown back to India after 12 long years. This historic win follows in the footsteps of the legendary Viswanathan Anand, India’s former world champion.

 
                    </p>
                   
                    <iframe className="mx-auto mt-6 rounded-lg shadow-lg" width="350" height="215" src="https://www.youtube.com/embed/HlmhDl_KnOY?si=aGAGGO4VvJkCVx6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   
                    
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

                            <p className="mt-4">
                                Learn more about {" "}
                                <a
                                    href="https://x.com/search?q=world+chess+championship+2024"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-500 hover:underline"
                                >
                                    World Chess Championship 2024
                                </a>{" "}
                            </p>
                        </article>
                    ))}
                </section>
            </div>
            <Footer />
        </>
    );
};

export default BlogArticle;


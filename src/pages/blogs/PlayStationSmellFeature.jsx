import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogArticle = () => {
    const blogData = [
        {
            id: 1,
            title: "Smelling Your Games: How Does It Work?",
            description: "At CES 2025, Sony gave gamers a glimpse into the future of gaming. They unveiled a proof-of-concept technology that allows players to experience in-game scents in real life. This means you could potentially smell flowers in a peaceful meadow or the musty air of dark, infected tunnels in games like The Last of Us.\n\nThe idea is part of Sony’s broader vision of creating 'infinite realities.' By combining physical and virtual worlds, they aim to make gaming a multi-sensory experience. This isn’t just about adding scents; it’s about bringing the entire game world to life."
        },
        {
            id: 2,
            title: "Gaming Through the Ages",
            description: "To understand how big this innovation is, let’s look at how gaming has evolved over the years:\n\nVisuals and Sound: Gaming began with simple visuals and sound effects. Think of the pixelated graphics and beeping sounds of early arcade games.\n\nHaptic Feedback: Then came haptic feedback. Controllers started vibrating to make players feel every explosion or car crash.\n\nVirtual Reality (VR): VR took things to the next level. Players could immerse themselves in 360-degree virtual worlds.\n\nNow, Smell: Smell is the next frontier. It adds another layer of immersion, making games feel more real than ever."
        },
        {
            id: 3,
            title: "The Last of Us: A Smelly Adventure",
            description: "Sony showcased their new technology with a special The Last of Us experience. Players could step into the infected tunnels of Seattle and smell the environment around them. Naughty Dog’s Neil Druckmann described it as something that engages all your senses. He claimed players would never experience The Last of Us the same way again.\n\nThis raises an important question: Do we really want to smell everything in a game? While the technology is exciting, some gamers are hesitant. After all, not all game worlds smell pleasant. Imagine the stench of zombies or sewage in an apocalyptic setting!"
        },
        {
            id: 4,
            title: "Infinite Realities: Sony’s Bold Vision",
            description: "Sony’s new smell technology isn’t just about adding a gimmick. It’s part of a larger plan to create 'infinite realities.' This concept involves blending physical and virtual worlds. Here’s how Sony plans to achieve it:\n\nVR and AR Integration: Virtual Reality (VR) and Augmented Reality (AR) will play a key role. Sony is working on advanced headsets that provide realistic visuals and sounds.\n\nSpatial Technology: Spatial tech will allow players to move through game environments physically.\n\nMulti-Sensory Experiences: Smell, touch, and even taste could be integrated to create a fully immersive experience."
        },
        {
            id: 5,
            title: "The Challenges of Smell Technology",
            description: "While the idea of smelling your games is exciting, it comes with challenges:\n\nHardware Development: Creating a device that can produce a wide range of scents is no small feat. It needs to be compact, affordable, and compatible with existing PlayStation systems.\n\nScent Accuracy: The scents need to be realistic and match the in-game environments perfectly.\n\nUser Comfort: Not all players will enjoy the idea of smelling certain game environments. Developers will need to find a balance between immersion and comfort.\n\nCost: Advanced technology often comes with a high price tag. Will this feature be accessible to the average gamer?"
        },
        {
            id: 6,
            title: "The Lighter Side of Smelling Games",
            description: "Gamers have already started joking about which games they would and wouldn’t want to experience with this technology. For example:\n\nGames They Want to Smell:\n\n- Flower: Imagine walking through a field of blooming flowers.\n- Animal Crossing: The scent of freshly baked goods or a sunny beach.\n- Gran Turismo: The smell of burning rubber and high-octane fuel.\n\nGames They Don’t Want to Smell:\n\n- Resident Evil: The stench of rotting zombies.\n- Cyberpunk 2077: The gritty, polluted streets of Night City.\n- Minecraft: Smelling creepers and lava might not be pleasant."
        },
        {
            id: 7,
            title: "How Will Developers Use This?",
            description: "Game developers will need to think creatively to use this technology effectively. Here are some potential applications:\n\nStorytelling: Scents can enhance storytelling by setting the mood. For example, the smell of smoke could indicate danger, while lavender might signal a safe area.\n\nPuzzle Solving: Imagine solving puzzles based on smell. You might need to follow the scent of fresh bread to find a hidden bakery.\n\nMultiplayer Games: Scent could add a new layer to multiplayer games. For example, players might need to identify teammates or enemies based on their scent trail."
        },
        {
            id: 8,
            title: "What’s Next for Gaming?",
            description: "Sony’s smell technology is just the beginning. The gaming industry is always evolving, and we can expect even more innovations in the future. Here are some possibilities:\n\nTaste: Could we one day taste food in games? Imagine biting into a virtual burger and actually tasting it.\n\nFull-Body Haptics: Advanced suits could make players feel temperature changes, rain, or wind.\n\nBrain-Computer Interfaces: Technology that connects directly to the brain could allow players to control games with their thoughts."
        },
        {
            id: 9,
            title: "Conclusion",
            description: "Sony’s new smell technology is a bold step forward for gaming. It shows how far we’ve come from the simple visuals and sounds of early games. By adding smell, Sony is making gaming more immersive than ever. While there are challenges to overcome, the potential is enormous.\n\nWhether you’re excited or skeptical, one thing is clear: gaming is about to get a lot more real. Are you ready to smell your way through your favorite games?"
        }
           
             
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-10">
                <header className="text-center mb-10">
                <img
                        src={require('../../assets/images/ps.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    PlayStation's CRAZY New Feature: Smell Your Games!          </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    Sony has always been at the forefront of gaming innovation. From groundbreaking graphics to immersive gameplay, the company has consistently pushed the boundaries of what’s possible. Now, Sony is introducing something truly revolutionary: the ability to smell in-game scents. This crazy new feature is still in its early stages, but it promises to change how we experience video games forever. Let’s dive into the details.
                    </p>
                   
                    <iframe className="mx-auto mt-6 rounded-lg shadow-lg" width="350" height="215"  src="https://www.youtube.com/embed/TaNZPJrFEs8?si=UkP7bh_JEnhxuD8s"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   
                
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


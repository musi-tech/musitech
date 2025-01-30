import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MusiBlog from "../../components/MusiBlog"

const BlogArticle = () => {
    const blogData = [
        {
            "id": 1,
            "title": "How to Fetch an Alexa Ranking with PHP",
            "description": "Have you ever wondered how popular your website is compared to others? Alexa rankings provide a way to measure a site's traffic relative to others. This tutorial will show you how to fetch your website's Alexa ranking using PHP. We will break the process into simple steps, making it easy to follow, even if you're new to PHP and XML handling. In this guide, I'll share personal experiences from my web development journey, real-world applications, and easy-to-understand explanations. By the end, you'll have a working PHP function that retrieves and formats an Alexa rank beautifully.",
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
        {
            "id": 2,
            "title": "Understanding Alexa Ranking",
            "description": "Alexa, owned by Amazon, used to track and compare website traffic. Although Alexa.com shut down in 2022, historical data remains valuable. This tutorial demonstrates how to fetch Alexa ranking using PHP and XML parsing, which was a common practice before its discontinuation. I recall a time when I built a small website for a local business. The client wanted to see how their traffic ranked globally. Using Alexa rankings, we could track progress and optimize SEO strategies. This simple PHP method helped us fetch and display the ranking effortlessly.",
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
        {
            "id": 3,
            "title": "Fetching Alexa Rank with PHP",
            "description": "Step 1: Understanding the XML Source\n\nAlexa provided ranking data in an XML format. The data was retrieved from: \n``http://data.alexa.com/data?cli=10&dat=s&url=yourwebsite.com``\nReplacing `yourwebsite.com` with any domain returned an XML document containing useful data, including ranking information.\nFor example, querying `freightforum.com` returned:\n``xml\n<aws:Alexa>\n  <SD>\n    <POPULARITY URL=\"freightforum.com\" TEXT=\"476504\"/>\n  </SD>\n</aws:Alexa>\n```\nHere, the ranking `476,504` is inside the `POPULARITY` element. Our PHP function will extract this value."
        },
        {
            "id": 4,
            "title": "Step 2: Writing the PHP Function",
            "description": "Let's create a function named `getAlexaRank()`. This function will:\n- Fetch Alexa data using `simplexml_load_file()`.\n- Extract the ranking.\n- Format the number for readability.\n- Return the ranking with an ordinal suffix.\n```php\nfunction getAlexaRank($url) {\n    $alexaURL = \"http://data.alexa.com/data?cli=10&dat=s&url=\" . $url;\n    $xml = simplexml_load_file($alexaURL);\n    if (!$xml) {\n        return \"Could not retrieve Alexa rank.\";\n    }\n    $rank = (int) $xml->SD->POPULARITY['TEXT'];\n    $formattedRank = number_format($rank);\n    $rankWithSuffix = ordinalSuffix($formattedRank);\n    return \"Alexa Rank: \" . $rankWithSuffix;\n}\nfunction ordinalSuffix($number) {\n    $number = (int) str_replace(\",\", \"\", $number);\n    $ends = ['th','st','nd','rd','th','th','th','th','th','th'];\n    if (($number % 100) >= 11 && ($number % 100) <= 13) {\n        return $number . 'th';\n    }\n    return $number . $ends[$number % 10];\n}\n$domain = \"freightforum.com\";\necho getAlexaRank($domain);\n```"
        },
        {
            "id": 5,
            "title": "Step 3: Explaining the Code",
            "description": "1. **Fetching the XML Document**:\n   - We use `simplexml_load_file($alexaURL)` to load the XML from Alexa's servers.\n   - If loading fails, an error message is returned.\n\n2. **Extracting the Ranking**:\n   - We navigate through the XML structure using `$xml->SD->POPULARITY['TEXT']` to get the rank.\n   - Since the value is a string, we convert it to an integer using `(int)`.\n\n3. **Formatting the Number**:\n   - `number_format($rank)` adds commas to make large numbers readable (e.g., `476504` becomes `476,504`).\n\n4. **Adding an Ordinal Suffix**:\n   - The function `ordinalSuffix()` determines whether the rank should end in `st`, `nd`, `rd`, or `th` (e.g., `1st`, `2nd`, `3rd`, `4th`)."
        },
        {
            "id": 6,
            "title": "Step 4: Displaying the Rank",
            "description": "Running this function for `freightforum.com` would output:\n``Alexa Rank: 476,504th``"
        },
        {
            "id": 7,
            "title": "Real-World Use Cases",
            "description": "I once integrated this into a client's dashboard. They had multiple websites and wanted to track their rankings from a single interface. By running the `getAlexaRank()` function periodically, they could monitor progress without visiting external sites. Another use case was during a marketing campaign. By comparing Alexa ranks before and after optimizing content, we measured the effectiveness of SEO efforts."
        },
        {
            "id": 8,
            "title": "Conclusion",
            "description": "Fetching Alexa rankings with PHP is simple yet powerful. By parsing XML data, we can retrieve valuable insights into website popularity. Although Alexa.com is no longer operational, similar techniques apply to other ranking systems.\n\nThis guide aimed to provide:\n- **Clear explanations** of XML parsing in PHP.\n- **Real-life applications** of Alexa ranking.\n- **Formatted and readable** output.\n\nIf you found this helpful, try modifying the function to fetch other metrics. Happy coding!"
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
                        src={require('../../assets/images/alexa.webp')}
                        alt="In-demand tech skills for 2024"
                        className="mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600">
                    How to Fetch an Alexa Ranking with PHP   </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                    Learn how to fetch Alexa rankings using PHP and XML parsing. This step-by-step guide explains how to extract website rankings, format data, and apply it to SEO tracking. Perfect for developers and digital marketers!
                    </p>
                                        <iframe className="mx-auto mt-6 rounded-lg shadow-lg"  src="https://www.youtube.com/embed/4oamL7ndhiI?si=fMeY_M0b7H8ImATj"  width="350" height="215"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   
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


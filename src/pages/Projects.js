import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { FaGithub } from "react-icons/fa";

function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* <div> */}
            <div className=" bg-indigo-50 h-full">
                <div className="bg-full">
                    <div className=" py-6 px-4 ">
                        <h2 className="text-7xl font-font2 font-bold md:text-4xl">
                            My Projects
                        </h2>
                    </div>
                    {/* <div className="h-full w-full">
                            <lottie-player
                                src="https://assets5.lottiefiles.com/packages/lf20_gduz3izv.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                            ></lottie-player>
                        </div> */}
                    <div className="p-10 items-center justify-center bg-indigo-50 ">
                        <div className="grid grid-cols-3 md:grid-cols-1 gap-10 ">
                            {/*--------------------------- projects Start--------------------------------- */}
                            <div>
                                <img
                                    src="images/mobile-app.png"
                                    alt="img"
                                    className="w-full  h-52 border-4 border-gray-600 transition hover:scale-110"
                                />

                                <h1 className="text-1xl font-semibold my-2">
                                    E-commerce Website (ReactJs, Bootstrap,
                                    Redux)
                                </h1>

                                <div className="flex flex-row gap-2">
                                    <a
                                        href="https://mobile-ecommerce-app.vercel.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button
                                            type="button"
                                            className="bg-indigo-200 px-2 border-2 rounded border-gray-700  cursor-pointer"
                                        >
                                            Demo
                                        </button>
                                    </a>
                                    <a
                                        href="https://github.com/shrutishende/mobile-ecommerce-app"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaGithub size={30} className="" />
                                    </a>
                                </div>
                            </div>

                            {/*--------------------------- projects Start--------------------------------- */}
                            <div>
                                <img
                                    src="images/disney+.png"
                                    alt="img"
                                    className="w-full  h-52 border-4 border-gray-600 transition hover:scale-110"
                                />

                                <h1 className="text-1xl font-semibold my-2">
                                    Disney+ clone (ReactJs, firebase login
                                    authentication)
                                </h1>

                                <div className="flex flex-row gap-2">
                                    <a
                                        href="https://disneyplus-clone-21f77.web.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button
                                            type="button"
                                            className="bg-indigo-200 px-2 border-2 rounded border-gray-700  cursor-pointer"
                                        >
                                            Demo
                                        </button>
                                    </a>
                                    <a
                                        href="https://github.com/shrutishende/DisneyClone"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaGithub size={30} className="" />
                                    </a>
                                </div>
                            </div>

                            {/*----------------------------------------------------------------------------- */}

                            <div>
                                <img
                                    src="images/slack.png"
                                    alt="img"
                                    className="w-full  h-52 border-4 border-gray-600 transition hover:scale-110"
                                />

                                <h1 className="text-1xl font-semibold my-2">
                                    Slack clone (ReactJs, Realtime chat
                                    application )
                                </h1>

                                <div className="flex flex-row gap-2">
                                    <a
                                        href="https://slack-clone-2af5b.web.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button
                                            type="button"
                                            className="bg-indigo-200 px-2 border-2 rounded border-gray-700  cursor-pointer"
                                        >
                                            Demo
                                        </button>
                                    </a>
                                    <a
                                        href="https://github.com/shrutishende/slack-clone"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaGithub size={30} className="" />
                                    </a>
                                </div>
                            </div>

                            {/*----------------------------------------------------------------------------- */}

                            <div>
                                <img
                                    src="images/e_commerce.png"
                                    alt="img"
                                    className="w-full h-52 border-4 border-gray-600 transition hover:scale-110"
                                />

                                <h1 className="text-1xl font-semibold my-2">
                                    Javascript-Ecommerce website
                                </h1>

                                <div className="flex flex-row gap-2">
                                    <a
                                        href="https://clothing-site-e-commrce.netlify.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button
                                            type="button"
                                            className="bg-indigo-200 px-2 border-2 rounded border-gray-700 "
                                        >
                                            Demo
                                        </button>
                                    </a>
                                    <a
                                        href="https://github.com/shrutishende/clothing-website-js"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaGithub size={30} className="" />
                                    </a>
                                </div>
                            </div>
                            {/*----------------------------------------------------------------------------- */}
                            <div>
                                <img
                                    src="images/javaScrpt-portfolio.png"
                                    className="w-full  h-52 border-4 border-gray-600 transition hover:scale-110"
                                    alt="img"
                                />

                                <h1 className="text-1xl font-semibold my-2">
                                    Javascript-Portfolio
                                </h1>

                                <div className="flex flex-row gap-2">
                                    <a
                                        href="https://shrutishende-portfolio.netlify.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button
                                            type="button"
                                            className="bg-indigo-200 px-2 border-2 rounded border-gray-700 "
                                        >
                                            Demo
                                        </button>
                                    </a>
                                    <a
                                        href="https://github.com/shrutishende/myportfolio_website"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaGithub size={30} className="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </Layout>
    );
}

export default Projects;

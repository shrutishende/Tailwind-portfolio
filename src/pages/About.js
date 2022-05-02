import React, { useEffect } from "react";
import Layout from "../components/Layout";
import {
    FaCss3,
    FaGithub,
    FaHtml5,
    FaReact,
    FaGitAlt,
    FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss, SiMaterialui } from "react-icons/si";

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <div>
                <div className=" bg-indigo-50 h-screen">
                    <div className="grid grid-cols-2 md:grid-cols-1 h-screen">
                        <div className="font-font2 font-bold mt-16 md:mt-10 ">
                            <h2 className="text-7xl font-font2 font-bold mt-8 ml-32 md:text-4xl md:mt-0">
                                ABOUT ME
                            </h2>
                            <div className="mx-32 tracking-wider leading-loose py-4 mb-5 md:mx-4">
                                <p>
                                    I am Shruti Shende who aims to be able to
                                    find an exciting and challenging entry level
                                    position, alongside a company who
                                    continuously motivate and drive me to do my
                                    best and improve on my skills and abilities
                                    in order to able to assist the company and
                                    achieving its mission and goals.
                                </p>
                                <br></br>
                                <p>
                                    I am creatively curious, self learner
                                    working on improving my skills. I have
                                    ability to produce best result in pressure
                                    situation and ability to work as individual
                                    as well as in group.
                                </p>
                            </div>
                            <a
                                href="/"
                                className="py-2.5 px-5 ml-32 mb-2 mt-16 font-semibold text-gray-900 focus:outline-none bg-indigo-200 rounded-lg border border-gray-500 hover:bg-indigo-50 hover:text-indigo-900  focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white "
                            >
                                SEE MY RESUME
                            </a>
                        </div>

                        <div className="h-1/3 mt-20 md:hidden">
                            <lottie-player
                                src="https://assets1.lottiefiles.com/packages/lf20_uEl2RR.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                    </div>

                    <div className="bg-indigo-50 h-screen">
                        <h2 className="text-7xl font-font2 font-bold float-right mr-72 md:text-4xl md:float-none md:text-center md:mr-0">
                            My Skills
                        </h2>

                        {/*-------- ---------- */}
                        <div className="h-4/6 float-left ml-16 md:hidden">
                            <lottie-player
                                src="https://assets10.lottiefiles.com/packages/lf20_toofqbxc.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                            ></lottie-player>
                        </div>

                        <div className=" py-36 grid grid-cols-4 md:grid-cols-3 md:py-10">
                            <div className="ml-52 md:ml-0">
                                <FaHtml5
                                    size={100}
                                    className=" fill-[#F06529] justify-around animate-bounce"
                                />
                                <h1 className="font-bold font-font2 ml-7">
                                    Html
                                </h1>
                            </div>

                            <div className="ml-64 md:ml-0">
                                <FaJsSquare
                                    size={100}
                                    className=" fill-yellow-300  justify-around md:animate-bounce"
                                />
                                <h1 className="font-bold font-font2 ml-2">
                                    JavaScript
                                </h1>
                            </div>
                            <div className="ml-80 md:ml-0">
                                <FaCss3
                                    size={100}
                                    className=" fill-[#28A4D9] justify-around animate-bounce"
                                />
                                <h1 className="font-bold font-font2 ml-9">
                                    Css
                                </h1>
                            </div>
                            <div className="ml-96 md:ml-0 ">
                                <FaReact
                                    size={100}
                                    className="fill-[#61DBFB] justify-around md:mt-10 md:animate-bounce"
                                />
                                <h1 className="font-bold font-font2 ml-5">
                                    ReactJs
                                </h1>
                            </div>

                            <div className="ml-52 md:ml-0">
                                <SiTailwindcss
                                    size={100}
                                    className=" fill-[#61DBFB] mt-10 justify-around md:animate-bounce"
                                />
                                <h1 className="font-bold font-font2 ml-3">
                                    Tailwind Css
                                </h1>
                            </div>

                            <div className="ml-64 md:ml-0">
                                <SiMaterialui
                                    size={100}
                                    className=" fill-[#0f82fe] mt-10 justify-around animate-bounce"
                                />
                                <h1 className="font-bold font-font2 ml-2">
                                    Material-UI
                                </h1>
                            </div>

                            <div className="ml-80 md:ml-0">
                                <FaGitAlt
                                    size={100}
                                    className=" fill-[#EC4D28] mt-10 justify-around md:animate-bounce "
                                />
                                <h1 className="font-bold font-font2 ml-10">
                                    Git
                                </h1>
                            </div>

                            <div className="ml-96 md:ml-0">
                                <FaGithub
                                    size={100}
                                    className=" fill-black mt-10 justify-around animate-bounce"
                                />
                                <h1 className="font-bold font-font2 ml-5">
                                    Github
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About;

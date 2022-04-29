import React from "react";

import Layout from "../components/Layout";

function Home() {
    return (
        <Layout>
            <div>
                <div className="h-screen bg-indigo-50">
                    <div className="grid md:grid-cols-1 grid-cols-2 h-screen ">
                        <div className="font-bold my-52 ml-36 md:mx-20 ">
                            <h1 className="text-7xl md:text-4xl ">
                                Hi, I am
                                <b className="text-rose-500 py-1"> Shruti</b>
                            </h1>

                            <h1 className="text-5xl py-3 md:text-2xl">
                                <b> React Developer</b>
                            </h1>

                            <h4>Frontend Developer / ReactJs</h4>

                            <a
                                href="/contact"
                                type="button"
                                className="py-2.5 px-5 mr-2 mb-2 mt-4 text-sm font-semibold text-gray-900 focus:outline-none bg-indigo-200 rounded-lg border border-gray-500 hover:bg-indigo-50 hover:text-indigo-900  focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white "
                            >
                                CONTACT ME
                            </a>
                        </div>

                        <div className="h-3/4 mt-16 md:-mt-32 ">
                            <lottie-player
                                src="https://assets6.lottiefiles.com/packages/lf20_t87jfauo.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;

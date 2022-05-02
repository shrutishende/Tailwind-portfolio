import React, { useRef } from "react";
import Layout from "../components/Layout";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Contact() {
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_00yrv8h",
                "template_zd84cwi",
                refForm.current,
                "NzuLz_y95bXM5_yJQ"
            )
            .then(
                () => {
                    alert("Message succsessfully sent!");
                    window.location.reload(false);
                },
                () => {
                    alert("Failed to send the message , please try again.");
                }
            );
    };

    return (
        <Layout>
            <div>
                <div className="bg-indigo-50 h-screen  ">
                    <div>
                        <div>
                            <h1 className="text-6xl md:text-4xl font-font2 font-bold py-2 ml-4 md:text-center md:mt-0">
                                Contact me
                            </h1>

                            <div className="h-1/2 w-1/2 float-right -mt-40  md:hidden ">
                                <lottie-player
                                    src="https://assets7.lottiefiles.com/packages/lf20_kdx6cani.json"
                                    background="transparent"
                                    speed="1"
                                    loop
                                    autoplay
                                ></lottie-player>
                            </div>
                        </div>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <div
                                className="mt-1 mx-6 p-10 shadow-2xl bg-gray-50 w-1/3 md:mx-4 md:p-0 md:w-fit
                 "
                            >
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="Name"
                                    className="w-4/5 border-2 rounded-md border-gray-400 shadow-lg mt-5 md:w-fit md:ml-4 mr-4 "
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="Email"
                                    className="w-4/5 border-2 rounded-md border-gray-400 shadow-lg mt-5 md:w-fit md:ml-4 mr-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    name="Subject"
                                    className="w-4/5 border-2 rounded-md border-gray-400 shadow-lg mt-5 md:w-fit md:ml-4 mr-4"
                                />
                                <textarea
                                    type="text"
                                    placeholder="Message"
                                    name="Subject"
                                    className="w-4/5 border-2 rounded-md border-gray-400 shadow-lg mt-5 md:w-80 md:ml-4 mr-4 "
                                />

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className=" border-2 rounded-md border-gray-500 text-indigo-400 font-font2 font-bold px-4 md:mb-4 md:ml-32 "
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div>
                            <h1 className="text-lg ml-6 font-font2 font-bold mt-5 md:text-center md:text-2xl md:mt-12">
                                Connect with me
                            </h1>
                        </div>
                        <div className="flex flex-row ml-6 mt-4 gap-4 md:ml-28 md:gap-3 ">
                            <a
                                href="http://www.linkedin.com/in/shrutishende"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin
                                    size={28}
                                    className="fill-blue-600"
                                />
                            </a>

                            <a
                                href="http://www.instagram.com/_shruti.shende_"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram
                                    size={28}
                                    className="fill-rose-400"
                                />
                            </a>

                            <a
                                href="https://www.facebook.com/profile.php?id=100004554796150"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebookSquare
                                    size={28}
                                    className="fill-indigo-700"
                                />
                            </a>

                            <a
                                href="http://www.github.com/shrutishende"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub size={28} className="fill-black" />
                            </a>

                            <a
                                href="mailto:shrutishende11@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <IoMail size={30} className="fill-rose-500" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
    const [showMenu, setShowMenu] = useState("md:hidden");

    const menuItems = [
        {
            title: "HOME",
            key: "/",
        },
        {
            title: "ABOUT",
            key: "/about",
        },

        {
            title: "PROJECTS",
            key: "/projects",
        },
        {
            title: "CONTACT",
            key: "/contact",
        },
    ];

    const pathName = window.location.pathname;

    return (
        <div className="text-black-600 overflow-y-hidden sticky top-0 z-50">
            <div
                className={`flex bg-indigo-200 justify-between items-center p-2 shadow-lg ${
                    showMenu === "" && "md:flex-col "
                } `}
            >
                <div className="flex justify-between w-full items-center">
                    <Link to="/">
                        <h1 className="text-4xl font-font1 font-medium mr-2 mt-2 hover:text-rose-500 cursor-pointer">
                            Shruti Shende
                        </h1>
                    </Link>

                    <FaBars
                        onClick={() => {
                            if (showMenu === "md:hidden") {
                                setShowMenu("");
                            } else {
                                setShowMenu("md:hidden");
                            }
                        }}
                        className="lg:hidden xl:hidden 2xl:hidden 3xl:hidden md:flex cursor-pointer"
                    />
                </div>

                {/* Web-View */}

                <div className="flex md:hidden  ">
                    {menuItems.map((item) => {
                        return (
                            <li
                                className={`list-none mx-5 font-font2-300 p-1${
                                    item.key === pathName &&
                                    " bg-indigo-100 text-black rounded-md "
                                }`}
                            >
                                <Link to={`${item.key}`}>{item.title}</Link>
                            </li>
                        );
                    })}
                </div>

                {/* Mobile-View */}

                <div
                    className={`mt-4 md:flex items-center flex-col lg:hidden 2xl:hidden xl:hidden 3xl:hidden ${showMenu}`}
                >
                    {menuItems.map((item) => {
                        return (
                            <li
                                className={`list-none font-font2-300 py-1  ${
                                    item.key === pathName &&
                                    " bg-indigo-100 text-black rounded-md px-4 "
                                }`}
                            >
                                <Link to={`${item.key}`}>{item.title}</Link>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Header;

import React, { useEffect } from "react";
import Header from "./Header";

function Layout({ children }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header />
            <div className="content font-font2 overflow-y-hidden md:overflow-y-scroll">
                {children}
            </div>
        </div>
    );
}

export default Layout;

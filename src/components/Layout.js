import React from "react";
import Header from "./Header";

function Layout({ children }) {
    return (
        <div>
            <Header />
            <div className="content font-font2 overflow-y-hidden overflow-x-hidden overscroll-none">
                {children}
            </div>
        </div>
    );
}

export default Layout;

import React from "react"

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout = ({ children } : MainLayoutProps) => {

    return ( 
        <div
            className="container mx-auto w-full max-w-[1140px] px-5 pb-40 pt-12 md:px-0"
        >
            <main>{children}</main>
        </div>
    );
}

export default MainLayout;
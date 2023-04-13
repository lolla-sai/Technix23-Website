import menuButtons from "@/data/menubuttons";
import modalContext from "@/store/modalContext";
import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import AnimatedButton from "./AnimatedButton";

function Menu() {
    const { navbarOpen, setNavbarOpen } = useContext(modalContext);

    return (
        <div
            style={{
                backgroundImage: "url('/assets/images/Menu/confetti.png')",
            }}
            className="h-screen w-full bg-[#262626] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        >
            <div className="absolute top-10 left-10 z-20">
                {/* <AnimatedButton /> */}
                <AiOutlineClose
                    size={40}
                    color="white"
                    className="cursor-pointer"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                />
            </div>
            <div className="menu flex flex-col gap-6">
                {menuButtons.map(
                    ({ href, title, className, ...additionalProps }) => (
                        <a
                            href={href}
                            className={className}
                            {...additionalProps}
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {title}
                        </a>
                    )
                )}
            </div>
        </div>
    );
}

export default Menu;

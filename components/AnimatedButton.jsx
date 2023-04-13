import modalContext from "@/store/modalContext";
import React, { useContext } from "react";

function AnimatedButton() {
    // {
    //     navbarOpen, setNavbarOpen;
    // }
    // const [navbarOpen, setNavbarOpen] = useState(false);

    const { navbarOpen, setNavbarOpen } = useContext(modalContext);

    return (
        <button
            className="flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
        >
            <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                    className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                        navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                    }`}
                ></span>
                <span
                    className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                        navbarOpen
                            ? "w-0 opacity-50"
                            : "w-5 delay-200 opacity-100"
                    }`}
                ></span>
                <span
                    className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                        navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                    }`}
                ></span>
            </div>
        </button>
    );
}

export default AnimatedButton;

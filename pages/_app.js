import "@/styles/globals.css";
import "@/styles/sponsors.css";
import "@/styles/team.css";
import "@/styles/events.css";
import modalContext from "@/store/modalContext";
import { useState } from "react";
// import "@/styles/register.css";
// import "@/styles/footer.css";

export default function App({ Component, pageProps }) {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <modalContext.Provider
            value={{
                navbarOpen,
                setNavbarOpen,
            }}
        >
            <Component {...pageProps} />
        </modalContext.Provider>
    );
}

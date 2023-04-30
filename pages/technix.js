import Head from "next/head";
import Footer from "@/pagesections/Footer";
import Events from "@/pagesections/Events";
import Hero from "@/pagesections/Hero";
import Countdown from "@/pagesections/Countdown";
import Sponsors from "@/pagesections/Sponsors";
import About from "@/pagesections/About";
import Seminar from "@/pagesections/Seminar";
import Team from "@/pagesections/Team";
import Schedule from "@/pagesections/Schedule";
import Menu from "@/components/Menu";
import { useContext } from "react";
import modalContext from "@/store/modalContext";

function Technix() {
    const { navbarOpen } = useContext(modalContext);

    return (
        <>
            <Head>
                <title>Technix &apos;23 - Home</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <meta property="og:title" content="Technix-2023 />
                <meta property="og:url" content="https://www.cursor.org.in/technix/" />
                <meta property="og:image" content="https://i.ibb.co/sK5hDH9/Hero.png />
            </Head>

            {navbarOpen && (
                <div className="modal h-full w-full fixed inset-0 z-50">
                    <Menu />
                </div>
            )}

            <main>
                <Hero />

                <Countdown />

                <About />

                <Events />

                <Seminar />

                <Schedule />

                <Sponsors />

                <Team />

                <Footer />
            </main>
        </>
    );
}

export default Technix;

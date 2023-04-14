import Head from "next/head";
import Footer from "@/pagesections/Footer";
import Events from "@/pagesections/Events";
import Hero from "@/pagesections/Hero";
import Countdown from "@/pagesections/Countdown";
import Sponsors from "@/pagesections/Sponsors";
import About from "@/pagesections/About";
import Team from "@/pagesections/Team";
// import Schedule from "@/pagesections/Schedule";
import Menu from "@/components/Menu";
import { useContext } from "react";
import modalContext from "@/store/modalContext";

function Index() {
    const { navbarOpen } = useContext(modalContext);

    return (
        <>
            <Head>
                <title>Technix &apos;23 - Home</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
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

                {/* <Schedule /> */}

                <Sponsors />

                {/* <Team /> */}

                <Footer />
            </main>
        </>
    );
}

export default Index;

import Head from "next/head";
import Footer from "../components/Footer";
import Events from "@/pagesections/Events";
import Hero from "@/pagesections/Hero";
import Countdown from "@/pagesections/Countdown";
import Sponsors from "@/pagesections/Sponsors";
import About from "@/pagesections/About";
import Team from "@/pagesections/Team";

function Index() {
    return (
        <>
            <Head>
                <title>Technix &apos;23 - Home</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
            </Head>

            <Hero />

            <Countdown />

            <Sponsors />

            <About />

            <Team />

            <Events />

            <Footer />
        </>
    );
}

export default Index;

import Head from "next/head";
import Footer from "@/pagesections/Footer";
import Events from "@/pagesections/Events";
import Hero from "@/pagesections/Hero";
import Countdown from "@/pagesections/Countdown";
import Sponsors from "@/pagesections/Sponsors";
import About from "@/pagesections/About";
import Team from "@/pagesections/Team";
import AboutNew from "@/pagesections/AboutNew";
import AboutSai from "@/pagesections/AboutSai";

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

            {/* <About /> */}
            {/* <AboutNew /> */}
            <AboutSai />

            <Events />

            <Sponsors />

            <Team />

            {/* <Footer /> */}
            <Footer />
        </>
    );
}

export default Index;

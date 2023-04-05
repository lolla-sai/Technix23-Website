import React, { useEffect, useState } from "react";
import { Inter, Montserrat, Poppins, Londrina_Solid } from "next/font/google";
import Image from "next/image";
import heroImage from "../public/hero illustration.svg";
import sponsorsWave from "../public/Wave.svg";
import HeroText from "@/components/HeroText";
import TimerSlice from "@/components/TimerSlice";
import Center from "@/components/Center";
import Carousel from "@/components/Carousel";
import slides from "@/data/slides";
import Head from "next/head";
import Link from "next/link";
import Sponsor from "@/components/Sponsor";
import AccopsLogo from "../public/sponsors/Accops.png";
import TeamMember from "@/components/TeamMember";
import members from "@/data/members";
import Footer from "@/components/Footer";
// import "globals.css";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const londrinasolid = Londrina_Solid({
    weight: "400",
    fallback: ["Calibri", "Arial", "sans-serif"],
    subsets: ["latin"],
});
// const inter = Inter({
//     weight: "800",
//     fallback: ["Calibri", "Arial", "sans-serif"],
//     subsets: ["latin"],
// });

// const montserrat = Poppins({
//     weight: "400",
//     subsets: ["latin"],
// });

function index() {
    const [image, setImage] = useState(slides[0].url);
    const [date, setDate] = useState(Date.now() + 10000);
    const [delta, setDelta] = useState({
        days: 10,
        hours: 10,
        minutes: 10,
        seconds: 10,
    });

    var countDownDate = new Date("Apr 20, 2023").getTime();

    useEffect(() => {
        setInterval(() => {
            var now = new Date().getTime();
            var timeleft = countDownDate - now;

            var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            var hours = Math.floor(
                (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var minutes = Math.floor(
                (timeleft % (1000 * 60 * 60)) / (1000 * 60)
            );
            var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

            setDelta({
                days,
                hours,
                minutes,
                seconds,
            });
        }, 1000);
    }, [setDelta]);

    return (
        <>
            <Head>
                <title>Technix '23 - Home</title>
            </Head>

            <section
                className="section-1 bg-[#010027] min-h-screen grid place-items-center select-none"
                style={{ willChange: "transform", position: "relative" }}
            >
                <Image
                    src={heroImage}
                    className="w-full h-full object-cover absolute will-change-transform -z-10 inset-0"
                    priority
                    quality={100}
                />

                <div className="Title-Window T-1">
                    <HeroText
                        text="TECHNIX 2023"
                        className={londrinasolid.className}
                    />
                </div>
            </section>

            <section id="sect2" className="countdown p-8 bg-[#010027]">
                <Center>
                    <div className="flex items-center gap-4 text-white my-28">
                        <TimerSlice number={delta.days} unit="days" />
                        <span className="text-5xl font-bold">:</span>
                        <TimerSlice number={delta.hours} unit="hours" />
                        <span className="text-5xl font-bold">:</span>
                        <TimerSlice number={delta.minutes} unit="mins" />
                        <span className="text-5xl font-bold">:</span>
                        <TimerSlice number={delta.seconds} unit="seconds" />
                    </div>
                </Center>
            </section>

            <section className="aboutTechnix px-8 py-16">
                {/* <Center></Center> */}
                <main className="h-screen max-w-[1400px] mx-auto">
                    <div className="flex">
                        <div className="h-[50vh] w-1/2 px-4">
                            <h2 className="text-center mt-3 mb-5 px-2 text-5xl font-bold">
                                About Technix
                            </h2>
                            <p className="px-2 my-3 text-sm">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Velit repudiandae sint
                                accusantium eligendi eius reiciendis culpa
                                asperiores accusamus. Doloremque ratione
                                blanditiis tempore et, debitis amet magni
                                accusamus quod suscipit eaque. Commodi excepturi
                                doloremque consectetur sapiente similique unde
                                voluptatem voluptatibus laborum doloribus
                                architecto vero, eaque sunt harum mollitia
                                tempora, accusamus exercitationem!
                            </p>
                        </div>
                        <img
                            src={image}
                            className="w-1/2 h-[50vh] border object-contain"
                            loading="true"
                        />
                    </div>
                    <Carousel image={image} setImage={setImage} />
                </main>
            </section>

            <section id="sponsors" className="bg-[#FF6237] p-8">
                <HeroText
                    text="Our Sponsors"
                    className={
                        londrinasolid.className +
                        " text-md-7xl text-5xl mx-auto w-fit my-12"
                    }
                    // textStyles={{ fontSize: "20rem" }}
                />

                <h1
                    className={
                        londrinasolid.className +
                        " text-4xl text-center text-white"
                    }
                >
                    Title Sponsors
                </h1>
                <div className="s_shell d-flex my-5 mb-5">
                    <Sponsor
                        webLink="https://www.accops.com/"
                        icon={AccopsLogo}
                    />

                    <Sponsor
                        webLink="https://oneshield.com/"
                        icon={
                            "https://oneshield.com/wp-content/uploads/2022/10/OS_logo_new.svg"
                        }
                    />
                    <Sponsor
                        webLink="https://sjinnovation.com/"
                        icon={
                            "https://sjinnovation.com/themes/custom/sji_theme/logo.svg"
                        }
                    />
                </div>

                <h1
                    className={
                        londrinasolid.className +
                        " text-4xl text-center text-white"
                    }
                >
                    Co-Sponsors
                </h1>
                <div class="s_shell d-flex my-5 mb-5">
                    <Sponsor
                        webLink="https://www.accops.com/"
                        icon={AccopsLogo}
                    />

                    <Sponsor
                        webLink="https://oneshield.com/"
                        icon={
                            "https://oneshield.com/wp-content/uploads/2022/10/OS_logo_new.svg"
                        }
                    />
                </div>
            </section>
            {/* <Image src={sponsorsWave} className="w-full h-28 object-fill" /> */}

            <section id="team" className="p-12 py-16 bg-black">
                <HeroText
                    text="The Team"
                    className={
                        londrinasolid.className +
                        " text-md-7xl text-5xl mx-auto w-fit my-12"
                    }
                    // textStyles={{ fontSize: "20rem" }}
                />
                <div className="flex flex-wrap items-center justify-center gap-5">
                    {members.map((member) => (
                        <TeamMember {...member} key={member.bio} />
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}

export default index;

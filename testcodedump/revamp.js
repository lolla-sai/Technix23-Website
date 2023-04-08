import slides from "@/data/slides";
import Head from "next/head";
import Image from "next/image";
import heroImage from "../public/hero illustration.svg";
import HeroText from "../components/HeroText";
import { londrinasolid } from "@/data/fonts";
import Center from "@/components/Center";
import TimerSlice from "@/components/TimerSlice";
const { useState, useEffect } = require("react");
import countDownLeftLeaf from "@/public/assets/images/countdown-left_leaf.png";
import countDownRightLeaf from "@/public/assets/images/countdown-right_leaf.png";
import inaug from "@/public/assets/images/Inaug Main.jpg";
import Events from "@/components/Events";
import Sponsors from "@/components/Sponsors";
import FooterPage from "@/components/Footer";

function Index() {
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
                <title>Technix &apos;23 - Home</title>
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

            <section
                id="sect2"
                className="countdown p-8 bg-[#010027] relative overflow-hidden"
            >
                <Image
                    src={countDownLeftLeaf}
                    className="absolute h-full top-[20%] left-[-5%] object-fill"
                    quality={100}
                />
                <Image
                    src={countDownRightLeaf}
                    className="absolute h-full top-[-15%] right-[-10%] object-fill"
                    quality={100}
                />
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

            <section className="aboutTechnix px-8 py-20 bg-[#FFB808]">
                {/* <Center></Center> */}
                <main className="max-w-[1400px] mx-auto">
                    <div className="flex items-center justify-center">
                        <div className="px-4">
                            <h2
                                className=" mt-3 mb-5 px-2 text-6xl font-bold"
                                style={londrinasolid.style}
                            >
                                About Technix
                            </h2>
                            <p className="px-2 my-3 max-w-prose">
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
                        <Image src={inaug} className="w-1/2" />
                    </div>
                </main>
            </section>

            <section className="px-8 py-20 bg-[#fbf2e5]">
                <Events />
            </section>

            <section className="sponsors bg-[#FF6237] py-8 ">
                <Sponsors />
            </section>

            <section>
                <FooterPage />
            </section>
        </>
    );
}

export default Index;

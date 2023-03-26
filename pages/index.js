import React, { useState } from "react";
import { Inter, Montserrat, Poppins, Londrina_Solid } from "next/font/google";
import Image from "next/image";
import heroImage from "../public/hero illustration.svg";
import HeroText from "@/components/HeroText";
import TimerSlice from "@/components/TimerSlice";
import Center from "@/components/Center";
import Carousel from "@/components/Carousel";
import slides from "@/data/slides";
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

    return (
        <>
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
                        <TimerSlice number="41" unit="days" />
                        <span className="text-5xl font-bold">:</span>
                        <TimerSlice number="17" unit="hours" />
                        <span className="text-5xl font-bold">:</span>
                        <TimerSlice number="28" unit="mins" />
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
        </>
    );
}

export default index;

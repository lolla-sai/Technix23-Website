import React from "react";
import Image from "next/image";
import heroImage from "@/public/hero illustration.svg";
import HeroText from "@/components/HeroText";
import { londrinasolid } from "@/data/fonts";

function Hero() {
    return (
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
    );
}

export default Hero;

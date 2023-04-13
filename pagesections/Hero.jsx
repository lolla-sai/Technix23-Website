import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import heroImage from "@/public/hero illustration.svg";
import HeroText from "@/components/HeroText";
import { londrinasolid } from "@/data/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Hero() {
    let levs = useRef(null);
    let heroT = useRef(null);
    let T = useRef(null);

    useLayoutEffect(() => {
        gsap.defaults({ ease: "none" });
        gsap.registerPlugin(ScrollTrigger);

        gsap.timeline({
            defaults: { duration: 2, ease: "none" },
            scrollTrigger: {
                trigger: ".HRO",
                start: "+=10% top",
                end: "+80% bottom",
                // markers:true,
                scrub: 1,
                pin: true,
                pinSpacing: false,
            },
        })
            .fromTo(heroT.current, { opacity: 1 }, { scale: 0, opacity: 0 })
            .fromTo(
                T.current,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1 }
            );

        gsap.timeline({
            defaults: { duration: 3, ease: "none" },
            scrollTrigger: {
                trigger: ".HRO",
                start: "+=20% top",
                end: "+=70% bottom",
                // markers:true,
                pinSpacing: false,
                scrub: 1,
                pin: levs.current,
                snap: 2,
            },
        }).fromTo(
            levs.current,
            { scale: 1, zIndex: 10 },
            { scale: 1.2, opacity: 0, display: "block", zIndex: "-10" }
        );

        return () => {
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <>
            <section>
                <Image
                    src={heroImage}
                    className="Leaves w-full h-full object-cover fixed will-change-transform inset-y-0"
                    priority
                    quality={100}
                    ref={levs}
                />
            </section>

            <section class="bg-[#010027] min-h-screen grid place-items-center select-none z-0 inset-y-0 absolute top-0 w-full h-full HRO ">
                <div
                    className="section-1"
                    style={{ willChange: "transform", position: "relative" }}
                >
                    <div className="T-1" ref={heroT}>
                        <h3
                            className={
                                "text-center md:text-4xl text-xl font-bold text-[#FCEAB9] " +
                                londrinasolid.className
                            }
                        >
                            April 20-21, 2023
                        </h3>
                        <HeroText
                            text="TECHNIX 2023"
                            className={`${londrinasolid.className} S1 !text-[#B2D600]`}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;

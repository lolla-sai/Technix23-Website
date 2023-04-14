import { londrinasolid } from "@/data/fonts";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import heroImage from "../public/hero illustration.svg";
import HeroText from "@/components/HeroText";
import slides from "@/data/slides";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Hero() {
    const [image, setImage] = useState(slides[0].url);
    let levs = useRef(null);
    let heroT = useRef(null);
    let T = useRef(null);
    let Tcontain = useRef(null);

    useEffect(() => {
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

        // gsap.timeline({
        //     defaults:{duration:1,ease:'none'},
        //     scrollTrigger:{
        //         trigger:levs.current,
        //         start:"+=10% top",
        //         end:"+30% bottom",
        //         // markers:true,
        //         scrub:1,
        //         pin:true,
        //         pinSpacing:false,

        //     }
        // })

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
            { scale: 1 },
            { scale: 1.2, opacity: 0, display: "block" }
        );
    });

    return (
        <>
            <section>
                <Image
                    src={heroImage}
                    className="Leaves w-full h-full object-cover fixed will-change-transform z-10 inset-y-0"
                    priority
                    quality={100}
                    ref={levs}
                />
            </section>

            <section className="bg-[#010027] min-h-screen grid place-items-center select-none z-0 inset-y-0 absolute top-0 w-full h-full HRO ">
                <div
                    className="section-1"
                    style={{ willChange: "transform", position: "relative" }}
                >
                    <div className="T-1" ref={heroT}>
                        <HeroText
                            text="TECHNIX 2023"
                            className={`${londrinasolid.className} S1`}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;

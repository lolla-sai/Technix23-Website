import HeroText from "@/components/HeroText";
import { londrinasolid } from "@/data/fonts";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
function AboutSai() {
    useEffect(() => {
        

        gsap.defaults({ease:"none"});
        gsap.registerPlugin(ScrollTrigger);

        gsap.timeline({
            scrollTrigger:{
                trigger:".EventTrans",
                start:"+=10% top",
                end:"+=100%",
                // markers:true,
                scrub:1,
                toggleActions:"reverse",
                pin:true,
                pinSpacing:false,
                snap:".EventTrans"
                
            }
        })
        .fromTo(".EventTrans",{y:0 },{rotate:-20,y:0,scale:2})
        // .to(".EventTrans",{display:"block"})

    

    });
    
    return (
        <div className="bg-[#FFBF42] overflow-hidden relative w-full flex items-center justify-center min-h-screen px-6 EventTrans origin-center will-change-transform ">
            <div
                style={{
                    width: `clamp(180px, 25vw, 380px)`,
                    height: `clamp(180px, 25vw, 380px)`,
                }}
                className="absolute top-0 left-0"
            >
                <Image
                    src="/assets/images/Sponsors/mask outline.png"
                    fill
                    className="object-contain"
                />
            </div>
            <div
                style={{
                    width: `clamp(180px, 25vw, 380px)`,
                    height: `clamp(180px, 25vw, 380px)`,
                }}
                className="absolute bottom-0 left-0 translate-x-1/4 translate-y-1/4"
            >
                <Image
                    src="/assets/images/Sponsors/mask outline 4.png"
                    fill
                    className="object-contain"
                />
            </div>
            <div
                style={{
                    width: `clamp(180px, 25vw, 380px)`,
                    height: `clamp(180px, 25vw, 380px)`,
                }}
                className="absolute bottom-0 right-0 z-20 translate-x-[15%] translate-y-[15%]"
            >
                <Image
                    src="/assets/images/Sponsors/mask outline 2.png"
                    fill
                    className="object-contain"
                />
            </div>

            <div className="absolute w-[180px] h-[100px] md:w-[230px] md:h-[180px] lg:w-[330px] lg:h-[230px] top-0 left-0 rotate-[-20deg]">
                <Image
                    src={"/assets/images/AboutNew/image1.png"}
                    alt="Image"
                    className="object-cover relative left-60 border-8 border-[#FFE198]"
                    fill
                />
            </div>

            <div className="absolute w-[180px] h-[100px] md:w-[230px] md:h-[180px] lg:w-[330px] lg:h-[230px] top-0 right-0 rotate-[-17deg]">
                <Image
                    src={"/assets/images/AboutNew/image3.png"}
                    alt="Image"
                    className="object-cover relative right-60 border-8 border-[#FFE198]"
                    // style={{ transform: "rotate(-17deg)" }}
                    fill
                />
            </div>

            <div className="absolute w-[180px] h-[100px] md:w-[230px] md:h-[180px] lg:w-[330px] lg:h-[230px] bottom-0 left-0 rotate-[15deg]">
                <Image
                    src={"/assets/images/AboutNew/image2.png"}
                    alt="Image"
                    className="object-cover mx-auto border-8 border-[#FFE198]"
                    // style={{ transform: "rotate(15deg)" }}
                    fill
                />
            </div>

            <div className="absolute w-[180px] h-[100px] md:w-[230px] md:h-[180px] lg:w-[330px] lg:h-[230px] bottom-0 right-0 rotate-[-15deg]">
                <Image
                    src={"/assets/images/AboutNew/image4.png"}
                    alt="Image"
                    className="object-cover mx-auto border-8 border-[#FFE198]"
                    // style={{ transform: "rotate(15deg)" }}
                    fill
                />
            </div>

            <div className="absolute w-[180px] h-[100px] md:w-[230px] md:h-[180px] lg:w-[330px] lg:h-[230px] top-0 left-1/2 -translate-x-1/2 -translate-y-[30%] rotate-[-15deg]">
                <Image
                    src={"/assets/images/AboutNew/image4.png"}
                    alt="Image"
                    className="object-cover mx-auto border-8 border-[#FFE198]"
                    // style={{ transform: "rotate(15deg)" }}
                    fill
                />
            </div>

            <div className="absolute w-[180px] h-[100px] md:w-[230px] md:h-[180px] lg:w-[330px] lg:h-[230px] bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] rotate-[-15deg]">
                <Image
                    src={"/assets/images/AboutNew/image4.png"}
                    alt="Image"
                    className="object-cover mx-auto border-8 border-[#FFE198]"
                    // style={{ transform: "rotate(15deg)" }}
                    fill
                />
            </div>

            <div>
                <div className="max-w-5xl">
                    <HeroText
                        text="About Technix"
                        inverted
                        className={
                            londrinasolid.className +
                            " md:text-4xl whitespace-nowrap text-2xl mx-auto w-fit mb-4 md:mb-10 lg:mb-16"
                        }
                        // textStyles={{ fontSize: "20rem" }}
                    />
                    <p className="md:text-lg max-w-[75%] mx-auto font-satoshi font-[500] text-center">
                        Technix, an annual event organized and hosted by the
                        Computer Engineering Department of Goa College of
                        Engineering. The event houses various competitions
                        wherein students from across Goa compete and showcase
                        their technical knowledge while also immersing
                        themselves in other fun events. In this year's edition,
                        Technix brings to you a set of new and exciting events
                        from the 20th to the 21th Of April 2023.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutSai;

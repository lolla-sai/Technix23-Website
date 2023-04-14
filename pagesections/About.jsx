import AnimatedButton from "@/components/AnimatedButton";
import HeroText from "@/components/HeroText";
import MiniProp from "@/components/MiniProp";
import PositionedImage from "@/components/PositionedImage";
import { londrinasolid } from "@/data/fonts";
import modalContext from "@/store/modalContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { GiDiamonds, GiHamburgerMenu } from "react-icons/gi";
import { BsFillDiamondFill, BsFlower1 } from "react-icons/bs";

const props = [
    {
        className: "top-[60%] left-[20%] -z-10",
        size: 40,
        color: "#FFEAB8",
        PropIcon: BsFlower1,
    },
    {
        className: "top-[35%] left-[20%] -z-10",
        size: 30,
        color: "#FFEAB8",
        PropIcon: BsFillDiamondFill,
    },
    {
        className: "top-[65%] right-[20%] -z-10",
        size: 20,
        color: "#FFEAB8",
        PropIcon: GiDiamonds,
    },
];

function About() {
    const { navbarOpen, setNavbarOpen } = useContext(modalContext);

    useEffect(() => {
        gsap.defaults({ ease: "none" });
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.matchMedia({

            "(max-width: 767px)": function() {
            gsap.timeline({
                scrollTrigger:{
                    trigger:".EventTrans",
                    start:"1% top",
                    end:"+=100%",
                    // markers:true,
                    scrub:1,
                    toggleActions:"reverse",
                    pin:true,
                    pinSpacing:false,
                    snap:".EventTrans"   
                }
                
            })
            .fromTo(".EventTrans",{y:0 },{y:0,scale:1.2,rotate:0})
        },

        "(min-width: 768px) and (max-width: 1024px)": function() {
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
            .fromTo(".EventTrans",{y:0 },{rotate:-20,y:0,scale:0.5})
        },

        
        "(min-width: 1024px)": function() {
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
            .fromTo(".EventTrans",{y:0 },{rotate:-20,y:0,scale:0.5})
        }

        })

        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".EventTrans",
        //         start: "+=10% top",
        //         end: "+=100%",
        //         // markers:true,
        //         scrub: 1,
        //         toggleActions: "reverse",
        //         pin: true,
        //         pinSpacing: false,
        //         snap: ".EventTrans",
        //     },
        // }).fromTo(".EventTrans", { y: 0 }, { rotate: -20, y: 0, scale: 2 });
        // .to(".EventTrans",{display:"block"})
    }, []);

    return (
        <div className="w-full h-screen overflow-hidden">
            <div
                className="bg-[#FFBF42] overflow-hidden relative w-full flex items-center justify-center min-h-screen px-6 EventTrans origin-center will-change-transform transform-gpu"
                id="about"
            >
                <div className="absolute top-10 left-10 z-20">
                    {/* <AnimatedButton /> */}
                    <GiHamburgerMenu
                        size={40}
                        color="white"
                        className="cursor-pointer"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    />
                </div>

                <PositionedImage
                    containerClasses="top-[30%] left-[25%] w-[25vw] min-w-[180px] max-w-[380px] h-[25vw] min-h-[180px] max-h-[380px]"
                    src="/assets/images/Sponsors/mask outline.png"
                    alt="mask outline"
                />

                <PositionedImage
                    containerClasses="top-[90%] left-[25%] w-[25vw] min-w-[180px] max-w-[380px] h-[25vw] min-h-[180px] max-h-[380px]"
                    src="/assets/images/Sponsors/mask outline 4.png"
                    alt="mask outline"
                />

                <PositionedImage
                    containerClasses="top-1/2 left-[90%] w-[25vw] min-w-[180px] max-w-[380px] h-[25vw] min-h-[180px] max-h-[380px]"
                    src="/assets/images/Sponsors/mask outline 2.png"
                    alt="mask outline"
                />

                {props.map((prop) => (
                    <MiniProp className={prop.className}>
                        <prop.PropIcon size={prop.size} color={prop.color} />
                    </MiniProp>
                ))}

                <div className="absolute w-[180px] h-[100px] md:w-[230px] md:h-[180px] lg:w-[330px] lg:h-[230px] top-[15%] left-[-10%] md:-top-5 md:left-0 rotate-[-20deg]">
                    <Image
                        src={"/assets/images/AboutNew/about1.png"}
                        alt="Image"
                        className="object-cover relative left-60 border-8 border-[#FFE198] rounded-3xl"
                        fill
                    />
                </div>

                <div className="absolute w-[180px] h-[100px] md:w-[230px] md:h-[180px] lg:w-[330px] lg:h-[230px] top-[10%] right-[-10%] md:top-0 md:right-0 rotate-[-17deg]">
                    <Image
                        src={"/assets/images/AboutNew/about3.png"}
                        alt="Image"
                        className="object-cover relative right-60 border-8 border-[#FFE198] rounded-3xl"
                        fill
                    />
                </div>

                <div className="absolute w-[180px] h-[100px] md:w-[230px] md:h-[180px] lg:w-[330px] lg:h-[230px] bottom-[10%] left-[-10%] md:bottom-0 md:left-0 rotate-[15deg]">
                    <Image
                        src={"/assets/images/AboutNew/about2.png"}
                        alt="Image"
                        className="object-cover mx-auto border-8 border-[#FFE198] rounded-3xl"
                        fill
                    />
                </div>

                <div className="absolute w-[180px] h-[100px] md:w-[230px] md:h-[180px] lg:w-[330px] lg:h-[230px] bottom-[10%] right-[-10%] md:bottom-0 md:right-0 rotate-[-15deg]">
                    <Image
                        src={"/assets/images/AboutNew/about4.png"}
                        alt="Image"
                        className="object-cover mx-auto border-8 border-[#FFE198] rounded-3xl"
                        fill
                    />
                </div>

                <div className="absolute w-[180px] h-[100px] md:w-[230px] md:h-[180px] lg:w-[330px] lg:h-[230px] top-0 left-1/2 -translate-x-1/2 -translate-y-[30%] rotate-[-15deg]">
                    <Image
                        src={"/assets/images/AboutNew/about5.png"}
                        alt="Image"
                        className="object-cover mx-auto border-8 border-[#FFE198] rounded-3xl"
                        fill
                    />
                </div>

                <div className="absolute w-[180px] h-[100px] md:w-[230px] md:h-[180px] lg:w-[330px] lg:h-[230px] bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] rotate-[-15deg]">
                    <Image
                        src={"/assets/images/AboutNew/about6.png"}
                        alt="Image"
                        className="object-cover mx-auto border-8 border-[#FFE198] rounded-3xl"
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
                            wherein students from across Goa compete and
                            showcase their technical knowledge while also
                            immersing themselves in other fun events. In thii
                            year's edition, Technix brings to you a set of new
                            and exciting events from the 20th to the 21th Of
                            April 2023.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

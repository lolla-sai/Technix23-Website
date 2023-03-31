import React, { useState, useEffect, useRef } from "react";
import { Inter, Montserrat, Poppins, Londrina_Solid } from "next/font/google";
import Image from "next/image";
import heroImage from "../public/hero illustration.svg";
import HeroText from "@/components/HeroText";
import TimerSlice from "@/components/TimerSlice";
import Center from "@/components/Center";
import Carousel from "@/components/Carousel";
import slides from "@/data/slides";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import HeroFnt from '../styles/FontsStyle.module.css';

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
    let levs=useRef(null); 
    let heroT=useRef(null); 
    let T=useRef(null); 
    let Tcontain=useRef(null); 

    useEffect(() => {
        

        gsap.defaults({ease:"none"});
        gsap.registerPlugin(ScrollTrigger);

        // gsap.timeline({
        //     defaults:{duration:1,ease:'none'},
        //     scrollTrigger:{
        //         trigger:levs.current,
        //         start:"+=60% top",
        //         end:"bottom bottom",
        //         // markers:true,
        //         scrub:1,
        //         pin:true,
        //         snap:1,
        //         pinSpacing:false,
              
        //     }
        // })
       


        gsap.timeline({
            defaults:{duration:2,ease:'none'},
            scrollTrigger:{
                trigger:levs.current,
                start:"+=10% top",
                end:"+20% bottom",
                // markers:true,
                scrub:1,
                pin:true,
                pinSpacing:false,
              
            }
        })
        .fromTo(heroT.current,{opacity:1},{scale:1.2,opacity:0})
        .fromTo(T.current,{scale:0,opacity:0},{scale:1,opacity:1})


        gsap.timeline({
            defaults:{duration:1,ease:'none'},
            scrollTrigger:{
                trigger:levs.current,
                start:"+=10% top",
                end:"+30% bottom",
                // markers:true,
                scrub:1,
                pin:true,
                pinSpacing:false,
              
            }
        })
        .to(Tcontain.current,{y:'-50%'})

        gsap.timeline({
            defaults:{duration:3,ease:'none'},
            scrollTrigger:{
                trigger:levs.current,
                start:"+=20% top",
                end:"+=100% bottom",
                // markers:true,
                pinSpacing:false,
                scrub:1,
                pin:true,
                snap:2,
            }
        })
        .fromTo(levs.current,{scale:1},{scale:1.2,opacity:0, display:'block'})


       

    });

    return (
        <>
        

          <section class="bg-[#010027] min-h-screen grid place-items-center select-none z-0 inset-y-0">
        
            <div className="section-1"
                style={{ willChange: "transform", position: "relative" }}
                >

                <div className="T-1 text-white"     ref={heroT}>
                    <HeroText
                        text="TECHNIX 2023"
                        className={londrinasolid.className}
                    />
                </div>
            </div>

          </section>


            <section id="sect2" className="countdown p-6 bg-[#010027] z-20"  ref={Tcontain}>
                <Center>
                    <div className="flex items-center gap-4 text-white my-28"  ref={T}>
                        <TimerSlice number="41" unit="days" />
                        <span className="text-5xl font-bold">:</span>
                        <TimerSlice number="17" unit="hours" />
                        <span className="text-5xl font-bold">:</span>
                        <TimerSlice number="28" unit="mins" />
                    </div>
                </Center>
            </section>

        
           

            <section className="aboutTechnix px-8 py-16 z-20">
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

            <section>
            <Image
                    src={heroImage}
                    className="Leaves w-full h-full object-cover fixed will-change-transform z-10 inset-y-0"
                    priority
                    quality={100}
                    ref={levs}
            />
            </section>
        </>
    );
}

export default index;

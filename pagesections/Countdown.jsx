import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import TimerSlice from "@/components/TimerSlice";
import Center from "@/components/Center";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Countdown() {
    const [delta, setDelta] = useState({
        days: 10,
        hours: 10,
        minutes: 10,
        seconds: 10,
    });
    const comp = useRef(null);

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

    useLayoutEffect(() => {
        gsap.defaults({ ease: "none" });
        gsap.registerPlugin(ScrollTrigger);

        gsap.timeline({
            defaults: { duration: 3, ease: "none" },
            scrollTrigger: {
                trigger: ".SC2",
                start: "-=50% top",
                end: "bottom bottom",
                // markers:true,
                pinSpacing: false,
                scrub: 1,
                pin: true,
                snap: ".SC2",
            },
        }).fromTo(".CT", { scale: 0 }, { scale: 1 });
        // let ctx = gsap.context(() => {
        //     gsap.timeline({
        //         defaults: { duration: 3, ease: "none" },
        //         scrollTrigger: {
        //             trigger: ".SC2",
        //             start: "-=50% top",
        //             end: "bottom bottom",
        //             // markers:true,
        //             pinSpacing: false,
        //             scrub: 1,
        //             pin: true,
        //             snap: ".SC2",
        //         },
        //     }).fromTo(".CT", { scale: 0 }, { scale: 1 });
        // }, comp);

        return () => {
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <>
            {/* <section
            id="sect2"
            className="countdown py-4 md:py-8 bg-[#010027] relative overflow-hidden"
        >
            <div className="absolute lg:w-[380px] md:w-60 w-28 h-1/2 md:h-full bottom-[-10%] left-[-5%]">
                <Image
                    src="/assets/images/Countdown/countdown-left_leaf.png"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="absolute lg:w-[410px] md:w-60 w-28 h-1/2 md:h-full top-[-15%] right-[-6%]">
                <Image
                    fill
                    src="/assets/images/Countdown/countdown-right_leaf.png"
                    className="object-contain"
                />
            </div>

            <Center>
                <div className="flex items-center gap-4 text-white my-14 md:my-28 z-20">
                    <TimerSlice number={delta.days} unit="days" />
                    <span className="text-5xl font-bold">:</span>
                    <TimerSlice number={delta.hours} unit="hours" />
                    <span className="text-5xl font-bold">:</span>
                    <TimerSlice number={delta.minutes} unit="mins" />
                    <span className="text-5xl font-bold">:</span>
                    <TimerSlice number={delta.seconds} unit="seconds" />
                </div>
            </Center>
        </section> */}

            <section
                id="sect2"
                className="countdown py-4 md:py-8 bg-[#010027] relative overflow-hidden mt-[-10%] z-0 SC2"
                ref={comp}
            >
                <div className="absolute lg:w-[380px] md:w-60 w-28 h-1/2 md:h-full bottom-[-10%] left-[-5%]">
                    <Image
                        src="/assets/images/Countdown/countdown-left_leaf.png"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="absolute lg:w-[410px] md:w-60 w-28 h-1/2 md:h-full top-[-15%] right-[-6%]">
                    <Image
                        fill
                        src="/assets/images/Countdown/countdown-right_leaf.png"
                        className="object-contain"
                    />
                </div>

                <Center>
                    <div className="flex items-center gap-4 text-white my-14 md:my-28 z-20 CT">
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
        </>
    );
}

export default Countdown;

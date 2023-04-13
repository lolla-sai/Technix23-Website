import React, { useEffect } from "react";
import eventCardsData from "@/data/events";
import Link from "next/link";
import { londrinasolid } from "@/data/fonts";
import SingleEventCard from "@/components/SingleEventCard";
import HeroText from "@/components/HeroText";
import Image from "next/image";
import Button from "@/components/Button";

function Events() {
    useEffect(() => {
        if (window.innerWidth > 450) {
            let eventSlider = document.getElementById("event_slider");
            eventSlider.addEventListener("scroll", onScrollEvent);

            // Moves the skull when the event slider is scrolled
            function onScrollEvent(event) {
                event.preventDefault();
                let eventSliderMax =
                    eventSlider.scrollWidth - eventSlider.clientWidth;
                let rightEdge = slider.offsetWidth - skull.offsetWidth;
                let newLeft =
                    eventSlider.scrollLeft * (rightEdge / eventSliderMax);
                skull.style.left = newLeft + "px";

                if (newLeft == rightEdge) {
                    console.log(document.getElementById("slider").offsetWidth);
                    inslider.style.width =
                        document.getElementById("slider").offsetWidth + "px";
                } else {
                    inslider.style.width = newLeft + 24 + "px";
                }
            }

            // Bottom Silder
            let skull = document.querySelector("#skull");
            let inslider = document.querySelector("#inslider");

            skull.onmousedown = function (event) {
                event.preventDefault();

                let shiftX = event.clientX - skull.getBoundingClientRect().left;

                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mouseup", onMouseUp);

                function onMouseMove(event) {
                    eventSlider.removeEventListener("scroll", onScrollEvent);
                    let newLeft =
                        event.clientX -
                        shiftX -
                        slider.getBoundingClientRect().left;

                    if (newLeft < 0) {
                        newLeft = 0;
                    }
                    let rightEdge = slider.offsetWidth - skull.offsetWidth;
                    if (newLeft > rightEdge) {
                        newLeft = rightEdge;
                    }

                    skull.style.left = newLeft + "px";

                    if (newLeft == rightEdge) {
                        console.log(
                            document.getElementById("slider").offsetWidth
                        );
                        inslider.style.width =
                            document.getElementById("slider").offsetWidth +
                            "px";
                    } else {
                        inslider.style.width = newLeft + 24 + "px";
                    }

                    let eventSliderMax =
                        eventSlider.scrollWidth - eventSlider.clientWidth;
                    eventSlider.scrollLeft =
                        newLeft * (eventSliderMax / rightEdge);
                }

                function addListener() {
                    eventSlider.addEventListener("scroll", onScrollEvent);
                }

                function onMouseUp() {
                    setTimeout(addListener, 2000);
                    document.removeEventListener("mouseup", onMouseUp);
                    document.removeEventListener("mousemove", onMouseMove);
                }
            };

            skull.ondragstart = function () {
                return false;
            };
        }

        //   return () => {
        //     second
        //   }
    }, []);

    return (
        <section className=" bg-[#fbf2e5] relative overflow-hidden" id="events">
            <Image
                src="/assets/images/Events/wiring.png"
                width={0}
                height={0}
                sizes="50vw"
                className="object-contain absolute lg:w-[486px] w-60 h-auto bottom-[-8%] left-[-5%] rotate-180"
            />
            <Image
                width={0}
                height={0}
                src="/assets/images/Events/wiring.png"
                sizes="50vw"
                className="object-contain absolute lg:w-[480px] w-60 h-auto top-[-8%] right-[-6%]"
            />
            <section
                id="event_sec"
                className={
                    "py-12 max-w-[1400px] mx-auto w-full h-auto  " +
                    londrinasolid.className
                }
            >
                <div
                    id="event_top_sec"
                    className="flex justify-between items-center px-8 sm:flex-row flex-col"
                >
                    {/* <div id="event_txt">
                        <p>EVENTS</p>
                    </div> */}
                    <HeroText
                        text="Events"
                        inverted={true}
                        className={
                            londrinasolid.className +
                            " md:text-7xl text-5xl mx-auto mb-4 sm:mb-0 w-fit "
                        }
                        // textStyles={{ fontSize: "20rem" }}
                    />

                    <Button>
                        <Link
                            href="https://lh3.googleusercontent.com/pw/AMWts8AI0eWzvzm_0aPpGCT0cRnZtMh3zxH0DK1XhSzX1BwqHbMj-Y2ltUQpea0k-B3KNENAojiyXuYI9L0ixkyrh8nvCjyHBXB2On7u7phelMJCBk0lcz4_M9hm7X1qKx0fAhIA7CUFFsyuuf-PFliVlZI=w1406-h938-s-no?authuser=0"
                            download
                        >
                            DOWNLOAD BROCHURE
                        </Link>
                    </Button>
                </div>

                <div
                    id="event_slider"
                    className="md:overflow-x-auto flex justify-center md:justify-normal flex-wrap flex-row items-center md:flex-nowrap py-20 box-border scroll-smooth relative md:px-8 px-4 gap-4 md:gap-8 "
                    style={{
                        scrollbarWidth: "none",
                    }}
                >
                    {eventCardsData.map((event, index) => (
                        <SingleEventCard key={index} {...event} />
                    ))}
                </div>

                <div id="event_scroller" className="flex justify-center">
                    <div id="slider">
                        <div id="inslider">
                            <img
                                id="skull"
                                src="Events/images/skull.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Events;

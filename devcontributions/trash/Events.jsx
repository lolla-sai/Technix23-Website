import React, { useEffect } from "react";
import eventCardsData from "@/data/events";
import { Londrina_Solid } from "next/font/google";
import Link from "next/link";

const londrinasolid = Londrina_Solid({
    weight: "400",
    fallback: ["Calibri", "Arial", "sans-serif"],
    subsets: ["latin"],
});

function SingleEventCard({
    parentDivClassName = "e-blue",
    childDivClassName = "eb-blue",
    eventName = "Treasure Hunt",
    imgCardDecor = "Events/images/blue-card-img.svg",
    leftFeatherImg = "Events/images/blue-left-feather.png",
    rightFeatherImg = "Events/images/blue-right-feather.png",
    eventHref = "https://www.google.com/",
    cursorImg = "Events/images/blue-cursor.png",
    cartoonImg = "Events/images/hooman1.png",
}) {
    return (
        <div className={"event_tab " + parentDivClassName}>
            <div className="e-cnt1">
                <img src={imgCardDecor} alt="" />

                <h2 className="md:text-3xl text-xl">{eventName}</h2>
                <img src={imgCardDecor} alt="" className="rot180" />
            </div>

            <img src={rightFeatherImg} alt="" className="e_top_leaf" />
            <img src={leftFeatherImg} alt="" className="e_bottom_leaf" />

            <a href={eventHref}>
                <div className={"e-cnt2 " + childDivClassName}>
                    <img
                        id="cursor"
                        src={cursorImg}
                        alt=""
                        style={{ margin: "auto" }}
                    />
                    <p>{eventName}</p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src={cartoonImg}
                            alt=""
                            width="auto"
                            height="100%"
                        />
                    </div>
                </div>
            </a>
        </div>
    );
}

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
        <>
            <section
                id="event_sec"
                className={"max-w-full " + londrinasolid.className}
            >
                <div id="event_top_sec">
                    <div id="event_txt">
                        <p>EVENTS</p>
                    </div>
                    <div id="event_btn">
                        <Link href="/Technix 2023 Brochure.pdf" download>
                            DOWNLOAD BROCHURE
                        </Link>
                    </div>
                </div>

                <div id="event_slider">
                    {eventCardsData.map((event, index) => (
                        <SingleEventCard key={index} {...event} />
                    ))}
                </div>

                <div id="event_scroller">
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
        </>
    );
}

export default Events;

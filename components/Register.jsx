import React, { useContext, useEffect, useState } from "react";
import Sectionboder from "../public/register/line.svg"; // TODO: not working, fix this
// import Eventleaf from "../public/register/event-leaves.png";
import { useRouter } from "next/router";
import eventRegisterData from "../data/register.json";
import { londrinasolid } from "@/data/fonts";
import registerStyles from "./Register.module.css";
import Head from "next/head";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import { GiHamburgerMenu } from "react-icons/gi";
import modalContext from "@/store/modalContext";
import Menu from "./Menu";
// TODO: Luma its opening a new window like google sign in. Need to be as its on static site
// TODO: fix reload issue, uncomment coordinators map

function Register() {
    const [eventName, setEventName] = useState(null);
    const [title, setTitle] = useState("Register");
    const router = useRouter();
    const { navbarOpen, setNavbarOpen } = useContext(modalContext);

    useEffect(() => {
        if (!router.isReady) return;

        setEventName(router.query.eventName);
        setTitle(
            "Register - " + eventRegisterData[router.query.eventName].event_name
        );
        console.log(eventRegisterData[router.query.eventName]);
    }, [router.isReady]);

    function redirectToEvent(
        lumaLink = "https://lu.ma/event/evt-4LEqHzIVQizhJso"
    ) {
        // alert("Registerations will open from 14th April 2023");
        // for time being, removed luma from here.
        window.open(lumaLink, "Event Page", "height=500,width=700");
    }

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div
                style={
                    {
                        // backgroundPosition: "90% 25%",
                        // backgroundSize: "800px",
                    }
                }
                className={
                    "text-white md:text-lg bg-[#0D393A] bg-no-repeat overflow-hidden relative min-h-screen py-8 font-satoshi font-[500] "
                }
            >
                {navbarOpen && (
                    <div className="modal h-full w-full fixed inset-0 z-50">
                        <Menu />
                    </div>
                )}
                <div className="absolute top-10 right-10 z-20">
                    {/* <AnimatedButton /> */}
                    <GiHamburgerMenu
                        size={40}
                        color="white"
                        className="cursor-pointer"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    />
                </div>
                <div className="absolute top-0 left-0 w-[25vmax] max-w-[390px] max-h-[390px] h-[25vmax] -translate-x-1/4 -translate-y-1/4">
                    <Image
                        className="object-contain rotate-180"
                        src={"/register/event-leaves.png"}
                        alt="Upper Left Image"
                        // width={393}
                        // height={407}
                        fill
                    />
                </div>

                <div className="absolute bottom-0 right-0 max-w-[390px] max-h-[390px] w-[25vmax] h-[25vmax] translate-x-1/4 translate-y-1/4">
                    <Image
                        className="object-contain"
                        src={"/register/event-leaves.png"}
                        alt="Bottom Right Image"
                        // width={393}
                        // height={407}
                        fill
                    />
                </div>

                <div className="absolute w-[400px] h-[400px] top-[25%] left-[-5%]">
                    <Image
                        src="/assets/images/Sponsors/mask outline.png"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="absolute w-[400px] h-[400px] bottom-[5%] left-[-5%] rotate-[-24deg]">
                    <Image
                        src="/assets/images/Sponsors/mask outline 4.png"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="absolute w-[400px] h-[400px] lg:bottom-[15%] bottom-[40%] right-[-5%]">
                    <Image
                        src="/assets/images/Sponsors/mask outline 2.png"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="max-w-[1000px] mx-auto relative z-30">
                    {/* <div className="fixed top-0 right-0 p-4">
                        <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6 fill-current"
                        >
                            <path d="M21 13H3V11H21V13ZM21 7H3V9H21V7ZM21 17H3V19H21V17Z" />
                        </svg>
                    </div> */}
                    <header className="flex items-center justify-center px-8 py-6">
                        <div className="text-center">
                            <h1
                                className={
                                    "md:text-7xl sm:text-6xl text-4xl mb-2 font-bold " +
                                    londrinasolid.className
                                }
                            >
                                {eventName &&
                                    eventRegisterData[eventName].event_name}
                            </h1>
                            <h2 className="md:text-3xl text-2xl uppercase font-satoshi font-bold">
                                {eventName &&
                                    eventRegisterData[eventName].event_type}
                            </h2>
                        </div>
                    </header>

                    <div className="flex justify-center relative w-full h-8 my-8">
                        <Image
                            src={"/register/line.svg"}
                            fill
                            alt="Event Image"
                            className="object-contain"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-between">
                        <div className="px-4 py-2">
                            <h2
                                className={
                                    "text-3xl " + londrinasolid.className
                                }
                            >
                                WHAT'S IT?
                            </h2>
                            <p className="mt-2 max-w-[36ch]">
                                {eventName &&
                                    eventRegisterData[eventName].event_quote}
                            </p>
                        </div>
                        <div className="px-4 py-2 text-center">
                            <h2
                                className={
                                    "text-3xl " + londrinasolid.className
                                }
                            >
                                PRIZES
                            </h2>
                            <ul
                                className={
                                    "mt-2 list-inside " +
                                    registerStyles.registerul
                                }
                            >
                                <li
                                    className={
                                        registerStyles.prize1 +
                                        " " +
                                        registerStyles.registerli
                                    }
                                >
                                    {eventName &&
                                        eventRegisterData[eventName].prizes[0]}
                                </li>
                                <li
                                    className={
                                        registerStyles.registerli +
                                        " " +
                                        registerStyles.prize2
                                    }
                                >
                                    {eventName &&
                                        eventRegisterData[eventName].prizes[1]}
                                </li>
                                {eventName &&
                                    eventRegisterData[eventName].prizes[2] && (
                                        <li
                                            className={
                                                registerStyles.registerli +
                                                " " +
                                                registerStyles.prize3
                                            }
                                        >
                                            {
                                                eventRegisterData[eventName]
                                                    .prizes[2]
                                            }
                                        </li>
                                    )}
                            </ul>
                        </div>
                        <div className="px-4 py-2">
                            <h2
                                className={
                                    "text-3xl " + londrinasolid.className
                                }
                            >
                                DATE & TIME
                            </h2>
                            <p className="mt-2">
                                {eventName && eventRegisterData[eventName].date}
                            </p>
                            <p className="mt-2">
                                {eventName && eventRegisterData[eventName].time}
                            </p>
                        </div>
                    </div>
                    <main className="mx-auto py-8 md:px-8 px-4">
                        <div className="flex justify-center items-center mb-28 flex-col xsm:flex-row gap-4">
                            <button
                                style={{
                                    boxShadow: "-3px 4px 0 0 #262626",
                                }}
                                className={
                                    "px-6 py-2 hover:scale-110 transition-transform bg-[#B2D600] text-[#262626] rounded-full xsm:mrss-6 focus:outline-none " +
                                    londrinasolid.className
                                }
                                onClick={() =>
                                    redirectToEvent(
                                        eventName &&
                                            eventRegisterData[eventName]
                                                .lumaLink
                                    )
                                }
                            >
                                REGISTER
                            </button>
                            <a
                                href={
                                    eventName
                                        ? eventRegisterData[eventName]
                                              .detailedRulesLink
                                        : ""
                                }
                                target="_blank"
                                style={{
                                    boxShadow: "-3px 4px 0 0 #262626",
                                }}
                                className={
                                    "block px-6 py-2 hover:scale-110 transition-transform bg-[#B2D600] text-[#262626] rounded-full focus:outline-none " +
                                    londrinasolid.className
                                }
                            >
                                READ DETAILED RULES
                            </a>
                        </div>

                        <div className="flex justify-center relative w-full h-8 my-4">
                            <Image
                                src={"/register/line.svg"}
                                fill
                                alt="Event Image"
                                className="object-contain"
                            />
                        </div>

                        <div className="mt-8 mb-16">
                            <h2
                                className={
                                    "text-3xl text-[#FAF5EF] my-4 " +
                                    londrinasolid.className
                                }
                            >
                                Rules
                            </h2>
                            <ul
                                className={
                                    "ml-8 title-font " +
                                    registerStyles.registerul
                                }
                            >
                                {eventName &&
                                    eventRegisterData[eventName].rules.map(
                                        (rule) => (
                                            <li
                                                className={
                                                    "mb-2 " +
                                                    registerStyles.registerli
                                                }
                                            >
                                                {rule}
                                            </li>
                                        )
                                    )}
                            </ul>
                        </div>

                        <div className="flex justify-center relative w-full h-8 my-16">
                            <Image
                                src={"/register/line.svg"}
                                fill
                                alt="Event Image"
                                className="object-contain"
                            />
                        </div>

                        <div>
                            <h2
                                className={
                                    "text-3xl mb-4 text-[#FAF5EF] " +
                                    londrinasolid.className
                                }
                            >
                                Coordinators
                            </h2>
                            <ul
                                className={
                                    "ml-8 title-font " +
                                    registerStyles.registerul
                                }
                            >
                                {eventName &&
                                    eventRegisterData[
                                        eventName
                                    ].coordinators.map((coordinator) => (
                                        <li
                                            className={
                                                registerStyles.registerli +
                                                " mb-2"
                                            }
                                        >
                                            {coordinator}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Register;

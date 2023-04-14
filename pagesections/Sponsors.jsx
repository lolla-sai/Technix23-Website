import React, { useContext } from "react";
import Sponsor from "@/components/Sponsor";
import { londrinasolid } from "@/data/fonts";
import HeroText from "@/components/HeroText";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import modalContext from "@/store/modalContext";

const sponsors = {
    "Title Sponsors": [
        {
            name: "Codemax IT Solutions",
            icon: "/assets/logos/cdmx.png",
            webLink: "https://www.cdmx.in/",
            className:
                "w-52 xsm:w-60 md:w-80 min-h-[120px] md:min-h-[150px] bg-[#fafafd]",
        },
        {
            name: "Pocket52",
            webLink: "",
            icon: "/assets/logos/Pocket52.png",
            className:
                "w-52 xsm:w-60 md:w-80 min-h-[120px] md:min-h-[150px] bg-black",
        },
    ],
    "Co-Sponsors": [
        {
            name: "HotelHub",
            webLink: "https://www.hotelhub.com/",
            icon: "/assets/logos/hotelhub.jpeg",
            className:
                "w-52 xsm:w-60 md:w-80 min-h-[120px] md:min-h-[150px] bg-black",
        },
    ],
    "Event Sponsor": [
        {
            name: "Fieldnotes Ai",
            icon: "/assets/logos/fieldnotes.jpg",
            webLink: "https://fieldnotes.ai/",
        },
        {
            name: "Creative Capsule",
            icon: "/assets/logos/cc.png",
            webLink: "https://www.creativecapsule.com/",
            className:
                " bg-[#9fba29] w-48 xsm:w-56 md:w-72 min-h-[100px] md:min-h-[120px] ",
        },
        {
            name: "Team Inertia",
            icon: "https://www.teaminertia.com/img/logo_orange.jpg",
            webLink: "https://www.teaminertia.com/",
        },
    ],
    "Beverage Partner": [
        {
            name: "Zen",
            icon: "/assets/logos/zen.png",
            webLink: "",
        },
    ],
    "Food Partner": [
        {
            name: "Hotel Annapurna",
            icon: "/assets/logos/annapurna.jpg",
            webLink: "",
        },
    ],
};

function Sponsors() {
    const { navbarOpen, setNavbarOpen } = useContext(modalContext);

    return (
        <section
            id="sponsors"
            className="bg-[#FF6237] p-8 relative overflow-hidden"
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
            {/* Positioned Images */}
            <div className="absolute w-[25vmax] h-[25vmax] max-w-[400px] max-h-[400px] top-0 left-0 translate-y-[-25%] translate-x-[-30%]">
                <Image
                    src="/assets/images/Sponsors/leaf-top.svg"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="absolute w-[25vmax] h-[25vmax] max-w-[400px] max-h-[400px] top-0 right-0 translate-y-[-25%] translate-x-[30%]">
                <Image
                    src="/assets/images/Sponsors/leaf-top.svg"
                    fill
                    className="object-contain rotate-90"
                />
            </div>

            <div className="absolute w-[400px] h-[400px] bottom-[25%] left-[5%]">
                <Image
                    src="/assets/images/Sponsors/computer.svg"
                    fill
                    className="object-contain"
                />
            </div>
            <div
                className="absolute w-[400px] h-[400px] lg:bottom-[15%] bottom-[40%] right-[5%]"
                style={{
                    transform: "rotateY(180deg)",
                }}
            >
                <Image
                    src="/assets/images/Sponsors/computer.svg"
                    fill
                    className="object-contain"
                />
            </div>

            <HeroText
                text="Our Sponsors"
                className={
                    londrinasolid.className +
                    " md:text-7xl text-5xl mx-auto w-fit my-12"
                }
                // textStyles={{ fontSize: "20rem" }}
            />

            <h1
                className={
                    londrinasolid.className +
                    " text-4xl text-center text-white z-20"
                }
            >
                Title Sponsors
            </h1>
            <div className="s_shell">
                {sponsors["Title Sponsors"].map((titleSponsor) => (
                    <Sponsor {...titleSponsor} key={titleSponsor.name} />
                ))}
            </div>

            <h1
                className={
                    londrinasolid.className +
                    " text-4xl text-center text-white z-20"
                }
            >
                Co-Sponsors
            </h1>
            <div className="s_shell">
                {sponsors["Co-Sponsors"].map((titleSponsor) => (
                    <Sponsor {...titleSponsor} key={titleSponsor.name} />
                ))}
            </div>

            <h1
                className={
                    londrinasolid.className +
                    " text-4xl text-center text-white z-20 relative"
                }
            >
                Event Supporters
            </h1>
            <div className="s_shell">
                {sponsors["Event Sponsor"].map((titleSponsor) => (
                    <Sponsor {...titleSponsor} key={titleSponsor.name} />
                ))}
            </div>

            <h1
                className={
                    londrinasolid.className +
                    " text-4xl text-center text-white z-20 relative"
                }
            >
                Beverage Partner
            </h1>
            <div className="s_shell">
                {sponsors["Beverage Partner"].map((titleSponsor) => (
                    <Sponsor {...titleSponsor} key={titleSponsor.name} />
                ))}
            </div>

            <h1
                className={
                    londrinasolid.className +
                    " text-4xl text-center text-white z-20 relative"
                }
            >
                Food Partner
            </h1>
            <div className="s_shell">
                {sponsors["Food Partner"].map((titleSponsor) => (
                    <Sponsor {...titleSponsor} key={titleSponsor.name} />
                ))}
            </div>
        </section>
    );
}

export default Sponsors;

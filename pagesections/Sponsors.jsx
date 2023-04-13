import React from "react";
import Sponsor from "@/components/Sponsor";
import { londrinasolid } from "@/data/fonts";
import HeroText from "@/components/HeroText";
import Image from "next/image";

const sponsors = {
    "Title Sponsors": [
        {
            name: "Pocket52",
            webLink: "https://www.pocket52.com/",
            icon: "/assets/logos/Pocket52.png",
            className:
                "w-52 xsm:w-60 md:w-80 min-h-[120px] md:min-h-[150px] bg-black",
        },

        // {
        //     name: "OneShield",
        //     webLink: "https://www.accops.com/",
        //     icon: "/sponsors/Accops.png",
        //     className: "w-52 xsm:w-60 md:w-80 min-h-[120px] md:min-h-[150px]",
        // },
        // {
        //     name: "SJ Innovation",
        //     webLink: "https://sjinnovation.com/",
        //     icon: "https://sjinnovation.com/themes/custom/sji_theme/logo.svg",
        //     className: "w-52 xsm:w-60 md:w-80 min-h-[120px] md:min-h-[150px]",
        // },
    ],
    "Co-Sponsors": [
        {
            name: "HotelHub",
            webLink: "https://www.hotelhub.com/",
            icon: "https://www.hotelhub.com/wp-content/themes/hotelhub/assets/images/logo.svg",
            className: "bg-black",
        },
        // {
        //     name: "Comscope",
        //     webLink: "https://www.accops.com/",
        //     icon: "/sponsors/Accops.png",
        // },
        // {
        //     name: "Softmonks",
        //     webLink: "https://sjinnovation.com/",
        //     icon: "https://sjinnovation.com/themes/custom/sji_theme/logo.svg",
        // },
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
    return (
        <section
            id="sponsors"
            className="bg-[#FF6237] p-8 relative overflow-hidden"
        >
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
                    londrinasolid.className + " text-4xl text-center text-white"
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
                    londrinasolid.className + " text-4xl text-center text-white"
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
                    londrinasolid.className + " text-4xl text-center text-white"
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
                    londrinasolid.className + " text-4xl text-center text-white"
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

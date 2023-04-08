import { londrinasolid } from "@/data/fonts";
import React from "react";
import HeroText from "../components/HeroText";
import Sponsor from "../components/Sponsor";
import AccopsLogo from "../public/sponsors/Accops.png";

const sponsors = {
    title: [
        {
            webLink: "https://www.accops.com/",
            icon: AccopsLogo,
        },
        {
            webLink: "https://oneshield.com/",
            icon: "https://oneshield.com/wp-content/uploads/2022/10/OS_logo_new.svg",
        },
        {
            webLink: "https://sjinnovation.com/",
            icon: "https://sjinnovation.com/themes/custom/sji_theme/logo.svg",
        },
    ],
    coSponsors: [
        {
            webLink: "https://www.accops.com/",
            icon: AccopsLogo,
        },
        {
            webLink: "https://oneshield.com/",
            icon: "https://oneshield.com/wp-content/uploads/2022/10/OS_logo_new.svg",
        },
        {
            webLink: "https://sjinnovation.com/",
            icon: "https://sjinnovation.com/themes/custom/sji_theme/logo.svg",
        },
    ],
};

function Sponsors() {
    return (
        <>
            <HeroText
                text="Our Sponsors"
                className={
                    londrinasolid.className +
                    " text-md-7xl text-5xl mx-auto w-fit my-12"
                }
                // textStyles={{ fontSize: "20rem" }}
            />

            <h1
                className={
                    londrinasolid.className + " text-5xl text-center text-white"
                }
            >
                Title Sponsors
            </h1>
            <div className="s_shell d-flex my-5 mb-5">
                {sponsors.title.map((titleSponsor, index) => (
                    <Sponsor type="title" key={index} {...titleSponsor} />
                ))}
            </div>

            <h1
                className={
                    londrinasolid.className + " text-4xl text-center text-white"
                }
            >
                Co-Sponsors
            </h1>
            <div className="s_shell d-flex my-5 mb-5">
                {sponsors.coSponsors.map((coSponsor, index) => (
                    <Sponsor key={index} {...coSponsor} />
                ))}
            </div>
            {/* <Image src={sponsorsWave} className="w-full h-28 object-fill" /> */}
        </>
    );
}

export default Sponsors;

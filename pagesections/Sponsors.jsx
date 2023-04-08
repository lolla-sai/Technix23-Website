import React from "react";
import Sponsor from "@/components/Sponsor";
import { londrinasolid } from "@/data/fonts";
import HeroText from "@/components/HeroText";
import Image from "next/image";

function Sponsors() {
    return (
        <section
            id="sponsors"
            className="bg-[#FF6237] p-8 relative overflow-hidden"
        >
            {/* Positioned Images */}
            <div className="absolute w-[400px] h-[400px] top-[-5%] left-[5%]">
                <Image
                    src="/assets/images/Sponsors/mask outline.png"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="absolute w-[400px] h-[400px] bottom-[5%] left-[5%]">
                <Image
                    src="/assets/images/Sponsors/mask outline 4.png"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="absolute w-[400px] h-[400px] lg:bottom-[15%] bottom-[40%] right-[5%]">
                <Image
                    src="/assets/images/Sponsors/mask outline 2.png"
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
                <Sponsor
                    webLink="https://www.accops.com/"
                    icon={"/sponsors/Accops.png"}
                />
                <Sponsor
                    webLink="https://oneshield.com/"
                    icon={
                        "https://oneshield.com/wp-content/uploads/2022/10/OS_logo_new.svg"
                    }
                />
                <Sponsor
                    webLink="https://sjinnovation.com/"
                    icon={
                        "https://sjinnovation.com/themes/custom/sji_theme/logo.svg"
                    }
                />
            </div>

            <h1
                className={
                    londrinasolid.className + " text-4xl text-center text-white"
                }
            >
                Co-Sponsors
            </h1>
            <div className="s_shell">
                <Sponsor
                    webLink="https://www.accops.com/"
                    icon={"/sponsors/Accops.png"}
                />

                <Sponsor
                    webLink="https://oneshield.com/"
                    icon={
                        "https://oneshield.com/wp-content/uploads/2022/10/OS_logo_new.svg"
                    }
                />
            </div>
        </section>
    );
}

export default Sponsors;

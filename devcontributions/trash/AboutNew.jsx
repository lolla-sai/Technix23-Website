import React from "react";
import Image from "next/image";
import {
    background,
    image1,
    image2,
    image3,
    image4,
} from "@/devcontributions/Puneet/assets";
import HeroText from "@/components/HeroText";
import { londrinasolid } from "@/data/fonts";

function AboutNew() {
    return (
        <div className="z-[-1] bg-[#FFBF42] relative w-full min-h-screen">
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

            <div className="flex flex-col">
                {/* <div className="flex flex-row relative mb-5">
                    <Image
                        src={image1}
                        alt="Image"
                        className="w-[230px] py-10 relative left-60"
                        style={{ transform: "rotate(-20deg)" }}
                    />
                    <Image
                        src={image2}
                        alt="Image"
                        className="w-[230px] py-10 mx-auto"
                        style={{ transform: "rotate(15deg)" }}
                    />
                    <Image
                        src={image3}
                        alt="Image"
                        className="w-[230px] py-10 relative right-60"
                        style={{ transform: "rotate(-17deg)" }}
                    />
                </div> */}
                <div className="flex justify-center items-center">
                    {/* <Image
                        src={image3}
                        alt="Image"
                        className="w-[210px] py-5 relative left-28"
                        style={{ transform: "rotate(15deg)" }}
                    /> */}
                    <div className="flex  flex-col w-[30vw] max-h-[50vw] mx-auto">
                        {/* <h1 className="text-2xl font-extrabold mb-3">
                            About Technix
                        </h1> */}
                        <HeroText
                            text="About Technix"
                            inverted
                            className={
                                londrinasolid.className +
                                " md:text-5xl whitespace-nowrap text-3xl mx-auto w-fit my-12"
                            }
                            // textStyles={{ fontSize: "20rem" }}
                        />
                        <p className="text-sm font-serif text-center">
                            A solar flare is expected to come close to Earth's
                            magnetic field on Sunday (5 June) or Monday (6 June)
                            causing a geomagnetic solar storm. Space experts
                            have confirmed an eruption on the sun occurred
                            yesterday (2 June), hurling a solar flare known as
                            coronal mass ejection (CME) into space
                        </p>
                    </div>
                    {/* <Image
                        src={image1}
                        alt="Image"
                        className="w-[210px] py-5 relative right-12 -top-12"
                        style={{ transform: "rotate(15deg)" }}
                    /> */}
                </div>
                {/* <div className="flex justify-between mb-5 w-[80vw] mx-auto">
                    <Image
                        src={image1}
                        alt="Image"
                        className="w-[230px] py-10"
                        style={{ transform: "rotate(15deg)" }}
                    />
                    <Image
                        src={image2}
                        alt="Image"
                        className="w-[230px] py-10 top-10 relative"
                        style={{ transform: "rotate(-10deg)" }}
                    />
                    <Image
                        src={image3}
                        alt="Image"
                        className="w-[230px] py-10"
                        style={{ transform: "rotate(13deg)" }}
                    />
                    <Image
                        src={image4}
                        alt="Image"
                        className="w-[230px] py-10"
                        style={{ transform: "rotate(-15deg)" }}
                    />
                </div> */}
            </div>
        </div>
    );
}

export default AboutNew;

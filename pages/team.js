import React from "react";
import HeroText from "../components/HeroText";
import { Inter, Montserrat, Poppins, Londrina_Solid } from "next/font/google";

const londrinasolid = Londrina_Solid({
    weight: "400",
    fallback: ["Calibri", "Arial", "sans-serif"],
    subsets: ["latin"],
});

function team() {
    return (
        <div id="teams" className="bg-black min-h-screen py-8">
            <HeroText
                text="Our Sponsors"
                className={
                    londrinasolid.className +
                    " text-md-5xl text-3xl mx-auto w-fit my-12"
                }
                // textStyles={{ fontSize: "20rem" }}
            />
            <div class="mesh-container">
                <div class="polygon polygon1"></div>
                <div class="polygon polygon2"></div>
                <div class="polygon polygon3"></div>
                <div class="polygon polygon4"></div>
                <div class="polygon polygon5"></div>
                <div class="polygon polygon6"></div>
            </div>

            <div class="grid grid-cols-6 w-full">
                <div
                    class=" w-full aspect-square  bg-teal-400 rounded-bl-3xl rounded-br-3xl"
                    style={{ clipPath: "polygon(50% 0, 0 100%, 100% 100%)" }}
                ></div>
                <div
                    className=" w-full aspect-square  bg-teal-400  rotate-180"
                    style={{ clipPath: "polygon(50% 0, 0 100%, 100% 100%)" }}
                ></div>
                <div className="col-span-4"></div>
                <div
                // class=" w-full aspect-square  bg-teal-400 "
                // style={{ clipPath: "polygon(50% 0, 0 100%, 100% 100%)" }}
                ></div>
                <div
                    className=" w-full aspect-square  bg-teal-400  rotate-180"
                    style={{ clipPath: "polygon(50% 0, 0 100%, 100% 100%)" }}
                ></div>
                <div
                    className=" w-full aspect-square  bg-teal-400 "
                    style={{ clipPath: "polygon(50% 0, 0 100%, 100% 100%)" }}
                ></div>
                <div
                    className=" w-full aspect-square  bg-teal-400 "
                    style={{ clipPath: "polygon(50% 0, 0 100%, 100% 100%)" }}
                ></div>
                <div
                    className=" w-full aspect-square  bg-teal-400 "
                    style={{ clipPath: "polygon(50% 0, 0 100%, 100% 100%)" }}
                ></div>
            </div>
        </div>
    );
}

export default team;

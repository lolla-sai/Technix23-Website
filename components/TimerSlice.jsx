import React from "react";
import { Londrina_Solid } from "next/font/google";

const londrinasolid = Londrina_Solid({
    weight: "400",
    fallback: ["Calibri", "Arial", "sans-serif"],
    subsets: ["latin"],
});

function TimerSlice({ number, unit, className }) {
    return (
        <div
            className={"flex items-center flex-col " + londrinasolid.className}
        >
            <div className="lg:text-8xl sm:text-5xl text-3xl">
                {number.toString().padStart(2, "0")}
            </div>
            <div className="lg:text-5xl sm:text-3xl text-xl">{unit}</div>
        </div>
    );
}

export default TimerSlice;

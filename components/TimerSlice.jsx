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
            <div className="text-8xl">{number}</div>
            <div className="text-5xl">{unit}</div>
        </div>
    );
}

export default TimerSlice;

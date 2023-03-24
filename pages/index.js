import React from "react";
import { Inter, Montserrat, Poppins } from "next/font/google";

const inter = Inter({
    weight: "800",
    fallback: ["Calibri", "Arial", "sans-serif"],
    subsets: ["latin"],
});

const montserrat = Poppins({
    weight: "400",
    subsets: ["latin"],
});

function index() {
    return (
        <div className={montserrat.className} style={{ fontSize: 32 }}>
            index
        </div>
    );
}

export default index;

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Sponsor({
    webLink,
    icon,
    className = "w-48 xsm:w-56 md:w-72 min-h-[100px] md:min-h-[120px]",
}) {
    return (
        <Link href={webLink}>
            <div
                className={
                    "hover:scale-105 hover:shadow-md transition-transform ease-in-out  rounded-xl justify-evenly relative bg-[#fafafd] title-sponsor p-4 flex items-center m-4 border-[6px] border-[#B25445] " +
                    className
                }
            >
                <Image
                    src={icon}
                    width={300}
                    height={200}
                    style={{ objectFit: "contain", objectPosition: "center" }}
                />
            </div>
        </Link>
    );
}

export default Sponsor;

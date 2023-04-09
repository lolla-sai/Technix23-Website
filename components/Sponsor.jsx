import React from "react";
import Image from "next/image";
import Link from "next/link";

function Sponsor({ webLink, icon, type = "normal" }) {
    return (
        <Link href={webLink}>
            <div
                className={
                    "hover:scale-105 hover:shadow-md transition-transform ease-in-out min-h-[120px] md:min-h-[150px] w-52 xsm:w-60 md:w-80 rounded-xl justify-evenly relative bg-[#fafafd] title-sponsor p-4 flex items-center m-4 border-[6px] border-[#B25445] " +
                    (type === "title" && " ")
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

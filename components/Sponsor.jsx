import React from "react";
import Image from "next/image";
import Link from "next/link";

function Sponsor({ webLink, icon, type = "normal" }) {
    return (
        <Link href={webLink}>
            <div
                className={
                    "hover:scale-105 hover:shadow-md transition-transform ease-in-out min-h-[140px] w-80 rounded-xl border justify-evenly relative bg-[#fafafd] border-[#e5e5e5] title-sponsor p-4 flex items-center m-4 " +
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

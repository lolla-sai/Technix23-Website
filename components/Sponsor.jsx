import React from "react";
import Image from "next/image";
import Link from "next/link";

function Sponsor({ webLink, icon }) {
    return (
        <Link href={webLink}>
            <div className="s_box title-sponsor p-4">
                {/* <div class="s_logo s_logo_pink"></div> */}
                <Image
                    src={icon}
                    width={300}
                    height={200}
                    style={{ objectFit: "contain", objectPosition: "center" }}
                />
                {/* <img
                  src="sponsors/Accops.png"
                  class="s_icon"
                  alt=""
                  draggable="false"
              />
              <img src="Accops.png" class="s_icon" alt="" draggable="false" /> */}
            </div>
        </Link>
    );
}

export default Sponsor;

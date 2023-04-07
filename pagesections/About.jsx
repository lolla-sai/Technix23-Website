import React from "react";
import { londrinasolid } from "@/data/fonts";
import Image from "next/image";

function About() {
    return (
        <section className="aboutTechnix px-8 py-20 bg-[#FFB808]">
            {/* <Center></Center> */}
            <main className="max-w-[1400px] mx-auto">
                <div className="flex gap-8 lg:flex-row flex-col items-center lg:justify-center">
                    <div className="px-4">
                        <h2
                            className=" mt-3 mb-5 px-2 text-6xl font-bold"
                            style={londrinasolid.style}
                        >
                            About Technix
                        </h2>
                        <p className="px-2 my-3 max-w-prose">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Velit repudiandae sint accusantium eligendi
                            eius reiciendis culpa asperiores accusamus.
                            Doloremque ratione blanditiis tempore et, debitis
                            amet magni accusamus quod suscipit eaque. Commodi
                            excepturi doloremque consectetur sapiente similique
                            unde voluptatem voluptatibus laborum doloribus
                            architecto vero, eaque sunt harum mollitia tempora,
                            accusamus exercitationem!
                        </p>
                    </div>
                    <Image
                        width={0}
                        height={0}
                        sizes="50vw"
                        src={"/assets/images/Inaug Main.JPG"}
                        className="object-contain lg:w-1/2 md:w-3/4 w-full h-auto "
                    />
                </div>
            </main>
        </section>
    );
}

export default About;

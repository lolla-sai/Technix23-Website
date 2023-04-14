import Image from "next/image";
import { Londrina_Solid } from "next/font/google";
import React from "react";
import Talk from "../components/Talk";
import seminarCardData from "../data/talks"


const londrinaSolid = Londrina_Solid({
  subsets: ["latin"],
  weight: "900",
});

export default function Home() {

  return (
    <section className={londrinaSolid.className + ' bg-[#fbf2e5] relative h-auto'}>
         <div className="absolute z[-2] right-0 -top-8">
              <Image
                src="/assets/Events/wiring.png"
                alt="menu"
                width="220"
                height="20"
              />
            </div>
      
        <div className="flex flex-col-reverse items-center xs:justify-between xs:flex-row p-14 pb-7">
          
          <span className="text-3xl xs:text-4xl sm:text-5xl">TALKS</span>
          <div className="">
            <Image
              src="/talk img/speaker.png"
              alt="flag"
              width="60"
              height="60"
            />
          </div>


        </div>

        <div className="flex flex-col items-center xs:justify-between xs:py-5 xs:px-16  xs:flex-row">
          <span className="mb-2 text-3xl xs:mb-0 xs:text-4xl sm:text-5xl">20 APRIL</span>
          <span className="text-3xl xs:text-4xl sm:text-5xl">THURSDAY</span>
        </div>

        

          <div className="flex flex-col items-center sm:flex-row sm:justify-around relative w-[100%]">

              <Talk imageLink="/talk img/talk1.jpeg"/>
              <Talk imageLink="/talk img/talk2.jpeg"/>
              <Talk imageLink="/talk img/talk3.jpeg"/>

          </div>

          <div className="flex flex-col items-center xs:justify-between xs:py-5 xs:px-16  xs:flex-row">
            <span className="mb-2 text-3xl xs:mb-0 xs:text-4xl sm:text-5xl">21 APRIL</span>
            <span className="text-3xl xs:text-4xl sm:text-5xl">FRIDAY</span>
          </div>

          <div className="flex flex-col items-center sm:flex-row sm:justify-around relative w-[100%]">

                <Talk imageLink="/talk img/talk21.jpeg"/>
                <Talk imageLink="/talk img/talk22.jpeg"/>

          </div>

          <div className="rotate-180 absolute z[-2] left-0 bottom-[-1] sm:-bottom-8">
              <Image
                src="/assets/Events/wiring.png"
                alt="menu"
                width="270"
                height="20"
              />
            </div>
  

    </section>
  );
}


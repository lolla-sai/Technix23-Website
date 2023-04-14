import Image from "next/image";
import { Londrina_Solid } from "next/font/google";
import React from "react";
import Talk from "../components/Talk";
import {seminarCardDataThursday,seminarCardDataFriday} from "@/data/talks"
import { Career } from "@/public/assets/images/Talks";
import {wiring} from '../public/assets/images/Events/wiring.png'
import speaker from '../public/assets/images/Talks/speaker.png'


const londrinaSolid = Londrina_Solid({
  subsets: ["latin"],
  weight: "900",
});

export default function Home() {

  return (
    <section className={londrinaSolid.className + ' bg-[#fbf2e5] relative h-auto overflow-hidden'}>
         <div className="absolute right-0 -top-8">
              <Image
                src={wiring}
                alt="menu"
                width="220"
                height="20"
              />
            </div>
      
        <div className="flex flex-col-reverse items-center xs:justify-between xs:flex-row p-14 pb-7">
          
          <span className="text-3xl xs:text-4xl sm:text-5xl">TALKS</span>
          <div className="">
            <Image
              src={speaker}
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

        

          <div className="flex flex-col items-center sm:flex-row sm:justify-around relative w-[100%] gap-4 flex-wrap">
                {
                    seminarCardDataThursday.map(talk => {
                        return (
                            <Talk image={talk.image} registrationLink={talk.registrationLink} key={talk.title}/>
                        )
                    })
                }

          </div>

          <div className="flex flex-col items-center xs:justify-between xs:py-5 xs:px-16  xs:flex-row">
            <span className="mb-2 text-3xl xs:mb-0 xs:text-4xl sm:text-5xl">21 APRIL</span>
            <span className="text-3xl xs:text-4xl sm:text-5xl">FRIDAY</span>
          </div>

          <div className="flex flex-col items-center sm:flex-row sm:justify-around relative w-[100%] gap-4 flex-wrap">

            {
                seminarCardDataFriday.map(talk => {
                        return (
                            <Talk image={talk.image} registrationLink={talk.registrationLink} key={talk.title}/>
                        )
                })
                }

          </div>

          <div className="rotate-180 left-0 bottom-[-1] sm:-bottom-8">
              <Image
                src={wiring}
                alt="menu"
                width="270"
                height="20"
              />
            </div>
  

    </section>
  );
}


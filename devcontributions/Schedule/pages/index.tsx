import Image from "next/image";
import { Londrina_Solid } from "next/font/google";
import React, { useState } from "react";
import Modal1 from '../components/Modal1'
import Modal2 from '../components/Modal2'

const londrinaSolid = Londrina_Solid({
  subsets: ["latin"],
  weight: "900",
});

export default function Home() {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

  return (
    <section className={londrinaSolid.className + ' h-auto'}>
      <div> 
            <Modal1
                onClose={() => setShowModal1(false)}
                show={showModal1}
            >
            </Modal1>
        </div>
      <div> 
            <Modal2
                onClose={() => setShowModal2(false)}
                show={showModal2}
            >
            </Modal2>
        </div>
      
      {/* Yellow Section */}
      <div className="bg-[#F9C73A] relative h-auto">
        {/* Schedule text, Menu */}
        <div className="flex flex-col-reverse items-center xs:justify-between xs:flex-row p-14 pb-7">
          <div className="absolute top-0 right-0 w-40 lg:w-56 md:w-52 sm:w-48 xs:w-44">
            <Image
              src="/images/bunting flags.svg"
              alt="flag"
              width="224"
              height="50"
            />
          </div>

          {/* Schedule text */}
          <span className="text-3xl xs:text-4xl sm:text-5xl">SCHEDULE</span>

          {/* Menu */}
          <div className="mb-2 xs:mb-0">
            <Image
              src="/images/menu.svg"
              alt="menu"
              width="50"
              height="50"
              className="relative z-[1]"
            />
          </div>
        </div>

        {/* Day 1 */}
        <div className="flex flex-col items-center text-white xs:justify-between xs:py-5 xs:px-16  xs:flex-row">
          <span className="mb-2 text-3xl xs:mb-0 xs:text-4xl sm:text-5xl">20 APRIL</span>
          <span className="text-3xl xs:text-4xl sm:text-5xl">THURSDAY</span>
        </div>

        {/* Table 1 Outer Area */}
        <div className="flex justify-center px-3 py-[1.5rem] sm:py-[3.5rem] md:py-[4rem] lg:py-[5.5rem] overflow-hidden">

          {/* Table 1 Area : Laptop, Feather, Schedule 1, Feather, Camera, Laptops*/}
          <div className="flex justify-between relative w-[80%]">

            <div className="absolute bottom-[-4%] left-[-18.3%]  xs:left-[-16%] md:left-[-14%] w-[15vw]">
              <Image
                src="/images/laptop 1.svg"
                alt="laptop"
                width="230"
                height="200"
              />
            </div>

            <div className="absolute top-[-25%] left-[-10%] w-[18vw] lg:w-[20vw]">
              <Image
                src="/images/feather section 1.svg"
                alt="menu"
                width="230"
                height="230"
              />
            </div>
      
              <button onClick={() => setShowModal1(true)} className="block xs:hidden">
                <Image className="relative z-[1]"
                  src="/images/Schedule 1.svg"
                  alt="menu"
                  width="1240"
                  height="400"
                />
              </button>
              <Image className="relative z-[1] hidden xs:block"
                  src="/images/Schedule 1.svg"
                  alt="menu"
                  width="1240"
                  height="400"
                />

            <div className="rotate-180 absolute z-1 bottom-[-25%] right-[-10%] z-1 w-[18vw] lg:w-[20vw]">
              <Image
                src="/images/feather section 1.svg"
                alt="menu"
                width="230"
                height="230"
              />
            </div>

            <div className="absolute w-[12vw] right-[-18.3%]  xs:right-[-16%] lg:right-[-14%]">
              <Image
                src="/images/cassette ig.svg"
                alt="menu"
                width="200"
                height="200"
              />  
            </div>
            
            <div className="absolute bottom-[28%] w-[12vw] right-[-18.3%]  xs:right-[-16%] lg:right-[-14%]">
              <Image
                src="/images/laptops.svg"
                alt="menu"
                width="210"
                height="210"
              />
            </div>

          </div>

        </div>

      </div>




      {/* Purple Section */}
      <div id="shd-pur-sec" className="bg-[#B86BFF] relative h-auto">{/* CC60FF */}

        {/* Yellow Wave */}
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        {/* Day 2 */}
        <div className="flex flex-col items-center text-white xs:justify-between py-[0.5rem]  md:py-[1.5rem] xs:px-16  xs:flex-row">
          <span className="text-3xl mb-2 xs:mb-0 xs:text-4xl sm:text-5xl">21 APRIL</span>
          <span className="text-3xl xs:text-4xl sm:text-5xl">FRIDAY</span>
        </div>

        {/* Table 2 Outer Area */}
        <div className="flex justify-center px-3 pb-[2.8rem] pt-[1.4rem] xs:py-[2.4rem] sm:py-[2.9rem] md:py-[4.4rem] lg:py-[7.5rem] overflow-hidden">
          
          {/* Table 2 Area : Laptop, Feather, Schedule 2, Feather, Laptop */}
          <div className="flex justify-between relative w-[80%]">

            <div className="absolute top-[-4%] transform -scale-x-100 w-[17vw] left-[-18.7%]  xs:left-[-16%] md:left-[-14%]">
              <Image
                src="/images/laptop 2.svg"
                alt="menu"
                width="270"
                height="270"
              />
            </div>

            <div className="-rotate-90 absolute bottom-[-25%] left-[-10%] w-[15vw]">
              <Image
                src="/images/feather section 1.svg"
                alt="menu"
                width="230"
                height="230"
              />
            </div>
            <button onClick={() => setShowModal2(true)}  className="block xs:hidden">
              <Image className="relative z-[1]"
                src="/images/Schedule 2.svg"
                alt="menu"
                width="1240"
                height="400"
              />
            </button>
            <Image className="relative z-[1] hidden xs:block"
              src="/images/Schedule 2.svg"
              alt="menu"
              width="1240"
              height="400"
            />
            <div className="rotate-90 absolute top-[-25%] right-[-10%] w-[15vw]">
              <Image
                src="/images/feather section 1.svg"
                alt="menu"
                width="230"
                height="230"
              />
            </div>

            <div className=" absolute bottom-[-40%] w-[17vw] right-[-18.3%]  xs:right-[-16%] lg:right-[-14%]">
              <Image
                src="/images/laptop 2.svg"
                alt="menu"
                width="270"
                height="20"
              />
            </div>

          </div>
    
        </div>

      </div>

    </section>
  );
}


// screens: {
  // 'sm': '640px',
  // => @media (min-width: 640px) { ... }

  // 'md': '768px',
  // => @media (min-width: 768px) { ... }

  // 'lg': '1024px',
  // => @media (min-width: 1024px) { ... }

  // 'xl': '1280px',
  // => @media (min-width: 1280px) { ... }

  // '2xl': '1536px',
  // => @media (min-width: 1536px) { ... }
// }
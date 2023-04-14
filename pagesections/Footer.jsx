import React from "react";
import Image from "next/image";
import { londrinasolid } from "@/data/fonts";
import CustomButton from "@/components/CustomButton";
import { AiOutlineArrowUp, AiOutlineInstagram } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";

function Footer() {
    return (
        <>
            <section
                id="footer"
                className="w-full p-10 bg-custom-pitch relative overflow-hidden flex flex-col items-center gap-20"
            >
                <div className="positionedImages">
                    <div className="absolute z-30 w-[100px] h-[100px] xsm:w-[200px] xsm:h-[200px] top-[-5%] right-[-10%] md:w-[400px] md:h-[400px] md:top-[-15%] md:right-[-14%] lg:w-[500px] lg:h-[500px] lg:top-[-20%] lg:right-[-13%] ">
                        <Image
                            className="object-contain "
                            src="/assets/images/Footer/footer-leaf.svg"
                            alt="Leaf"
                            fill
                        />
                    </div>
                    <div className="absolute top-[48%] right-[-3%] w-[60px] h-[60px] xsm:w-[120px] xsm:h-[120px]">
                        <Image
                            className="object-contain"
                            src="/assets/images/Footer/footer-qr-1.svg"
                            alt="Leaf"
                            fill
                        />
                    </div>
                    <div className="absolute bottom-[10%] right-[-3%] w-[170px] h-[170px]">
                        <Image
                            className="object-contain"
                            src="/assets/images/Footer/footer-qr-2.svg"
                            alt="Leaf"
                            fill
                        />
                    </div>

                    {/* Left side props */}
                    <div className="absolute w-[120px] h-[120px] -top-5 -left-5 md:w-[250px] md:h-[250px] md:top-[-10%] md:left-[-5%]">
                        <Image
                            src="/assets/images/Footer/footer-qr-2.svg"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="absolute z-10 w-[200px] h-[200px] md:w-[500px] md:h-[580px] bottom-[-6%] left-[-15%] md:bottom-[-25%] md:left-[-10%] ">
                        <Image
                            className=" object-contain"
                            src="/assets/images/Footer/footer-leaf.svg"
                            alt="Leaf"
                            fill
                        />
                    </div>
                </div>

                {/* Main section */}
                <div className="flex gap-5 flex-col md:flex-row items-center justify-center relative z-20 ">
                    {/* Contact Details */}
                    <div className="font-satoshi text-center md:text-left mr-5">
                        <div className="mb-10">
                            <div
                                className={
                                    "text-custom-red md:text-3xl text-2xl mb-1 " +
                                    londrinasolid.className
                                }
                            >
                                {" "}
                                CONTACT US
                            </div>
                            <div className="text-base font-normal max-w-prose ">
                                Feel free to reach out to us for any events
                                related or other queries.
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-custom-red text-xl font-satoshi font-bold">
                                Vineet Sawant (Event Manager)
                            </p>
                            <p className="text-lg font-normal">
                                vineetswant@gmail.com |{" "}
                                <a
                                    href="https://wa.link/31kpwo"
                                    target="_blank"
                                >
                                    WhatsApp
                                </a>
                            </p>
                        </div>
                        <div className="">
                            <p className="text-custom-red text-xl font-bold">
                                Manthan Prabhu (General Secretary)
                            </p>
                            <p className="text-lg font-normal">
                                montyphr94@gmail.com |{" "}
                                <a
                                    href="https://wa.link/c0q83g"
                                    target="_blank"
                                >
                                    WhatsApp
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="grid place-items-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3755.9743617960876!2d73.978366!3d15.424195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba54b908417d%3A0x413acca8e6df29a7!2sComputer%20Engineering%20Department!5e1!3m2!1sen!2sin!4v1680007500929!5m2!1sen!2sin"
                            alt="GEC Computer Department Location"
                            className="max-w-[100vw] xl:w-[500px] xl:h-[300px] w-[350px] h-[200px] md:w-[350px] md:h-[350px] xmd:w-[400px] avg:h-[20rem] xsm:h-[300px] sm:ml-0 mr-[2%] md:mr-0 rounded-mid border-custom-red border-2"
                        />
                    </div>
                </div>

                <Image
                    // absolute mt-4 md:top-[45%] md:left-[15%] lg:top-[50%] lg:left-[22%] top-[85%] left-[13%] md:mt-[40px] w-[300px] xl:w-[1000px] md:w-[600px] md:h-[170px]
                    className="hidden md:block w-full max-w-4xl object-contain"
                    src="/assets/images/Footer/divider.svg"
                    alt="Leaf"
                    width={100}
                    height={100}
                />

                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 mb-4 z-20 relative">
                        {/* Email Button */}
                        <CustomButton dest="mailto:cursorcouncilgec@gmail.com">
                            <div className="flex flex-row items-center">
                                <CiMail size={40} />
                            </div>
                        </CustomButton>
                        {/* Instagram Button */}
                        <CustomButton dest="https://instagram.com/teamcursor?igshid=ZDdkNTZiNTM=">
                            <div className="flex flex-row items-center">
                                <CiInstagram className="" size={40} />
                            </div>
                        </CustomButton>
                        {/* LinkedIn Button */}
                        <CustomButton dest="https://www.linkedin.com/company/cursorgec/">
                            <div className="flex flex-row items-center">
                                <CiLinkedin className="" size={40} />
                            </div>
                        </CustomButton>
                    </div>
                    {/* Copyrights Footer */}
                    <div>
                        <p className="font-satoshi font-normal">
                            © 2023 Technix. All Rights Reserved.{" "}
                        </p>
                    </div>
                </div>
            </section>

            <CustomButton
                dest="#top"
                styling={
                    "px-6 md:py-4 text-xl md:mt-[20px] xl:mt-0 rounded-full fixed bottom-10 right-10 border-solid border-3 border-black w-[100px] h-[50px] bg-custom-pitch border z-50 hover:scale-110 transition-transform " +
                    londrinasolid.className
                }
                style={{
                    boxShadow: "-3px 4px 0px 0px #000000",
                }}
            >
                <div className="flex flex-row items-center">
                    Top <AiOutlineArrowUp className="ml-2" />
                </div>
            </CustomButton>
        </>
    );
}

export default Footer;

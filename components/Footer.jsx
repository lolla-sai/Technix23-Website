import Image from "next/image";
import { AiOutlineArrowUp, AiOutlineInstagram } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { BsEnvelope } from "react-icons/bs";
import CustomButton from "../components/CustomButton";
import { Londrina_Solid } from "next/font/google";

const londrinasolid = Londrina_Solid({
    weight: "400",
    fallback: ["Calibri", "Arial", "sans-serif"],
    subsets: ["latin"],
});

function FooterPage() {
    return (
        <footer className="relative px-10 py-16 bg-custom-pitch ">
            {/* <div id="top"></div>
            <div></div> */}
            <div className="flex gap-5 flex-col md:flex-row items-center justify-center ">
                <div className="font-satoshi">
                    <div className="mb-10">
                        <div
                            className={
                                "text-custom-red text-5xl mb-4 " +
                                londrinasolid.className
                            }
                        >
                            {" "}
                            CONTACT US
                        </div>
                        <div className="text-subheading-size font-normal">
                            Feel free to reach out to us for any events related
                            or other queries.
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-custom-red text-2xl font-bold">
                            Vineet Sawant (Event Manager)
                        </p>
                        <p className="text-contact-size font-normal">
                            Email | WhatsApp Link
                        </p>
                    </div>
                    <div>
                        <p className="text-custom-red text-2xl font-bold">
                            Manthan Prabhu (General Secretary)
                        </p>
                        <p className="text-contact-size font-normal">
                            Email | WhatsApp Link
                        </p>
                    </div>
                </div>

                <div className="map-div flex flex-wrap justify-center">
                    {/* <iframe src=""  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3755.9743617960876!2d73.978366!3d15.424195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba54b908417d%3A0x413acca8e6df29a7!2sComputer%20Engineering%20Department!5e1!3m2!1sen!2sin!4v1680007500929!5m2!1sen!2sin"
                        alt="GEC Computer Department Location"
                        className="map rounded-mid border-custom-red border-4"
                        //
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <CustomButton
                        dest="gmail"
                        styling="w-10 shadow-lg inline-block "
                    >
                        <div className="gmail-button">
                            <BsEnvelope size={40} />
                        </div>
                    </CustomButton>
                    <CustomButton
                        dest="instagram_link"
                        styling="w-10 shadow-lg"
                    >
                        <div className="insta-button">
                            <AiOutlineInstagram className="ml-2" size={40} />
                        </div>
                    </CustomButton>
                    <CustomButton dest="linkedin_link" styling="w-10 shadow-lg">
                        <div className="linkedin-button">
                            <CiLinkedin className="ml-2" size={40} />
                        </div>
                    </CustomButton>
                </div>

                <CustomButton
                    dest="./#top"
                    styling={
                        " px-6  md:py-4 text-xl rounded-full top-button bg-custom-pitch " +
                        londrinasolid.className
                    }
                >
                    <div className="flex items-center">
                        Top <AiOutlineArrowUp className="ml-2" />
                    </div>
                </CustomButton>
            </div>

            <div>
                <p className="font-satoshi font-normal copyrights-footer">
                    © 2023 Technix. All Rights Reserved.{" "}
                </p>
            </div>
        </footer>
    );
}

export default FooterPage;

// AiOutlineArrowUp
// import Image from "next/image";
// import cursorLogo from "../public/static/cursorlogo.png";
// import { AiFillInstagram } from "react-icons/ai";
// import { BsFacebook } from "react-icons/bs";
// import { MdEmail } from "react-icons/md";
// import CopyrightFooter from "./CopyrightFooter";

// function Footer() {
//     return (
//         <footer className="bg-white border-t-2 border-gray-300">
//             <div className="lg:flex lg:items-center lg:space-x-8 lg:justify-between max-w-7xl mx-auto py-16 px-10">
//                 <div className="brand">
//                     {/* <Image
//                         src={cursorLogo}
//                         alt="cursor logo"
//                         layout="fixed"
//                         width={100}
//                         height={100}
//                         objectFit="contain"
//                     /> */}
//                     <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-[rgb(247,14,199)] to-[#1822FA] mb-8">
//                         CURSOR
//                     </h3>
//                     <iframe
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2047.9621042206609!2d73.97837828349716!3d15.42393095445034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x413acca8e6df29a7!2sComputer%20Engineering%20Department!5e1!3m2!1sen!2sin!4v1656099992212!5m2!1sen!2sin"
//                         className="w-full max-w-[400px] max-h-[300px] mx-auto md:hidden mb-8"
//                         style={{ border: 0 }}
//                         allowFullScreen=""
//                         loading="lazy"
//                         referrerPolicy="no-referrer-when-downgrade"
//                     ></iframe>
//                     <p className="addr md:text-lg">
//                         The Computer Students Organization <br />
//                         Farmagudi, Ponda <br />
//                         Goa, India - 403401
//                     </p>
//                     <p className="phone md:text-lg">0832-233635</p>
//                     <div className="links flex items-center space-x-4 mt-4">
//                         <a
//                             href="https://www.instagram.com/teamcursor/"
//                             className="md:text-3xl text-2xl text-black hover:text-orange-400"
//                         >
//                             <AiFillInstagram />
//                         </a>
//                         <a
//                             href="mailto:cursor.council2122@gmail.com"
//                             className="md:text-3xl text-2xl text-black hover:text-red-600"
//                         >
//                             <MdEmail />
//                         </a>
//                     </div>
//                 </div>
//                 <div className="contact grow max-w-sm mt-8 md:mt-0 mx-auto md:mx-0">
//                     <div className="suggestions">
//                         <label
//                             htmlFor="suggestions"
//                             className="block text-2xl font-semibold text-center mb-4"
//                         >
//                             Got anything in mind?
//                         </label>
//                         <textarea
//                             name="suggestions"
//                             id="suggestions"
//                             className="w-full h-32 border "
//                             placeholder="Drop us a message 😎"
//                         ></textarea>
//                         <button className="w-full rounded-lg border-2 border-green-500 px-4 py-2 hover:bg-green-500 transition-all">
//                             Send
//                         </button>
//                     </div>
//                     {/* <div className="relative my-8">
//                         <span className="bg-white p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                             Or
//                         </span>
//                         <hr className="bg-gray-700  w-4/5 mx-auto" />
//                     </div> */}
//                 </div>
//                 <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2047.9621042206609!2d73.97837828349716!3d15.42393095445034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x413acca8e6df29a7!2sComputer%20Engineering%20Department!5e1!3m2!1sen!2sin!4v1656099992212!5m2!1sen!2sin"
//                     className="w-[400px] h-[300px] md:block hidden"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//             </div>
//             {/* <CopyrightFooter /> */}
//         </footer>
//     );
// }

// export default Footer;

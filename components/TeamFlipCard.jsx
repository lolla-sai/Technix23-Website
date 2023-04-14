import Image from "next/image";
import {
    AiFillLinkedin,
    AiFillBehanceSquare,
    AiOutlineGithub,
    AiOutlineMail,
} from "react-icons/ai";

function TeamFlipCard({ name, role, dp, linkedin, behance, mail, github }) {
    return (
        <>
            <style jsx>{`
                .flip-card {
                    perspective: 1000px; /* Remove this if you don't want the 3D effect */
                }

                .flip-card-inner {
                    transition: transform 0.8s;
                    transform-style: preserve-3d;
                }

                .flip-card:hover .flip-card-inner {
                    transform: rotateY(180deg);
                }
            `}</style>

            <div className="bg-transparent w-[300px] h-[300px] group flip-card rounded-3xl overflow-hidden relative z-30">
                <div className="relative w-full h-full text-center group-hover:rotate-y-180 flip-card-inner transition-transform duration-300 flex">
                    <div
                        className="absolute w-full h-full bg-[#bbb] text-black"
                        style={{
                            "-webkit-backface-visibility": "hidden",
                            "backface-visibility": "hidden",
                        }}
                    >
                        <Image
                            src="/assets/images/Team Members/Dev and Design Team/DSC_2079 1.png"
                            alt="Avatar"
                            className="rounded-3xl"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div
                        className="absolute w-full h-full text-white bg-[#1AC769] flex items-center flex-col justify-center"
                        style={{
                            "-webkit-backface-visibility": "hidden",
                            "backface-visibility": "hidden",
                            transform: "rotateY(180deg)",
                        }}
                    >
                        <h1 className="text-2xl font-extrabold uppercase">{name}</h1>
                        <p className="mt-2">{role}</p>
                        <Image className="relative top-0 left-0" src={}/>
                        <Image className="relative top-0 right-0" src={}/>
                        <Image className="relative bottom-0 left-0" src={}/>
                        <Image className="relative bottom-0 right-0" src={}/>
                        <div className="flex-row flex items-center justify-center mt-2">
                            <a
                                className="px-1"
                                href={linkedin}
                                target="_blank"
                                rel="noopenner noreferrer"
                            >
                                <AiFillLinkedin />
                            </a>
                            <a
                                className="px-1"
                                href={behance}
                                target="_blank"
                                rel="noopenner noreferrer"
                            >
                                <AiFillBehanceSquare />
                            </a>
                            <a
                                className="px-1"
                                href={mail}
                                target="_blank"
                                rel="noopenner noreferrer"
                            >
                                <AiOutlineMail />
                            </a>
                            <a
                                className="px-1"
                                href={github}
                                target="_blank"
                                rel="noopenner noreferrer"
                            >
                                <AiOutlineGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TeamFlipCard;

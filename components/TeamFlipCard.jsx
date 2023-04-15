import Image from "next/image";
import {
    AiFillLinkedin,
    AiFillBehanceSquare,
    AiOutlineGithub,
    AiOutlineMail,
} from "react-icons/ai";

function TeamFlipCard({
    name,
    role,
    imgLink,
    linkedin,
    behance,
    mail,
    github,
    className = "bg-[#1AC769]",
    style = {},
}) {
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

            <div className="bg-transparent w-[280px] h-[280px] group flip-card rounded-3xl overflow-hidden relative z-30">
                <div className="relative w-full h-full text-center group-hover:rotate-y-180 flip-card-inner transition-transform duration-300 flex">
                    <div
                        className="absolute w-full h-full bg-[#bbb] text-black"
                        style={{
                            "-webkit-backface-visibility": "hidden",
                            "backface-visibility": "hidden",
                        }}
                    >
                        <Image
                            src={imgLink}
                            alt="Avatar"
                            className="rounded-3xl object-cover"
                            fill
                            // width={500}
                            // height={500}
                        />
                    </div>
                    <div
                        className={
                            "absolute w-full h-full text-white flex items-center flex-col justify-center " +
                            className
                        }
                        style={{
                            "-webkit-backface-visibility": "hidden",
                            "backface-visibility": "hidden",
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            ...style,
                        }}
                    >
                        <h1 className="md:text-2xl text-xl font-extrabold uppercase">
                            {name}
                        </h1>
                        <p className="mt-2">{role}</p>
                        {/* <Image className="relative top-0 left-0" src={}/>
                        <Image className="relative top-0 right-0" src={}/>
                        <Image className="relative bottom-0 left-0" src={}/>
                        <Image className="relative bottom-0 right-0" src={}/> */}
                        <div className="flex-row flex items-center justify-center mt-2">
                            {linkedin && (
                                <a
                                    className="px-1"
                                    href={linkedin}
                                    target="_blank"
                                    rel="noopenner noreferrer"
                                >
                                    <AiFillLinkedin />
                                </a>
                            )}

                            {behance && (
                                <a
                                    className="px-1"
                                    href={behance}
                                    target="_blank"
                                    rel="noopenner noreferrer"
                                >
                                    <AiFillBehanceSquare />
                                </a>
                            )}

                            {mail && (
                                <a
                                    className="px-1"
                                    href={mail}
                                    target="_blank"
                                    rel="noopenner noreferrer"
                                >
                                    <AiOutlineMail />
                                </a>
                            )}

                            {github && (
                                <a
                                    className="px-1"
                                    href={github}
                                    target="_blank"
                                    rel="noopenner noreferrer"
                                >
                                    <AiOutlineGithub />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TeamFlipCard;

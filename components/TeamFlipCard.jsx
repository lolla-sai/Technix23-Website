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
                .flip-card:hover .flip-card-inner {
                    transform: rotateY(180deg);
                }
            `}</style>

            <div className="bg-transparent w-[300px] h-[300px] group flip-card rounded-3xl overflow-hidden relative z-30">
                <div className="relative w-full h-full text-center group-hover:rotate-y-180 flip-card-inner transition-transform duration-300">
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
                        className="absolute w-full h-full text-white bg-[#1AC769] "
                        style={{
                            "-webkit-backface-visibility": "hidden",
                            "backface-visibility": "hidden",
                            transform: "rotateY(180deg)",
                        }}
                    >
                        <h1>{name}</h1>
                        <p>{role}</p>
                        <div className="flex-row flex">
                            <a
                                href={linkedin}
                                target="_blank"
                                rel="noopenner noreferrer"
                            >
                                <AiFillLinkedin />
                            </a>
                            <a
                                href={behance}
                                target="_blank"
                                rel="noopenner noreferrer"
                            >
                                <AiFillBehanceSquare />
                            </a>
                            <a
                                href={mail}
                                target="_blank"
                                rel="noopenner noreferrer"
                            >
                                <AiOutlineMail />
                            </a>
                            <a
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

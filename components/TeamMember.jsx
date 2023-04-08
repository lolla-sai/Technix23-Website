import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function TeamMember({
    bio,
    instagram,
    linkedIn,
    email,
    image: { imageLink, width, height },
}) {
    return (
        <div className="relative teamMember max-w-xs p-4 group cursor-pointer">
            <Image
                src={imageLink}
                width={width}
                height={height}
                className="group-hover:scale-105 group-hover:brightness-75 transition-all ease-in-out"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 p-4 opacity-0 group-hover:opacity-100 transition-all">
                {/* <p className="text-medium mb-4">{bio}</p> */}
                <p className="text-sm mb-4 text-center">
                    This is some bio you can write
                </p>
                <div className="flex items-center justify-center space-x-4 text-xl links">
                    <a
                        href={instagram}
                        className="text-xl text-black hover:text-orange-400"
                    >
                        <AiFillInstagram />
                    </a>
                    <a
                        href={linkedIn}
                        className="text-xl text-black hover:text-red-600"
                    >
                        <BsLinkedin />
                    </a>
                    <a
                        href={`mailto:${email}`}
                        className="text-xl text-black hover:text-blue-600"
                    >
                        <MdEmail />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TeamMember;

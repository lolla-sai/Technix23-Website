import HeroText from "@/components/HeroText";
import { londrinasolid } from "@/data/fonts";
import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import modalContext from "@/store/modalContext";
import Image from "next/image";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { AiOutlineLike, AiOutlineYoutube } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import MiniProp from "@/components/MiniProp";
import TeamFlipCard from "@/components/TeamFlipCard";
import Menu from "@/components/Menu";
import Head from "next/head";

const props = [
    {
        className: "top-[60%] left-[20%] z-10 fixed",
        size: 40,
        color: "#44007B",
        PropIcon: BsWhatsapp,
    },
    {
        className: "top-[35%] left-[20%] z-10 fixed",
        size: 50,
        color: "#44007B",
        PropIcon: BsInstagram,
    },
    {
        className: "top-[65%] right-[20%] z-10 fixed",
        size: 25,
        color: "#44007B",
        PropIcon: AiOutlineYoutube,
    },
    {
        className: "top-[45%] right-[50%] z-10 fixed",
        size: 40,
        color: "#44007B",
        PropIcon: CiTwitter,
    },
    {
        className: "top-[35%] right-[27%] z-10 fixed",
        size: 40,
        color: "#44007B",
        PropIcon: AiOutlineLike,
    },
    {
        className: "top-[10%] left-[20%] z-10 fixed",
        size: 40,
        color: "#44007B",
        PropIcon: BsWhatsapp,
    },
    {
        className: "top-[90%] left-[5%] z-10 fixed",
        size: 50,
        color: "#44007B",
        PropIcon: BsInstagram,
    },
    {
        className: "top-[33%] right-[20%] z-10 fixed",
        size: 25,
        color: "#44007B",
        PropIcon: AiOutlineYoutube,
    },
    {
        className: "top-[27%] right-[20%] z-10 fixed",
        size: 40,
        color: "#44007B",
        PropIcon: CiTwitter,
    },
    {
        className: "top-[85%] right-[27%] z-10 fixed",
        size: 40,
        color: "#44007B",
        PropIcon: AiOutlineLike,
    },
];

function Team() {
    const { navbarOpen, setNavbarOpen } = useContext(modalContext);

    return (
        <section
            id="team"
            className="p-6 bg-[#1E1E1E] relative min-h-screen overflow-hidden"
        >
            <Head>
                <meta
                    property="og:image"
                    content="https://ahrefs.com/blog/wp-content/uploads/2020/01/fb-open-graph-1.jpg"
                />
                <title>Cursor - Team</title>
            </Head>
            {navbarOpen && (
                <div className="modal h-full w-full fixed inset-0 z-50">
                    <Menu />
                </div>
            )}

            {props.map((prop) => (
                <MiniProp className={prop.className}>
                    <prop.PropIcon size={prop.size} color={prop.color} />
                </MiniProp>
            ))}

            <HeroText
                text="Meet The Team"
                className={
                    londrinasolid.className +
                    " md:text-5xl text-3xl mx-auto w-fit my-12"
                }
            />

            <div className="absolute top-0 left-0 w-[25vmax] max-w-[390px] max-h-[390px] h-[25vmax] -translate-x-1/4 -translate-y-1/4">
                <Image
                    className="object-contain"
                    style={{
                        transform: "rotateY(180deg)",
                    }}
                    src={"/assets/images/Countdown/countdown-right_leaf.png"}
                    alt="Upper Left Image"
                    // width={393}
                    // height={407}
                    fill
                />
            </div>

            <div className="absolute bottom-0 right-0 max-w-[390px] max-h-[390px] w-[25vmax] h-[25vmax] translate-x-1/4 translate-y-1/4">
                <Image
                    className="object-contain"
                    src={"/assets/images/Countdown/countdown-left_leaf.png"}
                    alt="Bottom Right Image"
                    style={{
                        transform: "rotateY(180deg)",
                    }}
                    // width={393}
                    // height={407}
                    fill
                />
            </div>

            <div className="absolute top-10 right-10 z-20">
                {/* <AnimatedButton /> */}
                <GiHamburgerMenu
                    size={40}
                    color="white"
                    className="cursor-pointer"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                />
            </div>

            {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 xsm:grid-cols-2 grid-cols-1 gap-1 max-w-6xl mx-auto mb-10">
                {members.map((member) => (
                    <TeamMember {...member} key={member.bio} />
                ))}
            </div> */}
            <TeamFlipCard name="Sai" role="dev" />
        </section>
    );
}

export default Team;

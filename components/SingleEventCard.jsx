import Link from "next/link";
import React from "react";
import Image from "next/image";

function SingleEventCard({
    parentDivClassName,
    childDivClassName,
    eventName,
    imgCardDecor,
    leftFeatherImg,
    rightFeatherImg,
    eventHref,
    cursorImg,
    cartoonImg,
    eventType = "",
}) {
    return (
        <div
            className={
                "event_tab group rounded-[90px] inline-block relative md:h-[500px] h-[350px] shrink-0 md:w-64 w-[150px] md:cursor-pointer select-none outline-none " +
                parentDivClassName
            }
            style={{
                "-webkit-tap-highlight-color": "transparent",
                WebkitTapHighlightColor: "transparent",
            }}
        >
            <div className="e-cnt1 group-hover:hidden hidden md:flex w-full h-full items-center flex-col  justify-evenly relative z-10 ">
                <img src={imgCardDecor} alt="" />
                <h2 className="md:text-3xl text-xl px-4 text-center">
                    {eventName}
                </h2>
                <img src={imgCardDecor} alt="" className="rotate-180" />
            </div>

            <img
                src={rightFeatherImg}
                alt=""
                className="e_top_leaf w-[70px] h-[70px] md:w-auto md:h-auto md:group-hover:opacity-100 md:opacity-0 opacity-1 absolute top-0 right-0 translate-x-[30%] -translate-y-[30%] md:translate-x-[0%] md:-translate-y-[0%] md:top-[-15%] md:left-[58%] hidden md:block"
            />
            <img
                src={leftFeatherImg}
                alt=""
                className="e_bottom_leaf w-[70px] h-[70px] md:w-auto md:h-auto md:group-hover:opacity-100 md:opacity-0 opacity-100 absolute bottom-0 left-0 -translate-x-[30%] translate-y-[30%] md:-translate-x-[0%] md:translate-y-[0%] md:top-[78%] md:left-[-20%] hidden md:block"
            />

            <Link href={`/register/${eventHref}`} as={`/register/${eventHref}`}>
                <div
                    style={{
                        backgroundImage: `url('${cartoonImg}')`,
                    }}
                    className={
                        "e-cnt2 md:hidden w-full h-full rounded-[90px] bg-white relative z-10 bg-bottom bg-no-repeat group-hover:block " +
                        childDivClassName
                    }
                >
                    <Image
                        id="cursor"
                        src={"/" + cursorImg}
                        width={30}
                        height={30}
                        alt="Cursor Image"
                        className="mx-auto scale-x-[-1] my-8 hidden md:block"
                    />
                    <p className="md:text-3xl text-xl whitespace-pre-line text-center mt-8 mb:mt-0">
                        {eventName}
                        {eventType && (
                            <>
                                <br />
                                {eventType}
                            </>
                        )}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default SingleEventCard;

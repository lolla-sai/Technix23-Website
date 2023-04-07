import Link from "next/link";
import React from "react";

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
}) {
    return (
        <div
            className={
                "event_tab group rounded-[90px] inline-block relative h-[500px] shrink-0 md:w-64 sm:w-52 cursor-pointer  " +
                parentDivClassName
            }
        >
            <div className="e-cnt1 group-hover:hidden w-full h-full flex items-center flex-col gap-[25%] justify-center">
                <img src={imgCardDecor} alt="" />
                <h2 className="md:text-3xl text-xl">{eventName}</h2>
                <img src={imgCardDecor} alt="" className="rotate-180" />
            </div>

            <img
                src={rightFeatherImg}
                alt=""
                className="e_top_leaf group-hover:opacity-100 opacity-0 absolute top-[-15%] left-[58%]"
            />
            <img
                src={leftFeatherImg}
                alt=""
                className="e_bottom_leaf group-hover:opacity-100 opacity-0 absolute top-[78%] left-[-20%]"
            />

            <Link href={eventHref}>
                <div
                    style={{
                        backgroundImage: `url('${cartoonImg}')`,
                    }}
                    className={
                        "e-cnt2 hidden w-full h-full rounded-[90px] bg-white relative z-1 bg-bottom bg-no-repeat group-hover:block " +
                        childDivClassName
                    }
                >
                    <img
                        id="cursor"
                        src={cursorImg}
                        alt=""
                        className="mx-auto scale-x-[-1] my-8"
                    />
                    <p className="text-3xl whitespace-pre-line text-center ">
                        {eventName}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default SingleEventCard;

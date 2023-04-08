import React from "react";

function AboutNew() {
    return (
        <div className="z-[-1] fixed w-screen h-screen">
            <Image src={background} alt="Image" fill />
            {/* </div> */}
            <div className="lg:flex lg:flex-col hidden">
                <div className="flex flex-row relative mb-5">
                    <Image
                        src={image1}
                        alt="Image"
                        className="w-[230px] py-10 relative left-60"
                        style={{ transform: "rotate(-20deg)" }}
                    />
                    <Image
                        src={image2}
                        alt="Image"
                        className="w-[230px] py-10 mx-auto"
                        style={{ transform: "rotate(15deg)" }}
                    />
                    <Image
                        src={image3}
                        alt="Image"
                        className="w-[230px] py-10 relative right-60"
                        style={{ transform: "rotate(-17deg)" }}
                    />
                </div>
                <div className="flex">
                    <Image
                        src={image3}
                        alt="Image"
                        className="w-[210px] py-5 relative left-28"
                        style={{ transform: "rotate(15deg)" }}
                    />
                    <div className="flex justify-center items-center flex-col w-[30vw] max-h-[50vw] mx-auto">
                        <h1 className="text-2xl font-extrabold mb-3">
                            About Technix
                        </h1>
                        <p className="text-sm font-serif text-center">
                            A solar flare is expected to come close to Earth's
                            magnetic field on Sunday (5 June) or Monday (6 June)
                            causing a geomagnetic solar storm. Space experts
                            have confirmed an eruption on the sun occurred
                            yesterday (2 June), hurling a solar flare known as
                            coronal mass ejection (CME) into space
                        </p>
                    </div>
                    <Image
                        src={image1}
                        alt="Image"
                        className="w-[210px] py-5 relative right-12 -top-12"
                        style={{ transform: "rotate(15deg)" }}
                    />
                </div>
                <div className="flex justify-between mb-5 w-[80vw] mx-auto">
                    <Image
                        src={image1}
                        alt="Image"
                        className="w-[230px] py-10"
                        style={{ transform: "rotate(15deg)" }}
                    />
                    <Image
                        src={image2}
                        alt="Image"
                        className="w-[230px] py-10 top-10 relative"
                        style={{ transform: "rotate(-10deg)" }}
                    />
                    <Image
                        src={image3}
                        alt="Image"
                        className="w-[230px] py-10"
                        style={{ transform: "rotate(13deg)" }}
                    />
                    <Image
                        src={image4}
                        alt="Image"
                        className="w-[230px] py-10"
                        style={{ transform: "rotate(-15deg)" }}
                    />
                </div>
            </div>
            {/* For small screens - mobile version */}
            <div className="lg:hidden">
                {/* For images at top */}
                <div className="flex flex-row justify-evenly">
                    <Image
                        src={image1}
                        alt="Image"
                        className="w-2/5 sm:w-1/3 py-10 rotate-12"
                    />
                    <Image
                        src={image2}
                        alt="Image"
                        className="w-2/5 sm:w-1/3 py-10 -rotate-12"
                    />
                </div>
                {/* For About Technix part */}
                <div className="flex justify-center items-center h-[45vh] sm:h-[25vh] flex-col w-[80vw] mx-auto">
                    <h1 className="text-2xl font-extrabold mb-3">
                        About Technix
                    </h1>
                    <p className="text-sm font-serif">
                        A solar flare is expected to come close to Earth's
                        magnetic field on Sunday (5 June) or Monday (6 June)
                        causing a geomagnetic solar storm. Space experts have
                        confirmed an eruption on the sun occurred yesterday (2
                        June), hurling a solar flare known as coronal mass
                        ejection (CME) into space
                    </p>
                </div>
                {/* For images at bottom */}
                <div className="flex flex-row justify-evenly">
                    <Image
                        src={image3}
                        alt="Image"
                        className="w-2/5 sm:w-1/3 py-10 rotate-12"
                    />
                    <Image
                        src={image4}
                        alt="Image"
                        className="w-2/5 sm:w-1/3 py-10 -rotate-12"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutNew;

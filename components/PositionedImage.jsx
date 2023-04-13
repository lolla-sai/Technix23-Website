import React from "react";
import Image from "next/image";

function PositionedImage({
    src,
    alt,
    containerClasses = "",
    imgClasses = "",
    ...props
}) {
    return (
        <div
            className={
                " absolute -translate-x-1/2 -translate-y-1/2 " +
                containerClasses
            }
            {...props}
        >
            <Image
                src={src}
                alt={alt}
                className={"object-contain " + imgClasses}
                fill
            />
        </div>
    );
}

export default PositionedImage;

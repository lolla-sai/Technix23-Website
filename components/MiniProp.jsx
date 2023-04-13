import React from "react";

function MiniProp({ top, left, className, children }) {
    return (
        <div
            style={{
                top: top,
                left: left,
            }}
            className={"absolute " + className}
        >
            {children}
        </div>
    );
}

export default MiniProp;

import React from "react";

function Button({ children, className = "", style = {} }) {
    return (
        <div
            className={
                "bg-[#ffe198] border-2 border-black rounded-full px-4 text-2xl cursor-pointer py-2 text-center inline-block z-20 " +
                className
            }
            style={{
                boxShadow: "-3px 4px 0 #262626",
                ...style,
            }}
        >
            {children}
        </div>
    );
}

export default Button;

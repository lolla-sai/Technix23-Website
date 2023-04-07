import Head from "next/head";
import React, { useEffect, useRef } from "react";
import HeroTextStyles from "./HeroText.module.css";

function HeroText({ text, inverted = false, className = {}, textStyles = {} }) {
    let heroTextElement = useRef(null);

    let stylesToApply = inverted
        ? HeroTextStyles.heroTitleInverted
        : HeroTextStyles.heroTitle;

    useEffect(() => {
        heroTextElement.current.style.setProperty(
            "--after-content",
            "'" + text + "'"
        );
    }, []);

    return (
        <div>
            <div
                className={
                    stylesToApply +
                    " " +
                    className +
                    ` relative z-30 after:absolute after:-z-20 after:top-1 after:-left-1 `
                }
                // after:absolute after:-z-20 after:top-1 after:-left-1
                // after:content-['${text}']
                style={textStyles}
                ref={heroTextElement}
            >
                {text}
            </div>
        </div>
    );
}

export default HeroText;

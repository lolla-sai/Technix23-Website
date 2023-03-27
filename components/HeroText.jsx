import Head from "next/head";
import React, { useEffect, useRef } from "react";
import HeroTextStyles from "./HeroText.module.css";

function HeroText({ text, className = {}, styles = {} }) {
    let heroTextElement = useRef(null);

    useEffect(() => {
        heroTextElement.current.style.setProperty(
            "--after-content",
            "'" + text + "'"
        );
    }, []);

    return (
        <div>
            <Head>
                <title>Technix '23 - Home</title>
            </Head>
            <div
                className={
                    HeroTextStyles.heroTitle +
                    " " +
                    className +
                    ` relative z-30 after:absolute after:-z-20 after:top-1 after:-left-1  `
                }
                // after:absolute after:-z-20 after:top-1 after:-left-1
                // after:content-['${text}']
                style={styles}
                ref={heroTextElement}
            >
                {text}
            </div>
        </div>
    );
}

export default HeroText;
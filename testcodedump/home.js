import { Inter } from "next/font/google";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const inter = Inter({ subsets: ["latin"], weight: "900" });

export default function Home() {
    const header = useRef();
    const image = useRef();
    const blockRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline();

        gsap.to(header.current, { color: "#7F00FF" }).duration(3);
        gsap.to(image.current, {
            duration: 4,
            x: 100,
            ease: "bounce",
            rotate: "360deg",
        });

        tl.to(blockRef.current, { x: 500, duration: 10 });

        ScrollTrigger.create({
            trigger: blockRef.current,
            start: "top center",
            end: "top 100px",
            markers: true,
            animation: tl,
            // toggleActions: "play none none reset",
            scrub: true,
        });

        // return () => {};
    }, [header, image, blockRef]);

    return (
        <>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100vh",
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <h1
                        className={inter.className}
                        style={{
                            fontSize: 104,
                            textAlign: "center",
                            color: "#000",
                        }}
                        ref={header}
                    >
                        I am a Header
                    </h1>
                    <Image
                        src="https://seeklogo.com/images/A/Ashok_Chakra-logo-04C3E2D41D-seeklogo.com.png"
                        priority
                        width="200"
                        height="200"
                        ref={image}
                    />
                </div>
            </div>
            <div>
                <div style={{ height: 400 }}>
                    <div
                        className="a"
                        style={{
                            width: 200,
                            height: 200,
                            display: "grid",
                            placeItems: "center",
                            fontSize: 32,
                            color: "#fff",
                            backgroundColor: "red",
                        }}
                    >
                        a
                    </div>
                </div>
                <div style={{ height: 400 }}>
                    <div
                        className="b"
                        style={{
                            width: 200,
                            height: 200,
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "green",
                            fontSize: 32,
                            color: "#fff",
                        }}
                        id="b"
                        ref={blockRef}
                    >
                        b
                    </div>
                </div>
                <div style={{ height: 400 }}>
                    <div
                        className="c"
                        style={{
                            width: 200,
                            height: 800,
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "blue",
                            fontSize: 32,
                            color: "#fff",
                        }}
                    >
                        c
                    </div>
                </div>
            </div>
        </>
    );
}

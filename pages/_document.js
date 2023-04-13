import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body
                className={
                    "scrollbar overflow-x-hidden scrollbar-thumb-gray-400 scrollbar-track-gray-500 "
                }
            >
                <Main />
                <NextScript />

                {/*Below we add the modal wrapper*/}
                <div id="modal-root"></div>
            </body>
        </Html>
    );
}

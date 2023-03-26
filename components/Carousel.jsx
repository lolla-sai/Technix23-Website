import slides from "@/data/slides";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Carousel(props) {
    const { image, setImage } = props;
    const changeImage = (url) => {
        setImage(url);
    };
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="max-w-[1400px] w-full m-auto py-4 px-4 group relative">
            <div className="group flex h-[40vh] gap-x-2">
                <div
                    style={{
                        backgroundImage: `url(${slides[currentIndex % 5].url})`,
                    }}
                    className="w-1/3 h-full rounded-2xl bg-center bg-cover duration-500 px-2"
                    onClick={() => changeImage(slides[currentIndex].url)}
                ></div>
                <div
                    style={{
                        backgroundImage: `url(${
                            slides[(currentIndex + 1) % 5].url
                        })`,
                    }}
                    className="w-1/3 px-2 h-full rounded-2xl bg-center bg-cover duration-500"
                    onClick={() =>
                        changeImage(slides[(currentIndex + 1) % 5].url)
                    }
                ></div>
                <div
                    style={{
                        backgroundImage: `url(${
                            slides[(currentIndex + 2) % 5].url
                        })`,
                    }}
                    className="w-1/3 h-full rounded-2xl bg-center bg-cover duration-500 px-2"
                    onClick={() =>
                        changeImage(slides[(currentIndex + 2) % 5].url)
                    }
                ></div>
            </div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className="text-2xl cursor-pointer"
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;

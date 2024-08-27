import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ButtonScrollbar = ({ wrapperListRef }) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        if (wrapperListRef.current) {
            wrapperListRef.current.scrollTo({
                top: 0,
                left: scrollPosition,
                behavior: "smooth"
            });
        }
    }, [scrollPosition, wrapperListRef]);

    const handleScrollLeft = () => {
        const newScrollPosition = scrollPosition - 200;
        setScrollPosition(newScrollPosition >= 0 ? newScrollPosition : 0);
    };

    const handleScrollRight = () => {
        const newScrollPosition = scrollPosition + 200;
        setScrollPosition(newScrollPosition);
    };

    return (
        <>
            <button className="hidden md:block absolute z-10 text-white bg-[#181A1C] rounded-full w-12 h-12 border-[1px] border-zinc-600 left-0 top-1/2 transform -translate-y-1/2"
                onClick={handleScrollLeft}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="hidden md:block absolute z-10 text-white bg-[#181A1C] rounded-full w-12 h-12 border-[1px] border-zinc-600 right-0 top-1/2 transform -translate-y-1/2"
                onClick={handleScrollRight}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </>
    )
};

export default ButtonScrollbar;
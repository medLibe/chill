import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SubtitleVideoPlayer = () => {
    return (
        <div className="absolute bottom-9 right-2 sm:bottom-10 sm:right-4 w-72 sm:w-80 bg-[#22282A] py-2 px-4 sm:py-2 sm:px-5 z-50 rounded-lg flex">
            <div className="text-start mr-12">
                <p className="text-white font-bold text-sm sm:text-base">Audio</p>
                <ul className="list-none mt-3 text-xs sm:text-sm space-y-3">
                    <li><span className="text-white"><FontAwesomeIcon icon={faCheck} /> Bahasa Inggris</span></li>
                </ul>
            </div>
            <div className="text-start mb-3">
                <p className="text-white font-bold text-sm sm:text-base">Terjemahan</p>
                <ul className="list-none mt-3 text-xs sm:text-sm space-y-3">
                    <li><span className="text-white"><FontAwesomeIcon icon={faCheck} /> Bahasa Indonesia</span></li>
                    <li><span className="text-[#C1C2C4]"><FontAwesomeIcon className="text-[#22282A]" icon={faCheck} /> Bahasa Inggris</span></li>
                </ul>
            </div>
        </div>

    )
};

export default SubtitleVideoPlayer;
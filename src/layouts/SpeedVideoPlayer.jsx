import React from "react";

const SpeedVideoPlayer = () => {
    return (
        <div className="block absolute bottom-9 right-2 sm:bottom-10 sm:right-4 w-36 md:w-44 bg-[#22282A] py-2 px-4 z-50 rounded-lg">
            <h6 className="text-white font-bold text-sm md:text-base mb-2">Kecepatan</h6>
            <ul className="text-white space-y-2 text-xs md:text-sm">
                <li>0.5x</li>
                <li>0.75x</li>
                <li>1x (Normal)</li>
                <li>1.25x</li>
                <li>1.5x</li>
            </ul>
        </div>
    )
};

export default SpeedVideoPlayer;
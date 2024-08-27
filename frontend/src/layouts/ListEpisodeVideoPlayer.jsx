import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ListEpisodeVideoPlayer = () => {
    return (
        <div className="absolute bottom-9 right-2 sm:bottom-10 sm:right-4 z-50 rounded-lg w-80 md:w-96">
            <div className="bg-[#3D4142] p-2">
                <h5 className="text-white font-bold text-xs md:text-sm"><FontAwesomeIcon icon={faArrowLeftLong} />&ensp;Episode Selanjutnya</h5>
            </div>
            <div className="bg-[#3D4142] p-2">
                <h5 className="text-white font-bold text-xs md:text-sm">Episode 1</h5>
            </div>
            <div className="bg-[#22282A] p-2">
                <h5 className="text-white font-bold text-xs md:text-sm mb-2">Episode 2</h5>
                <div className="flex">
                    <img src="/horizontals/image209.png" alt="Next Episode" className="w-30 h-20" />
                    <div className="ms-2 text-white">
                        <h6 className="font-bold text-xs mb-2">Episode 2: Biscuits</h6>
                        <p className="text-xs block sm:hidden">It’s Ted’s first day of coaching, and fans aren’t happy. He makes...</p>
                        <p className="text-xs hidden sm:block">It’s Ted’s first day of coaching, and fans aren’t happy. He makes little headway but remains undeterred as the team...</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#3D4142] p-2">
                <h5 className="text-white font-bold text-xs md:text-sm">Episode 3</h5>
            </div>
            <div className="bg-[#3D4142] p-2">
                <h5 className="text-white font-bold text-xs md:text-sm">Episode 4</h5>
            </div>
        </div>
    )
}

export default ListEpisodeVideoPlayer;
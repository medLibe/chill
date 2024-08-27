import { faClosedCaptioning } from "@fortawesome/free-regular-svg-icons";
import { faBackwardFast, faDashboard, faExpand, faForwardFast, faListUl, faPause, faPlay, faStepForward, faTimes, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import SubtitleVideoPlayer from "./SubtitleVideoPlayer";
import SpeedVideoPlayer from "./SpeedVideoPlayer";
import NextEpisodeVideoPlayer from "./NextEpisodeVideoPlayer";
import ListEpisodeVideoPlayer from "./ListEpisodeVideoPlayer";

const VideoPlayer = ({ onClose, typeMovie }) => {
    const [isPlay, setisPlay] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showSpeed, setShowSpeed] = useState(false);
    const [showNextEpisode, setShowNextEpisode] = useState(false);
    const [showListEpisode, setShowListEpisode] = useState(false);

    const togglePlayPause = () => {
        setisPlay(prevSate => !prevSate);
    }

    const toggleSpeed = () => {
        setShowSpeed(prevSate => !prevSate);
        setShowSubtitle(false);
        setShowNextEpisode(false);
        setShowListEpisode(false);
    }

    const toggleSubtitle = () => {
        setShowSubtitle(prevSate => !prevSate);
        setShowSpeed(false);
        setShowNextEpisode(false);
        setShowListEpisode(false);
    }

    const toggleNextEpisode = () => {
        setShowNextEpisode(prevSate => !prevSate);
        setShowSubtitle(false);
        setShowSpeed(false);
        setShowListEpisode(false);
    }

    const toggleListEpisode = () => {
        setShowListEpisode(prevSate => !prevSate);
        setShowSubtitle(false);
        setShowSpeed(false);
        setShowNextEpisode(false);
    }

    return (
        <>
            {/* type movie === series */}
            {typeMovie === "series" && (
                <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-90">
                    {/* for content modal */}
                    <div className="bg-[#181A1C] rounded-lg overflow-hidden max-w-4xl w-11/12">
                        {/* header content */}
                        <div className="relative">
                            <div className="bg-cover bg-center h-[28vh] sm:h-[34vh] md:h-[50vh]" style={{ backgroundImage: "url('/properties/series_player.png')" }}>
                                {/* for content modal */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="text-2xl md:text-4xl text-[#C1C2C4] border-[3px] border-[#C1C2C4] rounded-full w-12 h-12 md:w-16 md:h-16"
                                        onClick={togglePlayPause}>
                                        <FontAwesomeIcon icon={isPlay ? faPause : faPlay} />
                                    </button>
                                </div>

                                {/* title in mobile view */}
                                <div className="block sm:hidden absolute top-0 left-0 text-white p-4 font-bold text-sm">Ted Lasso Episode 1: Pilot</div>

                                {/* skip intro */}
                                <div className="absolute bottom-10 right-2 md:bottom-14 md:right-4">
                                    <button className="bg-white border-[1px] border-[#C1C2C4] text-black text-[0.6rem] md:text-xs font-bold rounded-full px-2 py-[0.15rem] md:px-4 md:py-1 z-50">Lewati Intro</button>
                                </div>

                                {/* pop up list episode */}
                                {showListEpisode && <ListEpisodeVideoPlayer />}

                                {/* pop up next episode */}
                                {showNextEpisode && <NextEpisodeVideoPlayer />}

                                {/* pop up subtitle */}
                                {showSubtitle && <SubtitleVideoPlayer />}

                                {/* spop up speed */}
                                {showSpeed && <SpeedVideoPlayer />}

                                {/* buttons control */}
                                <div className="absolute bottom-0 left-0 bg-[#181A1C] bg-opacity-60 w-full p-2">
                                    <div className="flex text-sm md:text-lg md:mx-4 justify-between">
                                        {/* buttons control left */}
                                        <div className="text-white">
                                            <button className="me-4"><FontAwesomeIcon icon={faPlay} /></button>
                                            <button className="me-4"><FontAwesomeIcon icon={faBackwardFast} /></button>
                                            <button className="me-4"><FontAwesomeIcon icon={faForwardFast} /></button>
                                            <button className="me-4"><FontAwesomeIcon icon={faVolumeUp} /></button>
                                        </div>

                                        {/* title in tablet or desktop view */}
                                        <div className="hidden sm:block text-white text-sm md:text-base">
                                            Ted Lasso Episode 1: Pilot
                                        </div>

                                        {/* buttons control right */}
                                        <div className="text-white">
                                            <button className="me-4" onClick={toggleNextEpisode}><FontAwesomeIcon icon={faStepForward} /></button>
                                            <button className="me-5 md:me-8" onClick={toggleListEpisode}><FontAwesomeIcon icon={faListUl} /></button>
                                            <button className="me-4" onClick={toggleSubtitle}><FontAwesomeIcon icon={faClosedCaptioning} /></button>
                                            <button className="me-4" onClick={toggleSpeed}><FontAwesomeIcon icon={faDashboard} /></button>
                                            <button><FontAwesomeIcon icon={faExpand} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* for close */}
                            <button className="absolute top-2 right-2 bg-[#181A1C] hover:bg-[#15171a] active:bg-[#0b0c0e] bg-opacity-50 text-[#C1C2C4] text-sm rounded-full w-8 h-8 z-50"
                                onClick={onClose}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* type movie === film */}
            {typeMovie === "film" && (
                <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-90">
                    {/* for content modal */}
                    <div className="bg-[#181A1C] rounded-lg overflow-hidden max-w-4xl w-11/12">
                        {/* header content */}
                        <div className="relative">
                            <div className="bg-cover bg-center h-[28vh] sm:h-[34vh] md:h-[50vh]" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('/properties/film_player.png')" }}>
                                {/* for content modal */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="text-2xl md:text-4xl text-[#C1C2C4] border-[3px] border-[#C1C2C4] rounded-full w-12 h-12 md:w-16 md:h-16"
                                        onClick={togglePlayPause}>
                                        <FontAwesomeIcon icon={isPlay ? faPause : faPlay} />
                                    </button>
                                </div>

                                {/* title in mobile view */}
                                <div className="block sm:hidden absolute top-0 left-0 text-white p-4 font-bold text-sm">A Man Called Otto</div>

                                {/* skip intro */}
                                <div className="absolute bottom-10 right-2 md:bottom-14 md:right-4">
                                    <button className="bg-white border-[1px] border-[#C1C2C4] text-black text-[0.6rem] md:text-xs font-bold rounded-full px-2 py-[0.15rem] md:px-4 md:py-1 z-50">Lewati Intro</button>
                                </div>

                                {/* pop up list episode */}
                                {showListEpisode && <ListEpisodeVideoPlayer />}

                                {/* pop up next episode */}
                                {showNextEpisode && <NextEpisodeVideoPlayer />}

                                {/* pop up subtitle */}
                                {showSubtitle && <SubtitleVideoPlayer />}

                                {/* spop up speed */}
                                {showSpeed && <SpeedVideoPlayer />}

                                {/* buttons control */}
                                <div className="absolute bottom-0 left-0 bg-[#181A1C] bg-opacity-60 w-full p-2">
                                    <div className="flex text-sm md:text-lg md:mx-4 justify-between">
                                        {/* buttons control left */}
                                        <div className="text-white">
                                            <button className="me-4"><FontAwesomeIcon icon={faPlay} /></button>
                                            <button className="me-4"><FontAwesomeIcon icon={faBackwardFast} /></button>
                                            <button className="me-4"><FontAwesomeIcon icon={faForwardFast} /></button>
                                            <button className="me-4"><FontAwesomeIcon icon={faVolumeUp} /></button>
                                        </div>

                                        {/* title in tablet or desktop view */}
                                        <div className="hidden sm:block text-white text-sm md:text-base">
                                            A Man Called Otto
                                        </div>

                                        {/* buttons control right */}
                                        <div className="text-white">
                                            <button className="me-4" onClick={toggleSubtitle}><FontAwesomeIcon icon={faClosedCaptioning} /></button>
                                            <button className="me-4" onClick={toggleSpeed}><FontAwesomeIcon icon={faDashboard} /></button>
                                            <button><FontAwesomeIcon icon={faExpand} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* for close */}
                            <button className="absolute top-2 right-2 bg-[#181A1C] hover:bg-[#15171a] active:bg-[#0b0c0e] bg-opacity-50 text-[#C1C2C4] text-sm rounded-full w-8 h-8 z-50"
                                onClick={onClose}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};

export default VideoPlayer;
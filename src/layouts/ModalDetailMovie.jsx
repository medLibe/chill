import { faPlus, faTimes, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ModalDetailMovie = ({ onClose, sectionContent, typeMovie }) => {
    const episodeList = [
        {"title": "Pilot", "desc" : "American footbal coach Ted Lasso is...", "img": "/horizontals/image214.png", "duration" : "30 min"},
        {"title": "Biscuits", "desc" : "It's Ted's first day of coaching, and fa...", "img": "/horizontals/image209.png", "duration" : "29 min"},
        {"title": "Trent Crimm: Independent", "desc" : "To arrange an in-depth expose,...", "img": "/horizontals/image210.png", "duration" : "30 min"},
        {"title": "For The Children", "desc" : "Rebecca hosts the team's annual...", "img": "/horizontals/image211.png", "duration" : "33 min"},
        {"title": "Tan Lines", "desc" : "With his wife and son visiting from...", "img": "/horizontals/image212.png", "duration" : "31 min"},
    ];

    const recommendationList = [
        {"img": "/verticals/image212.png"},
        {"img": "/verticals/image221.png"},
        {"img": "/verticals/image235.png"},
    ]

    return (
        <>
        {/* type movie === series */}
        {typeMovie === "series" && (
            <div className="fixed z-50 inset-0 flex items-center justify-center bg-[#181A1C] bg-opacity-50">
                {/* for content modal */}
                <div className="bg-[#181A1C] rounded-lg overflow-hidden w-11/12 sm:w-7/12 md:w-8/12 lg:w-6/12 xl:w-4/12 2xl:w-3/12">
                    {/* header content */}
                    <div className="relative">
                        <div className="bg-cover bg-center h-48 lg:h-56 2xl:h-72" style={{ backgroundImage: "url('/properties/series_popup.png')" }}></div>
                        <button className="absolute top-2 right-2 bg-[#181A1C] hover:bg-[#15171a] active:bg-[#0b0c0e] bg-opacity-50 text-[#C1C2C4] text-sm rounded-full w-8 h-8 z-50"
                            onClick={onClose}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <div className="absolute inset-0 flex items-end px-4 pb-4"
                            style={{
                                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                            }}>

                            <div className="w-full relative">
                                <h5 className="text-white font-bold text-2xl mb-3">Ted Lasso</h5>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <button className="bg-[#0F1E93] hover:bg-[#252e74] active:bg-[#222a69] text-white text-sm md:text-base px-4 py-2 me-3 rounded-3xl">Mulai</button>
                                        <button className="bg-transparent border border-[#C1C2C4] text-[#C1C2C4] text-sm md:text-base rounded-full w-8 h-8 me-3"><FontAwesomeIcon icon={faPlus} /></button>
                                        {sectionContent === 'premiums' && (
                                            <button className="bg-[#B7A207] text-white text-xs md:text-sm px-4 py-1 me-3 rounded-3xl">Premium</button>
                                        )}
                                    </div>
                                    <div>
                                        <button className="bg-transparent border border-[#C1C2C4] text-[#C1C2C4] text-sm md:text-base rounded-full w-8 h-8">
                                            <FontAwesomeIcon icon={faVolumeMute} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* body content */}
                    <div className="p-4">
                        <div className="text-[#C1C2C4] text-xs md:text-sm flex space-x-1 items-center mb-2">
                            <span>2020</span>
                            <span>10 episode</span>
                            <span className="rounded-full w-4 h-4 text-[0.6em] border-[1px] border-[#C1C2C4] flex items-center">16+</span>
                        </div>

                        <p className="text-white text-xs md:text-sm lg:text-base mb-5">Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi ke London untuk mengelola AFC Richmond, tim sepak bola Liga Utama Inggris yang kesulitan.</p>

                        <div>
                            <table className="text-xs text-white border-separate border-spacing-2">
                                <tbody>
                                    <tr>
                                        <th className="text-start font-normal text-[#C1C2C4] align-top">Cast</th>
                                        <td>Jason Sudeikis, Brett Goldstein, Brendan Hunt, Nick Mohammed, dan lain-lain</td>
                                    </tr>
                                    <tr>
                                        <th className="text-start font-normal text-[#C1C2C4] align-top">Genre</th>
                                        <td>Komedi, Drama, Olahraga</td>
                                    </tr>
                                    <tr>
                                        <th className="text-start font-normal text-[#C1C2C4] align-top">Pembuat Film</th>
                                        <td>Brendan Hunt, Joe Killy, Bill Lawrence</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h6 className="font-bold text-white text-sm md:text-base mb-2">Episode</h6>
                            {episodeList.map((item, index) => (
                                <div key={index} className="flex text-xs md:text-sm lg:text-base items-center mb-4">
                                    <div className="text-white me-3">{index + 1}</div>
                                    <div className="flex items-start flex-grow">
                                        <img
                                            src={item.img}
                                            alt="Preview Thumbnail Episode"
                                            className="w-16 h-10 md:w-20 md:h-12 border-b-[0.5px] border-red-500"
                                        />
                                        <div className="ms-2 flex-grow">
                                            <div className="text-white font-bold">{item.title}</div>
                                            <p className="text-[#C1C2C4]">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="text-white whitespace-nowrap">{item.duration}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )}

        {typeMovie === "film" && (
            <div className="fixed z-50 inset-0 flex items-center justify-center bg-[#181A1C] bg-opacity-50">
                {/* for content modal */}
                <div className="bg-[#181A1C] rounded-lg overflow-hidden w-10/12 sm:w-7/12 md:w-8/12 lg:w-6/12 xl:w-4/12 2xl:w-3/12">
                    {/* header content */}
                    <div className="relative">
                        <div className="bg-cover bg-center h-48 lg:h-56 2xl:h-72" style={{ backgroundImage: "url('/properties/film_popup.png')" }}></div>
                        <button className="absolute top-2 right-2 bg-[#181A1C] hover:bg-[#15171a] active:bg-[#0b0c0e] bg-opacity-50 text-[#C1C2C4] text-sm rounded-full w-8 h-8 z-50"
                            onClick={onClose}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <div className="absolute inset-0 flex items-end px-4 pb-4"
                            style={{
                                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                            }}>

                            <div className="w-full relative">
                                <h5 className="text-white font-bold text-2xl mb-3">Guardian of The Galaxy: Volume 3</h5>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <button className="bg-[#0F1E93] hover:bg-[#252e74] active:bg-[#222a69] text-white text-sm md:text-base px-4 py-2 me-3 rounded-3xl">Mulai</button>
                                        <button className="bg-transparent border border-[#C1C2C4] text-[#C1C2C4] text-sm md:text-base rounded-full w-8 h-8 me-3"><FontAwesomeIcon icon={faPlus} /></button>
                                        {sectionContent === 'premiums' && (
                                            <button className="bg-[#B7A207] text-white text-xs md:text-sm px-4 py-1 me-3 rounded-3xl">Premium</button>
                                        )}
                                    </div>
                                    <div>
                                        <button className="bg-transparent border border-[#C1C2C4] text-[#C1C2C4] text-sm md:text-base rounded-full w-8 h-8">
                                            <FontAwesomeIcon icon={faVolumeMute} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* body content */}
                    <div className="p-4">
                        <div className="text-[#C1C2C4] text-xs md:text-sm flex space-x-1 items-center mb-2">
                            <span>2023</span>
                            <span>2j 29m</span>
                            <span className="border-[1px] text-white font-bold border-white rounded px-1 text-xs">PG-13</span>
                            <span className="rounded-full w-4 h-4 text-[0.6em] border-[1px] border-[#C1C2C4] flex items-center">16+</span>
                        </div>

                        <p className="text-white text-xs md:text-sm lg:text-base mb-5">Masih goyah karena kehilangan Gamora, Peter Quill mengumpulkan timnya untuk mempertahankan alam semesta dan salah satu dari mereka - sebuah misi yang bisa berarti</p>

                        <div className="mb-6">
                            <table className="text-xs text-white border-separate border-spacing-2">
                                <tbody>
                                    <tr>
                                        <th className="text-start font-normal text-[#C1C2C4] align-top">Cast</th>
                                        <td>Chris Pratt, Chukwudi Iwuji, Bradley Cooper, dan lain-lain</td>
                                    </tr>
                                    <tr>
                                        <th className="text-start font-normal text-[#C1C2C4] align-top">Genre</th>
                                        <td>Aksi, Petualangan, Komedi</td>
                                    </tr>
                                    <tr>
                                        <th className="text-start font-normal text-[#C1C2C4] align-top">Pembuat Film</th>
                                        <td>James Gunn</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h6 className="font-bold text-white text-sm md:text-base mb-2">Rekomendasi Serupa</h6>
                            <div className="flex">
                                {recommendationList.map((item, index) => (
                                    <div key={index} className="w-[5.5em] h-[9em] sm:w-[7em] sm:h-[10em] md:w-[11em] md:h-[16em] lg:w-[10em] lg:h-[15em] xl:w-[8em] xl:h-[12em] 2xl:w-[7em] 2xl:h-[10em] flex-shrink-0 me-4 relative text-white">
                                        <img src={item.img}
                                            className="w-full h-full rounded"
                                            alt="Continue to watch" />

                                            <div className="bg-[#B71F1D] text-white p-2 absolute top-0 right-1 rounded-tr-lg rounded-bl-lg z-10 text-[0.5em] md:right-3 xl:right-1 md:text-sm lg:text-base xl:text-xs">
                                                <div>Top</div>
                                                <div>10</div>
                                            </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

export default ModalDetailMovie;
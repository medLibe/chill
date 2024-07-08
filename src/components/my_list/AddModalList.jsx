import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AddModalList = ({ toggleAddModal, addToList }) => {
    const movieList = [
        { img: "/verticals/image205.png" },
        { img: "/verticals/image207.png" },
        { img: "/verticals/image208.png" },
        { img: "/verticals/image210.png" },
        { img: "/verticals/image211.png" },
        { img: "/verticals/image212.png" },
        { img: "/verticals/image214.png" },
        { img: "/verticals/image215.png" },
        { img: "/verticals/image217.png" },
        { img: "/verticals/image218.png" },
        { img: "/verticals/image219.png" },
        { img: "/verticals/image220.png" },
        { img: "/verticals/image221.png" },
        { img: "/verticals/image222.png" },
        { img: "/verticals/image223.png" },
        { img: "/verticals/image228.png" },
        { img: "/verticals/image230.png" },
        { img: "/verticals/image231.png" },
        { img: "/verticals/image232.png" },
        { img: "/verticals/image234.png" },
        { img: "/verticals/image235.png" },
        { img: "/verticals/image236.png" },
        { img: "/verticals/image206.png" },
        { img: "/verticals/image209.png" },
        { img: "/verticals/image213.png" },
        { img: "/verticals/image216.png" },
        { img: "/verticals/image224.png" },
        { img: "/verticals/image225.png" },
        { img: "/verticals/image226.png" },
        { img: "/verticals/image227.png" },
        { img: "/verticals/image229.png" },
        { img: "/verticals/image233.png" },
    ];

    const handleAddToList = (item) => {
        addToList(item);
    }

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-[#181A1C] bg-opacity-50">
            {/* for content modal */}
            <div className="bg-[#181A1C] rounded-lg overflow-y-auto w-10/12 sm:w-8/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12 h-4/5 relative">
                <button className="absolute top-2 right-2 bg-[#6a6f74] hover:bg-[#15171a] active:bg-[#0b0c0e] bg-opacity-50 text-[#C1C2C4] text-sm rounded-full w-8 h-8 z-50"
                    onClick={toggleAddModal}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                {/* body content */}
                <div className="p-4 md:p-8">
                    <div className="text-white text-lg font-bold mb-4">
                        Tambah Daftar Baru Saya
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-5 lg:gap-5 xl:gap-6 2xl:gap-8">
                        {movieList.map((item, index) => (
                            <div
                                key={index}
                                className="w-[6em] h-[9em] sm:w-[8em] sm:h-[11em] md:w-[12em] md:h-[16em] lg:w-[10em] lg:h-[15em] xl:w-[9em] xl:h-[12em] 2xl:w-[7em] 2xl:h-[10em] flex-shrink-0 relative text-white"
                            >
                                <img
                                    src={item.img}
                                    className="w-full h-full rounded"
                                    alt="Add To My List"
                                />

                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-5">
                                    <button className="bg-blue-800 opacity-80 text-white rounded-full p-2 w-10 h-10"
                                        onClick={() => handleAddToList(item)}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddModalList;

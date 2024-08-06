import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/redux/MoviesSlice";
import { addMovieToMyList } from "../../store/redux/MyListSlice";

const AddModalList = ({ toggleAddModal }) => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    const handleAddToList = (newMovie) => {
        dispatch(addMovieToMyList(newMovie));
    };

        /**
         * const movieList = 
        [
            {
                "id": "1",
                "img": "/verticals/image205.png"
            },
            {
                "id": "2",
                "img": "/verticals/image206.png"
            },
            {
                "id": "3",
                "img": "/verticals/image207.png"
            },
            {
                "id": "4",
                "img": "/verticals/image208.png"
            },
            {
                "id": "5",
                "img": "/verticals/image209.png"
            },
            {
                "id": "6",
                "img": "/verticals/image210.png"
            },
            {
                "id": "7",
                "img": "/verticals/image211.png"
            },
            {
                "id": "8",
                "img": "/verticals/image212.png"
            },
            {
                "id": "9",
                "img": "/verticals/image213.png"
            },
            {
                "id": "10",
                "img": "/verticals/image214.png"
            },
            {
                "id": "11",
                "img": "/verticals/image215.png"
            },
            {
                "id": "12",
                "img": "/verticals/image216.png"
            },
            {
                "id": "13",
                "img": "/verticals/image217.png"
            },
            {
                "id": "14",
                "img": "/verticals/image218.png"
            },
            {
                "id": "15",
                "img": "/verticals/image219.png"
            },
            {
                "id": "16",
                "img": "/verticals/image220.png"
            },
            {
                "id": "17",
                "img": "/verticals/image221.png"
            },
            {
                "id": "18",
                "img": "/verticals/image222.png"
            },
            {
                "id": "19",
                "img": "/verticals/image223.png"
            },
            {
                "id": "20",
                "img": "/verticals/image224.png"
            },
            {
                "id": "21",
                "img": "/verticals/image225.png"
            },
            {
                "id": "22",
                "img": "/verticals/image226.png"
            },
            {
                "id": "23",
                "img": "/verticals/image227.png"
            },
            {
                "id": "24",
                "img": "/verticals/image228.png"
            },
            {
                "id": "25",
                "img": "/verticals/image229.png"
            },
            {
                "id": "26",
                "img": "/verticals/image230.png"
            },
            {
                "id": "27",
                "img": "/verticals/image231.png"
            },
            {
                "id": "28",
                "img": "/verticals/image232.png"
            },
            {
                "id": "29",
                "img": "/verticals/image234.png"
            },
            {
                "id": "30",
                "img": "/verticals/image235.png"
            },
            {
                "id": "31",
                "img": "/verticals/image236.png"
            }
        ]
        */
    
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
                        {movies.map((item, index) => (
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

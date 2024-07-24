import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { getMovies, addMovie } from "../../services/api/ApiMoviesList";

const AddModalList = ({ toggleAddModal }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await getMovies();
                setMovies(moviesData);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    const handleAddToList = async (newMovie) => {
        try {
            await addMovie(newMovie);
            const updatedMovies = await getMovies();
            setMovies(updatedMovies);
        } catch (error) {
            console.error('Error adding movie to my list:', error);
        }
    };
    
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

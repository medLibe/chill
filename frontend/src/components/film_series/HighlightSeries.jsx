import { faAngleDown, faInfoCircle, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const HighlightSeries = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [genreOpen, setGenreOpen] = useState(false);
    const toggleGenre = () => {

        setGenreOpen(!genreOpen);
    }

    const highlightContent = [
        {
            img: "/properties/duty_after_school.png",
            title: "Duty After School",
            descriptionShort: "Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut...",
            descriptionLong: "Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
        },
        {
            img: "/properties/happiness.png",
            title: "Happiness",
            descriptionShort: "Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung aparteme...",
            descriptionLong: "Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen."
        },
        {
            img: "/properties/avatar_the_way_of_water.png",
            title: "Avatar: The Way of Water",
            descriptionShort: "Avatar 3 melanjutkan cerita konflik antara manusia dan Na'vi di planet Pandora. Dalam pertempuran untuk sumber...",
            descriptionLong: "Avatar 3 melanjutkan cerita konflik antara manusia dan Na'vi di planet Pandora. Dalam pertempuran untuk sumber daya dan kekuasaan, manusia dan sekutu Na'vi bersatu untuk melindungi tanah mereka. Film ini mengangkat tema persatuan dan perlawanan terhadap eksploitasi."
        }
    ];

    // handler next highlight
    const nextHighlight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === highlightContent.length - 1 ? 0 : prevIndex + 1));
    };

    // use effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextHighlight();
        }, 7000);

        return () => clearInterval(interval);
    });

    return (
        <div className="h-48 sm:h-64 md:h-80 xl:h-96 2xl:h-[28em] relative" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url("${highlightContent[currentIndex].img}")`,
           backgroundRepeat: 'no-repeat',
           backgroundSize: '100%',
           backgroundPosition: 'center',
       }}>
            <div className="absolute inset-0 flex flex-col items-start justify-between text-white p-4 xl:mx-8 xl:my-4 2xl:mx-12 2xl:my-6">
                {/* genre button */}
                <div className="hidden md:block">
                    <button className="bg-[#22282A] hover:bg-[#1f2425] text-white px-4 py-2 rounded-lg mt-4 cursor-pointer" onClick={toggleGenre}>
                        Genre &nbsp; <FontAwesomeIcon icon={faAngleDown} />
                    </button>

                    {genreOpen && (
                        <table className="absolute z-50 w-[28em] space-y-3 md:top-16 p-4 bg-[#181A1C] rounded-lg">
                            <tbody>
                                <tr>
                                    <td width={"50%"} className="py-2 px-4 hover:bg-[#3D4142]">Aksi</td>
                                    <td className="py-2 px-4 hover:bg-[#3D4142]">Anak-anak</td>
                                </tr>
                                <tr>
                                    <td width={"50%"} className="py-2 px-4 hover:bg-[#3D4142]">KDrama</td>
                                    <td className="py-2 px-4 hover:bg-[#3D4142]">Komedi</td>
                                </tr>
                                <tr>
                                    <td width={"50%"} className="py-2 px-4 hover:bg-[#3D4142]">Anime</td>
                                    <td className="py-2 px-4 hover:bg-[#3D4142]">Petualangan</td>
                                </tr>
                                <tr>
                                    <td width={"50%"} className="py-2 px-4 hover:bg-[#3D4142]">Britania</td>
                                    <td className="py-2 px-4 hover:bg-[#3D4142]">Perang</td>
                                </tr>
                                <tr>
                                    <td width={"50%"} className="py-2 px-4 hover:bg-[#3D4142]">Drama</td>
                                    <td className="py-2 px-4 hover:bg-[#3D4142]">Romantis</td>
                                </tr>
                                <tr>
                                    <td width={"50%"} className="py-2 px-4 hover:bg-[#3D4142]">Fantasi Ilmiah & Fantasi</td>
                                    <td className="py-2 px-4 hover:bg-[#3D4142]">Sains & Alam</td>
                                </tr>
                                <tr>
                                    <td width={"50%"} className="py-2 px-4 hover:bg-[#3D4142]">Kejahatan</td>
                                    <td className="py-2 px-4 hover:bg-[#3D4142]">Thriller</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>

                {/* content highlight */}
                <div>
                    <div className="w-full md:w-3/4 lg:w-3/4 xl:w-1/2 2xl:w-5/12 mt-4">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 xl:mb-4" style={{ transition: 'opacity 0.3s ease-in-out' }}>{highlightContent[currentIndex].title}</h1>
                        <p className="block sm:hidden text-xs font-bold" style={{ transition: 'opacity 0.3s ease-in-out' }}>{highlightContent[currentIndex].descriptionShort}</p>
                        <p className="hidden sm:block lg:text-lg xl:text-xl lg:my-2 font-bold" style={{ transition: 'opacity 0.3s ease-in-out' }}>{highlightContent[currentIndex].descriptionLong}</p>
                    </div>

                    <div className="flex justify-between items-center w-full mt-4">
                        <div>
                            <button className="bg-[#0F1E93] hover:bg-[#0d1c88] active:bg-[#0d197a] px-4 py-1 rounded-3xl text-xs md:py-2 md:text-base lg:me-3">Mulai</button>
                            <button className="bg-[#22282A] hover:bg-[#1d2122] active:bg-[#1b1e1f] px-4 py-1 rounded-3xl text-xs md:py-2 md:text-base lg me-3"><FontAwesomeIcon icon={faInfoCircle} /> &ensp; Selengkapnya</button>
                            <span className="p-1 bg-transparent border-[1px] border-zinc-300 rounded-2xl text-xs md:py-2 md:font-bold md:text-base">18+</span>
                        </div>
                        <span className="p-1 bg-transparent border-[1px] border-zinc-300 rounded-full text-xs w-6 h-6 md:p-2 md:w-10 md:h-10 md:text-center md:text-base">
                            <FontAwesomeIcon icon={faVolumeMute} />
                        </span>
                    </div>
                </div>
            </div>
       </div>
    )
};

export default HighlightSeries;
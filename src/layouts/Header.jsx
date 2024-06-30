import { faStar, faUser } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [avatarOpen, setAvatarOpen] = useState(false);
    const [genreOpen, setGenreOpen] = useState(false);
    const toggleAvatar = () => {
        setAvatarOpen(!avatarOpen);
    }

    const toggleGenre = () => {
        setGenreOpen(!genreOpen);
    }

    return (
        <header className="bg-[#181A1C] p-2 md:p-3 lg:p-5 xl:p-6 flex text-white justify-between items-center">
            <div className="flex items-center">
                <img src="/assets/logo-full.png" className="hidden md:block w-32" alt="Chill App" />
                <img src="/assets/logo-base.png" className="block md:hidden w-6 h-4 me-4" alt="Chill App" />
                <ul className="list-none flex items-center md:space-x-8 md:ms-12 text-xs md:text-lg">
                    <li>
                        <NavLink
                            to="/series"
                            className={({ isActive }) => (isActive ? 'hover:bg-[#404447] font-bold border-b-2 border-[#C1C2C4] active:bg-[#404447] p-2' : 'hover:bg-[#404447] active:bg-[#404447] p-2')}
                        >
                            Series
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/film"
                            className={({ isActive }) => (isActive ? 'hover:bg-[#404447] font-bold border-b-2 border-[#C1C2C4] active:bg-[#404447] p-2' : 'hover:bg-[#404447] active:bg-[#404447] p-2')}
                        >
                            Film
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/my-list"
                            className={({ isActive }) => (isActive ? 'hover:bg-[#404447] font-bold border-b-2 border-[#C1C2C4] active:bg-[#404447] p-2' : 'hover:bg-[#404447] active:bg-[#404447] p-2')}
                        >
                            Daftar Saya
                        </NavLink>
                    </li>
                    {/* <li className="hover:bg-[#404447] active:bg-[#404447] p-2" activeClassName="bg-red-500"><Link to="/series">Series</Link></li>
                    <li className="hover:bg-[#404447] active:bg-[#404447] p-2"><Link to="/film">Film</Link></li>
                    <li className="hover:bg-[#404447] active:bg-[#404447] p-2"><Link to="/my-list">Daftar Saya</Link></li> */}
                    <li className="hover:bg-[#404447] active:bg-[#404447] p-2 block md:hidden" style={{ cursor: 'pointer' }}>
                        <div onClick={toggleGenre}>
                            Genre <FontAwesomeIcon icon={faAngleDown} className="text-xs ms-1"/>
                        </div>

                        {genreOpen && (
                            <ul className="absolute top-12 left-52 space-y-3 md:top-16 p-4 w-48 h-56 overflow-y-auto bg-[#181A1C] text-sm z-50 rounded-lg" 
                            style={{ 
                                WebkitOverflowScrolling: 'touch',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                            }}>
                                <li>Aksi</li>
                                <li>Anak-anak</li>
                                <li>Anime</li>
                                <li>Britania</li>
                                <li>Drama</li>
                                <li>Fantasi Ilmiah & Fantasi</li>
                                <li>Kejahatan</li>
                                <li>KDrama</li>
                                <li>Komedi</li>
                                <li>Petualangan</li>
                                <li>Perang</li>
                                <li>Romantis</li>
                                <li>Sains & Alam</li>
                                <li>Thriller</li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>

            <div className="relative">
                <div className="flex items-center space-x-1 hover:bg-[#404447] active:bg-[#404447] py-2 px-3 md:me-4" onClick={toggleAvatar}>
                    <img src="/assets/avatar.png" alt="Avatar Profile" className="w-6 md:w-10 rounded-full me-1" />
                    <FontAwesomeIcon icon={faAngleDown} className="text-xs"/>
                </div>

                {avatarOpen && (
                    <ul className="absolute top-10 right-0 md:top-16 p-3 w-40  bg-[#181A1C] text-sm z-50">
                        <li className="mb-2 md:mb-4 hover:text-[#3254FF] active:text-[#3254FF]"><Link to="/profile"><FontAwesomeIcon icon={faUser} /> Profile</Link></li>
                        <li className="mb-2 md:mb-4 hover:text-[#3254FF] active:text-[#3254FF]"><Link to="/upgrade-to-premium"><FontAwesomeIcon icon={faStar} /> Ubah Premium</Link></li>
                        <li className="mb-2 md:mb-4 hover:text-[#3254FF] active:text-[#3254FF]"><Link to="/logout"><FontAwesomeIcon icon={faSignOutAlt} /> Keluar</Link></li>
                    </ul>
                )}
            </div>
        </header>
    );
};

export default Header;
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#181A1C] border-t-[1px] border-t-zinc-500 p-4">
            <div className="md:flex md:items-center md:my-8 md:space-x-20 md:justify-center">
                <div className="md:m-8 lg:m-12 lg:p-12">
                    <img src="/assets/logo-full.png" alt="Chill App" className="w-28 lg:w-36" />
                    <p className="text-zinc-300 mt-4 text-sm">©2023 Chill All Rights Reserved</p>
                </div>


                <div className="hidden md:flex text-white">
                    <div className="flex-1">
                        <h6 className="font-bold mb-3">Genre</h6>
                        <div className="flex">
                            <ul className="list-none flex-1 space-y-3 lg:me-16 text-zinc-300">
                                <li>Aksi</li>
                                <li>Anak-anak</li>
                                <li>Anime</li>
                                <li>Britania</li>
                            </ul>
                            <ul className="list-none flex-1 space-y-3 lg:me-16 text-zinc-300">
                                <li>Drama</li>
                                <li>Fantasi Ilmiah & Fantasi</li>
                                <li>Kejahatan</li>
                                <li>KDrama</li>
                            </ul>
                            <ul className="list-none flex-1 space-y-3 lg:me-16 text-zinc-300">
                                <li>Komedi</li>
                                <li>Petualangan</li>
                                <li>Perang</li>
                                <li>Romantis</li>
                            </ul>
                            <ul className="list-none flex-1 space-y-2 text-zinc-300">
                                <li>Sains & Alam</li>
                                <li>Thriller</li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:ms-12">
                        <h6 className="font-bold mb-3">Bantuan</h6>
                        <ul className="list-none space-y-2 text-zinc-300">
                            <li>FAQ</li>
                            <li>Kontak Kami</li>
                            <li>Privasi</li>
                            <li>Syarat & Ketentuan</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="block md:hidden text-white mt-8">
                <ul className="flex justify-between">
                    <li>Genre</li>
                    <li><FontAwesomeIcon icon={faAngleRight}/></li>
                </ul>
                <ul className="flex justify-between">
                    <li>Bantuan</li>
                    <li><FontAwesomeIcon icon={faAngleRight}/></li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;
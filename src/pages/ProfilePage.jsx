import React, { useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import FormProfileUpdate from "../layouts/FormProfileUpdate";

const ProfilePage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
        <Header/>
            <main className="bg-[#181A1C] font-lato">
                <section id="profile">
                    <div className="mx-4 md:mx-6 lg:mx-8 xl:mx-12 pb-12 pt-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Profil Saya</h2>

                        <div className="flex flex-col lg:flex-row justify-between">
                            <div id="profileForm" className="2xl:w-5/12 xl:w-6/12 lg:w-6/12 md:w-full me-4">
                                <div className="flex">
                                    <img src="/assets/avatar.png" alt="Avatar" className="rounded-full w-32 h-32" />

                                    <div className="ms-5">
                                        <button className="bg-[#181A1C] border-[1px] border-[#3254FF] text-[#3254FF] rounded-3xl px-5 py-2">Ubah Foto</button>
                                        <div className="text-[#C1C2C4] text-sm mt-2"><FontAwesomeIcon icon={faFileUpload}/>&ensp;Maksimal 2MB</div>
                                    </div>
                                </div>

                                <form className="mt-12 relative">
                                    <FormProfileUpdate
                                        type="text"
                                        id="username"
                                        label="Nama Pengguna"
                                        value={username}
                                        onChange={handleUsernameChange}/>

                                    <FormProfileUpdate
                                        type="email"
                                        id="email"
                                        label="Email"
                                        value={email}
                                        onChange={handleEmailChange}/>

                                    <FormProfileUpdate
                                        type="password"
                                        id="password"
                                        label="Kata Sandi"
                                        value={password}
                                        onChange={handlePasswordChange}/>
                                </form>
                            </div>

                            <div id="alertSubscribe" className="bg-[#3D4142] rounded-lg p-6 text-white 2xl:w-4/12 xl:w-5/12 lg:w-6/12 md:w-full order-first lg:order-last h-44 md:h-40 lg:h-48 flex me-4 mb-12">
                                <img src="/assets/warning.png" className="w-20 h-20 me-4" alt="Unsubscribe Alert" />
                                <div className="w-full">
                                    <h4 className="md:text-xl text-lg font-bold mb-2">Saat ini anda belum berlangganan</h4>
                                    <p className="md:text-lg text-base mb-3">Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
                                    <div className="flex justify-end">
                                        <button className="px-5 py-2 bg-[#2F3334] font-bold rounded-3xl">Mulai Berlangganan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        <Footer/>
        </>
    )
};

export default ProfilePage;
import React from "react";
import FormAuthenticator from "../layouts/FormAuthenticator";
import ButtonAuthenticator from "../layouts/ButtonAuthenticator";

const RegistrationPage = () => {
    return (
        <div className="login-page font-lato h-screen"
            style={{ 
                backgroundImage: `url("/properties/registration.jpeg")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
             }}>
            
            <div className="flex justify-center py-20">
                <div className="bg-[#181A1C] bg-opacity-70 px-8 py-12 2xl:w-3/12 xl:w-4/12 lg:w-5/12 md:w-6/12 sm:w-7/12 w-11/12 rounded-lg">
                    <img src="/assets/logo-full.png" alt="Chill App" className="mx-auto mb-10" />
                    <h2 className="text-center text-white text-3xl font-bold">Daftar</h2>
                    <h4 className="text-center text-white mb-12">Selamat datang</h4>

                    <form>
                        <FormAuthenticator
                            htmlFor="username"
                            type="text"
                            label="Username"
                            placeholder="Masukkan username"
                            />

                        <FormAuthenticator
                            htmlFor="password"
                            type="password"
                            label="Kata sandi"
                            placeholder="Masukkan kata sandi"
                            />

                        <FormAuthenticator
                            htmlFor="password_confirmation"
                            type="password"
                            label="Konfirmasi kata sandi"
                            placeholder="Masukkan kata sandi"
                            />
                    </form>
                    <ButtonAuthenticator
                    type="daftar"
                    label="Daftar"
                    url="/"/>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage;
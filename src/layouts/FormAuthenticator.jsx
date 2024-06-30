import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const FormAuthenticator = ({ htmlFor, type, label, placeholder }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    // toggle icon eye password
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    let inputType = type === 'password' && !passwordVisible ? 'password' : 'text';
    let eyeIcon = type === 'password' && !passwordVisible ? faEyeSlash : faEye;

    return (
        <div className="relative mb-4">
            <label htmlFor={htmlFor} className="block text-white mb-2">
                {label}
            </label>
            <input
                type={inputType}
                className="rounded-3xl w-full py-2 px-4 border-[1px] border-zinc-600 bg-transparent focus:outline-zinc-700 focus:text-white text-white"
                placeholder={placeholder}
            />
            {type === 'password' && (
                <div
                    className="absolute top-11 right-2 flex items-center px-2 cursor-pointer text-gray-400"
                    onClick={togglePasswordVisibility}
                >
                    <FontAwesomeIcon icon={eyeIcon} />
                </div>
            )}
        </div>
    )
};

export default FormAuthenticator;
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FormProfileUpdate = ({ type, id, label, value, onChange }) => {
    const isEmpty = value.length === 0;

    return (
        <div className="mb-3 relative">
            {value.length > 0 && (
                <label
                    htmlFor="username"
                    className="text-[#C1C2C4] text-xs md:text-sm absolute top-4 md:top-6 left-0 ml-5 transition-all"
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                className={`bg-[#22282A] w-full my-2 ${isEmpty ? 'py-3' : 'pt-6 pb-3'} md:my-3 md:${isEmpty ? 'md:py-6' : 'md:pt-10 md:pb-6'} text-sm md:text-base px-5 text-white border-[1px] border-[#E7E3FC] border-opacity-30 rounded-lg`}
                placeholder={value.length > 0 ? '' : label}
                value={value}
                onChange={onChange}
            />
            <div className="absolute top-6 right-2 md:top-7 md:right-2 flex items-center px-2 cursor-pointer text-white">
                <FontAwesomeIcon icon={faPencilAlt} />
            </div>
        </div>
    )
};

export default FormProfileUpdate;
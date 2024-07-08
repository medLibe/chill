import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MyList = ({img, is_new_episode, top_ten, showCloseButton, removeFromList }) => {
    const handleRemove = () => {
        removeFromList(img);
    }
    
    return (
        <div className="relative text-white">
            <img src={img}
                className="w-full h-full object-cover rounded"
                alt="My Movie List"
                style={{ 
                    aspectRatio: '2/3'
                 }} />

            {/* trash button */}
            {showCloseButton && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <button 
                        onClick={handleRemove} 
                        className="bg-red-500 opacity-80 text-white rounded-full p-2 w-10 h-10 cursor-pointer">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
            )}

            {is_new_episode && (
                <span className="bg-[#0F1E93] text-white px-1 py-1 absolute top-2 left-1 z-10 text-[0.55em] md:text-sm md:left-2 md:p-1 rounded-2xl">Episode baru</span>
            )}

            {top_ten && (
                <div className="bg-[#B71F1D] text-white p-2 absolute top-0 right-1 rounded-tr-lg rounded-bl-lg z-10 text-[0.5em] md:text-sm">
                    <div>Top</div>
                    <div>10</div>
                </div>
            )}
        </div>
    )
};

export default MyList;
import React from "react";

const MyList = ({img, is_new_episode, top_ten }) => {
    return (
        <div className="relative text-white">
            <img src={img}
                className="w-full h-full object-cover rounded"
                alt="My Movie List"
                style={{ 
                    aspectRatio: '2/3'
                 }} />

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
import React from "react";

const ContinueToWatch = ({img, title, rating, is_new_episode}) => {
    return (
        <div className="w-[22em] h-[12em] flex-shrink-0 me-4 relative text-white">
            <img src={img}
                className="w-full h-full rounded"
                alt="Continue to watch" />
            
            {is_new_episode && (
                <span className="bg-[#0F1E93] text-white px-2 py-1 absolute top-2 left-2 z-10 text-sm rounded-2xl">Episode baru</span>
            )}

            <div className="flex justify-between items-cente absolute bottom-0 right-0 left-0 p-2 text-sm font-bold" style={{
                background: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3))',
            }}>
                <p>{title}</p>
                <p>{rating}</p>
            </div>
        </div>
    )
};

export default ContinueToWatch;
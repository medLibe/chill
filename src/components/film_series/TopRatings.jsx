import React from "react";

const TopRatings = ({img, is_new_episode, top_ten}) => {
    return (
        <div className="w-[7em] h-[11em] md:w-[10em] md:h-[15em] lg:w-[18em] lg:h-[23em] xl:w-[20em] xl:h-[28em] flex-shrink-0 me-4 relative text-white">
            <img src={img}
                className="w-full h-full rounded"
                alt="Continue to watch" />
            
            {is_new_episode && (
                <span className="bg-[#0F1E93] text-white px-1 py-1 absolute top-2 left-1 z-10 text-[0.55em] md:text-sm md:left-2 md:p-1 lg:text-base rounded-2xl">Episode baru</span>
            )}

            {top_ten && (
                <div className="bg-[#B71F1D] text-white p-2 absolute top-0 right-1 rounded-tr-lg rounded-bl-lg z-10 text-[0.5em] md:right-3 md:text-sm lg:text-lg">
                    <div>Top</div>
                    <div>10</div>
                </div>
            )}
        </div>
    )
};

export default TopRatings;
import React from "react";

const Trendings = ({img, top_ten}) => {
    return (
        <div className="w-[7em] h-[11em] md:w-[10em] md:h-[15em] lg:w-[18em] lg:h-[23em] xl:w-[20em] xl:h-[28em] flex-shrink-0 me-4 relative text-white">
            <img src={img}
                className="w-full h-full rounded"
                alt="Continue to watch" />
            
            {top_ten && (
                <div className="bg-[#B71F1D] text-white p-2 absolute top-0 right-1 rounded-tr-lg rounded-bl-lg z-10 text-[0.5em] md:right-3 md:text-sm lg:text-lg">
                    <div>Top</div>
                    <div>10</div>
                </div>
            )}
        </div>
    )
};

export default Trendings;
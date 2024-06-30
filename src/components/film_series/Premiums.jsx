import React from "react";

const Premiums = ({img}) => {
    return (
        <div className="w-[7em] h-[11em] md:w-[10em] md:h-[15em] lg:w-[18em] lg:h-[23em] xl:w-[20em] xl:h-[28em] flex-shrink-0 me-4 relative text-white">
            <img src={img}
                className="w-full h-full rounded"
                alt="Continue to watch" />
            
            <span className="bg-[#B7A207] text-white px-1 py-1 absolute top-2 left-1 z-10 text-[0.55em] md:text-sm md:left-2 md:p-1 lg:text-base rounded-2xl">Premium</span>
        </div>
    )
};

export default Premiums;
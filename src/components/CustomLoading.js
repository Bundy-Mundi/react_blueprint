import React from "react";

const CustomLoading = () => {
    return(
        <div className="h-screen justify-center items-center flex text-3xl font-thin">
            <svg className="animate-spin h-6 w-6 mr-3 bg-black" viewBox="0 0 24 24">
            </svg>
            Initialyzing Firebase ... 
        </div>
    )
};

export default CustomLoading;
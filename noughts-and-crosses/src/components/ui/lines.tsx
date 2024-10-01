import * as React from "react"

const Lines = () => {
    return(
    <>
    
        <div className="relative h-96 w-96">
            {/* Linhas verticais */}
            <div className="absolute left-1/3 w-1 h-96 bg-black"></div>
            <div className="absolute left-2/3 w-1 h-96 bg-black"></div>

            {/* Linhas horizontais */}
            <div className="absolute top-1/3 w-96 h-1 bg-black"></div>
            <div className="absolute top-2/3 w-96 h-1 bg-black"></div>
        </div>
    </>
    )
};


export default Lines
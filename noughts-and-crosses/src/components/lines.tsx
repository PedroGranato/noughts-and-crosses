import * as React from "react"

const Lines = () => {
const div = document.getElementsByClassName("Q");
if (div){
const blocks: HTMLDivElement[] = Array.from(div.querySelectorAll("div"))
}

        
    return(
        
       
    <>
        <div className="relative h-96 w-96">
            <div className="absolute grid grid-cols-3 grid-rows-3 w-full h-full">
                {/* Quadrados */}
                <div className="Q border-none"></div>
                <div className="Q border-none"></div>
                <div className="Q border-none"></div>
                <div className="Q border-none"></div>
                <div className="Q border-none"></div>
                <div className="Q border-none"></div>
                <div className="Q border-none"></div>
                <div className="Q border-none"></div>
                <div className="Q border-none"></div>
            </div>
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


export default Lines;
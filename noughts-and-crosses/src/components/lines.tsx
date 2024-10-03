import * as React from "react"
import { useEffect, useState } from "react";

const Lines = () => {  
    const [BA, setBA] = useState<HTMLElement[]>([]);

    useEffect(() => {
        const blocks = document.getElementsByClassName("Q");
        const BA = Array.from(blocks) as HTMLElement[];
        setBA(BA);

        BA.forEach((block, index) => {
        block.onclick = () => {
        console.log(index + 1);
        };
    });
    
return () => {
    BA.forEach((block) => {
    block.onclick = null; 
    });
    };
}, 
[]);

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
);
};



export default Lines;
import { useEffect, useRef } from "react";

const Result = (props) => {

    const barRef = useRef();

    useEffect(()=>{
        let elem = barRef.current;
        let width = 0;
        let id = setInterval(frame, 20);
        function frame() {
            if (width >= props.conf) {
            clearInterval(id);
            } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = '<h2>'+width * 1  + '% </h2>';
            }
        }
    })


    return ( 
        <div className="result-content">
            
            <h1>{props.label}</h1>

            <div className="w3-light-grey">
            <div ref={barRef} id="myBar" className="w3-container w3-green" style={{width:"0%"}}><h2>0%</h2></div>
            </div>

        </div>
     );
}
 
export default Result;
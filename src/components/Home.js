import { useState } from "react";
import Result from "./Result";


const Home = () => {
    const [inProgress, setInProgress] = useState(false);
    const [result, setResult] = useState(false);

    const handleSearch =(e)=>{
        e.preventDefault();
        setResult(false);
        setInProgress(true);
        setTimeout(()=>{
            setInProgress(false);
            setResult(true);
        }, 5000)
    }

    return ( 
        <div className="home-content">
            <form className='input-form' onSubmit={handleSearch}>
                <textarea className="search-box" name="" id="" placeholder="Description">

                </textarea>
                {!inProgress && <input className="search-button"  type="submit" value="Predict" />}
                {inProgress && <div className='loader'></div>}
            </form>
            {result && <Result />}
            
        </div>
     );
}
 
export default Home;
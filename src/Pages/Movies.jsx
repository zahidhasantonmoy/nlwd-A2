import { useState } from 'react'
import {useEffect} from 'react'
export default function Movies() {
    const [Movies,setMovies]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");

    useEffect(()=>{
            getMovies();
            console.log(Movies);
        },[]);

 try{
    async function getMovies(){
        setLoading(true);
        const url ="https://api.tvmaze.com/shows";
        const response =await fetch(url);
        if(!response.ok){
            throw new Error("Something went wrong");}
        const data=await response.json();
        
       
        setMovies(data);
        
        }
        catch(error){
            setError(error);
        }
        finally{
            setLoading(false);
        }       
    }
    return(
        <>
        <div> 
       
        {loading ? ( <span className="loading loading-spinner text-error"></span>):
        error ? (<span className="loading loading-spinner text-error">{error}</span>): (
            <p> You have {Movies.length} movies</p>)}
            
        </div>
        </>
       
    )
}

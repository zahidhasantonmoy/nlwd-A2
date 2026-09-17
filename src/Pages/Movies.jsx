import { useState } from 'react'
import {useEffect} from 'react'
import MovieCard from '../Component/MovieCard';
import MovieModal from '../Component/MovieModal';
export default function Movies() {
    const [Movies,setMovies]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(()=>{
            getMovies();
            
        },[]);

 
    async function getMovies(){
        setLoading(true);

        try {
        const url ="https://api.tvmaze.com/shows";
        const response =await fetch(url);
        if(!response.ok){
            throw new Error("Something went wrong");}
        const data=await response.json();
        
       
        setMovies(data);
        
        }
        catch(error){
            setError(error.message);
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
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {Movies.map((movie)=>(
                    <MovieCard key={movie.id} movie={movie}onOpenModal={() => setSelectedMovie(movie)}/>
                ))}
            </div>  
        )}
        {selectedMovie && (
                <MovieModal 
                    movie={selectedMovie} 
                    onClose={() => setSelectedMovie(null)} 
                />
            )}
            
        </div>
        </>
       
    )
}

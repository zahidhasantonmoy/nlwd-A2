import { useState, useEffect } from 'react'
import MovieCard from '../Component/MovieCard';
import MovieModal from '../Component/MovieModal';

export default function Movies({ search }) {
    const [Movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        getMovies(search);
    }, [search]);

    async function getMovies(searchText) {
        setLoading(true);

        try {
            let url = "";

            if (searchText === "") {
                url = "https://api.tvmaze.com/shows";
            } else {
                url = "https://api.tvmaze.com/search/shows?q=" + searchText;
            }

            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            
            const data = await response.json();

            if (searchText === "") {
                setMovies(data);
            } else {
                let searchResult = [];
                for (let i = 0; i < data.length; i++) {
                    searchResult.push(data[i].show);
                }
                setMovies(searchResult);
            }

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div> 
                {loading ? ( <span className="loading loading-spinner text-error"></span>) :
                error ? (<span className="loading loading-spinner text-error">{error}</span>) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {Movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} onOpenModal={() => setSelectedMovie(movie)} />
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
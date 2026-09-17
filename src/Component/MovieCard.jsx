export default function MovieCard({ movie,onOpenModal }) {

    


    return (
        <div>
            <div className="card w-full max-w-sm bg-white shadow-xl">
            
            <img src={movie.image.medium}  className="w-full" />
            <div className="p-4">
                <h3 className="text-lg font-bold">{movie.name}</h3>
                <p className="text-gray-600">⭐ {movie.rating.average}  
                    •  📅{movie.premiered}</p>
                <button onClick={onOpenModal} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    See Details
                </button>
            </div>
        </div>
        
        </div>

    )
}
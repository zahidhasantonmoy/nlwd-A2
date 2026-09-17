export default function MovieModal({ movie, onClose }) {
    return (
        <dialog className="modal modal-open">
            <div className="modal-box">
                

                <img src={movie.image.medium} alt={movie.name} className="w-2.5/3 mx-auto" />

                <h3 className="font-bold text-2xl mt-4">{movie.name}</h3>
                
                <p className="py-2">
                    ⭐ Rating: {movie.rating.average} | 📅 Release: {movie.premiered}
                </p>
                
                <p>
                    🎬 Genres: {movie.genres.join(", ")}
                </p>
                
                <h4 className="font-bold mt-2">Overview:</h4>
                <div dangerouslySetInnerHTML={{ __html: movie.summary }}></div>

                <div className="modal-action">
                    <button onClick={onClose} className="btn btn-error">
                        ❌ Close
                    </button>
                </div>
            </div>
        </dialog>
    );
}
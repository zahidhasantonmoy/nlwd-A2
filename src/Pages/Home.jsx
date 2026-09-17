export default function Home() {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold drop-shadow-lg">DISCOVER MOVIES</h1>
                    <p className="py-7 text-lg font-medium drop-shadow-md">
                        Explore and discover your favorite <br/>
                        movies from around the world.   
                    </p>
                    <a href="/Movies" className="btn text-black bg-white hover:bg-gray-200 btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl border-none shadow-xl">
                        Explore Now
                    </a>
                </div>
            </div>
        </div>
    )
}
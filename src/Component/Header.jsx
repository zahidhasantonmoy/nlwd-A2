import { useState } from 'react'

export default function Header() {
    const [search, setSearch] = useState("");
    
    return (
        <>
            <div className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Movie Explorer
                    </h1>
                </div>    
                
                <nav className="flex items-center gap-6">
                    <a href="/" className="text-gray-700 hover:text-blue-500 font-medium">Home</a>
                    <a href="/about" className="text-gray-700 hover:text-blue-500 font-medium">About</a>
                    
                    <a href="/Movies" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 font-semibold">
                        Movies
                    </a>
                </nav>

                <label className="input border flex items-center gap-2">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                </label>
            </div>
            
            {search && <p className="px-6 py-2"> you are searched for {search} </p>}
        </>
    )
}
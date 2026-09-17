import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header({ search, setSearch }) {
    const navigate = useNavigate();
    const [inputText, setInputText] = useState("");

    function handleSearch() {
        setSearch(inputText);
        navigate('/Movies');
    }

    return (
        <>
            <div className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Movie Explorer
                    </h1>
                </div>    
                
                <nav className="flex items-center gap-6">
                    <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium">Home</Link>
                    
                    <Link to="/Movies" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 font-semibold">
                        Movies
                    </Link>
                </nav>

                <div className="flex items-center gap-2">
                    <label className="input border flex items-center px-3 py-2 rounded">
                        <input 
                            type="search" 
                            required 
                            placeholder="Search..." 
                            value={inputText} 
                            onChange={(e) => setInputText(e.target.value)} 
                            className="outline-none"
                        />
                    </label>
                    <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-semibold">
                        Search
                    </button>
                </div>
            </div>
            
            
        </>
    )
}
import { useState } from 'react'

export default function SearchBox() {
    const [search , setSearch] = useState("");
    return (
    <div className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md">
        <div><h1 className="text-3xl font-bold text-gray-800">
            Movie Explorer
        </h1>
        </div>        <div className="flex items-center">
            <input type="text" placeholder="Search"
             value={search} onChange={(e)=> setSearch(e.target.value)} />

             <p> you are searched for {search} </p>
        </div>
        </div>
        
    )
}   
import { useState } from 'react'

export default function SearchBox() {
    const [search , setSearch] = useState("");
    return (<>
    <div className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md">
        <div><h1 className="text-3xl font-bold text-gray-800">
            Movie Explorer
        </h1>
        </div>    
           {/* Using Daisy ui  */}
        <label className="input">
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
  <input type="search" required placeholder="Search"  value={search} onChange={(e)=> setSearch(e.target.value)}/>
  
   
</label>

        </div>
        <p> you are searched for {search} </p>
        </>
    )
}   
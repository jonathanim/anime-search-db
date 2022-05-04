import React from 'react'
import './search.css'

const Search = ({ handleSearch, search, setSearch }) => {
    return (
        <div className="search">
            <form onSubmit={handleSearch}>
                <input
                    type="search"
                    placeholder="anime Name"
                    name="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    style={{ height: "70px", width: "20vw", borderRadius: "50px", textAlign: "center", fontSize: "30px", fontWeight: "bold" }}
                />
                <button type="submit" className='search-btn'>
                    SEARCH
                </button>
            </form>
        </div>
    )
}

export default Search
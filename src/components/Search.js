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
                />
                <button type="submit">
                    SEARCH
                </button>
            </form>
        </div>
    )
}

export default Search
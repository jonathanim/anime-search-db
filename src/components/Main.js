import React, { useState, useEffect } from 'react'
import Search from './Search'
import './main.css'
const Main = () => {

    const [topFive, setTopFive] = useState([])
    const [search, setSearch] = useState('')
    const [animeList, setAnimeList] = useState([])

    const fetchTopFive = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
            .then(response => response.json())
        setTopFive(temp.data.slice(0, 5))
    }

    const fetchAnimeList = async (query) => {
        const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=10`)
            .then(response => response.json())
        console.log(temp)
        setAnimeList(temp.data)
    }
    console.log(animeList)
    const handleSearch = (e) => {
        e.preventDefault()
        fetchAnimeList(search)
    }

    useEffect(() => {
        fetchTopFive()
    }, [])


    {
        return (!topFive) ? "loading" :
            (
                <div className='layout'>
                    <div className="top_five">
                        <h2>Top Five Animes</h2>
                        {topFive.map(anime => {
                            return <div className='anime-wrapper' key={anime.mal_id}>
                                <img className='anime-img' src={anime.images.jpg.image_url} alt={anime.title} />
                                <div className='anime-info'>
                                    <h4 className='anime-title'>
                                        {anime.title}
                                    </h4>
                                    <p className='anime-score'>
                                        Score: {anime.score}
                                    </p>
                                </div>
                            </div>
                        })}

                    </div>
                    <div className="center-main">
                        <Search handleSearch={handleSearch} search={search} setSearch={setSearch} />
                        <div className="anime-list">
                            {animeList.map(anime => {
                                return <div key={anime.mal_id}>
                                    {anime.title}
                                </div>
                            })}
                        </div>
                    </div>

                </div>
            )
    }


}

export default Main
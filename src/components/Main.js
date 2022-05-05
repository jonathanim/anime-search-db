import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import './main.css'
import AnimeList from './AnimeList'
import PresetAnimeList from './PresetAnimeList'
const Main = () => {

    const [topFive, setTopFive] = useState([])
    const [search, setSearch] = useState('')
    const [animeList, setAnimeList] = useState([])
    const [presetAnimeList, setPresetAnimeList] = useState([])


    const fetchTopFive = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
            .then(response => response.json())

        const presetList = [...temp.data].splice(5, temp.data.length - 1)

        setPresetAnimeList(presetList)
        setTopFive(temp.data.slice(0, 5))
    }


    const fetchAnimeList = async (query) => {
        const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc`)
            .then(response => response.json())
        setAnimeList(temp.data)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        fetchAnimeList(search)
        setSearch('')
        setPresetAnimeList([])
    }

    useEffect(() => {
        fetchTopFive()
    }, [])

    console.log(presetAnimeList)

    return (!topFive) ? "" :
        (
            <div className='layout'>
                <div className="top_five">
                    <h2>Top Five Animes</h2>
                    {topFive.map(anime => {
                        return <Link
                            key={anime.mal_id}
                            className='anime-wrapper'
                            to={`/${anime.mal_id}`}
                            rel="noreferrer" >
                            <img className='anime-img' src={anime.images.jpg.image_url} alt={anime.title} />
                            <div className='anime-info'>
                                <h4 className='anime-title'>
                                    {anime.title}
                                </h4>
                                <p className='anime-score'>
                                    Score: {anime.score}
                                </p>
                            </div>
                        </Link>
                    })}
                </div>

                <div className="center-main">
                    <div className='search-div'>
                        <Search handleSearch={handleSearch} search={search} setSearch={setSearch} />
                    </div>

                    <div className="anime-list">
                        {animeList.map(anime => {
                            return <AnimeList anime={anime} key={anime.mal_id} />
                        })}
                    </div>
                    <div className="anime-list">
                        {presetAnimeList.map(anime => {
                            return <PresetAnimeList anime={anime} key={anime.mal_id} />
                        })}
                    </div>
                </div>

            </div>
        )

}

export default Main
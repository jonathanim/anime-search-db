import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom'

import './displayInfo.css'

const DisplayInfo = () => {
    let params = useParams();
    const [anime, setAnime] = useState('')

    const fetchAnimeInfo = async (id) => {
        const temp = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
            .then(res => res.json())
        setAnime(temp.data)

    }

    useEffect(() => {
        fetchAnimeInfo(params.id)
    }, [])
    console.log(anime)
    return (anime) ? <div className='display-container'>
        <div className='display-header'>
            <h1>{anime.title}</h1>
            <h2>(Average rating: {anime.score}) [ {anime.status} ]</h2>

        </div>

        <YouTube videoId={anime.trailer.youtube_id} height="390px" width="640px" autoplay={0} />
        <div className='display-stats'>
            <h3>Total Rank {anime.rank}  (Average Popularity: {anime.popularity}) Total Episodes: {anime.episodes}</h3>
        </div>
        <div className='anime-image'>

            <div className="text-container">
                <h3>{anime.title} / {anime.title_japanese} / Released {anime.year}</h3>
                <p>
                    {anime.synopsis}
                </p>
            </div>


        </div>

    </div> : ""

}




export default DisplayInfo
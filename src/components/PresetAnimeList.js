import React from 'react'
import { Link } from 'react-router-dom';
import './presetAnimeList.css'

const AnimeList = ({ anime }) => {

    return (
        <Link to={`/${anime.mal_id}`} className='card' >
            <div className='card-image'>
                <img src={`${anime.images.jpg.image_url}`} alt='' />
                {(!anime.episodes) ? `EP: N/A` : <p>{
                    `EP: ${anime.episodes}`
                }</p>}
            </div>
            <div className='card-title'>
                <h3>{anime.title}</h3>
                <h4>{anime.title_japanese}</h4>
            </div>
        </Link>
    )
}

export default AnimeList
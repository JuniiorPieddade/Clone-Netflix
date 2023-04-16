import { useEffect, useState } from 'react'
import './featuredMovie.css'

function FeaturedMovie({item}) {

    const [moreInfo, setMoreInfo] = useState([])

    useEffect(()=>{
        async function req(){
            const result = await fetch(`https://api.themoviedb.org/3/movie/${item}?language=pt-BR&api_key=45ebeec9bddd8e723a33011c17868404`)
            const data = await result.json()
            return data
        }
        const exec = async ()=> {
            let info = await req()
            setMoreInfo(info)
        }
        exec()
    },[])

    const firstDate = new Date(moreInfo.release_date)
    const genres = []
    for(let i in moreInfo.genres) {
        genres.push(moreInfo.genres[i].name)
    } 

    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${moreInfo.backdrop_path})`
        }}>
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>{moreInfo.original_title}</div>
                    <div className='featured--info'>
                        <div className='featured--points'>{moreInfo.vote_average} pontos</div>
                        <div className='featured--year'>{firstDate.getFullYear()}</div>
                    </div>
                    <div className='featured--description'>{moreInfo.overview}</div>
                    <div className='featured--buttons'>
                        <a href={`/watch/${item}`} className='featured--watchButton'>► Assistir</a>
                        <a href={`/add/${item}`} className='featured--myListButton'>+ Minha Lista</a>
                    </div>
                    <div className='featured--genres'><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie
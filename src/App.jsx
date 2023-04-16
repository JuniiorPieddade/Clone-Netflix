import { useEffect, useState } from 'react'
import './App.css'
import getHomeList from './tmdb'
import Movierow from './components/Movierow/movierow'
import FeaturedMovie from './components/featuredMovie/featuredMovie'
import Header from './components/header/header'

function App() {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(()=>{
    const loadAll = async ()=> {
      let list = await getHomeList()
      setMovieList(list)

      let trending = list.filter(i=>i.slug === 'trending')
      let randomChosen = Math.floor(Math.random() * (trending[0].items.results.length - 1))
      let chosen = trending[0].items.results[randomChosen]
      setFeaturedData(chosen);
      console.log(chosen.id)
    }
    loadAll()
  }, [])

  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY > 10){
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)
      return ()=>{
    window.removeEventListener('scroll', scrollListener)
      }
  },[])
  return (
    <div className="App">

      <Header black={blackHeader} />

      {featuredData && 
        <FeaturedMovie item={featuredData.id} />      
      }
      <section className='lists'>
        {movieList.map((item, key)=> (
          <Movierow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito com Carinho por | Luciano Piedade <br/>
        Direitos de Imagem para Netflix <br/>
        Dados pegos do site Themoviedb.org
      </footer>
      {movieList.length <= 0 &&
      <div className='loading'>
        <img src='https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif' />
      </div>}
    </div>
  )
}

export default App

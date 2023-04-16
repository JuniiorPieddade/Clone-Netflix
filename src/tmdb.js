const API_KEY = '45ebeec9bddd8e723a33011c17868404'
const API_BASE = 'https://api.themoviedb.org/3'



const basicFetch = async (endpoint)=> {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json
}

    async function  getHomeList() {
    return [
        {
            slug: 'trending',
            title: 'Recomendados para Você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },

        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        
        {   slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Documentario',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        },
        
    ]
    }


export default getHomeList



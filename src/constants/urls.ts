const posterUrl = 'https://image.tmdb.org/t/p/original/';
const youTube = 'https://www.youtube.com/embed/';

const discover = '/discover';
// const movies = '/movies';
const movie = '/movie';
const genre = '/genre';
const list = '/list';
const credits = '/credits';

// const favorite = '/favorite';

const search = '/search';

const videos = '/videos';

const upcoming = '/upcoming'

const popular = '/popular';
const top_rated = '/top_rated'

const trending = '/trending'
const day = '/day'
const week = '/week'

const notFoundPoster = "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"


 const urls = {
    movie: {
        base: `${discover}${movie}`,
        byId: (id: string | number) => `${movie}/${id}`,
    },
    posterUrl: { 
        base: posterUrl, 
        posterImage: (posterPath: string) => `${posterUrl}${posterPath}`
    }, 
    notFoundPoster: { base: notFoundPoster },

    genre: { base: `${genre}${movie}${list}` },
    credits: { base: (id: string) => `${movie}/${id}${credits}` },

    search: { base: `${search}${movie}` },

    videos: { base: (id: string) => `${movie}/${id}${videos}` },
    youTube: { base: youTube },

    popular: {base: `${movie}${popular}`},   
    top_rated: {base: `${movie}${top_rated}`},   
    upcoming: {base: `${movie}${upcoming}`}, 

    trending: {
        day: {base: `${trending}${movie}${day}`},
        week: {base: `${trending}${movie}${week}`}
    },

    youTube2: {
        base: (key: string) => `${youTube}${key}`
    }
};

export { 
    urls
}

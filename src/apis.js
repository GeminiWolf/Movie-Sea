export const trending = `https://api.themoviedb.org/3/trending/all/week?api_key=99f76dbcb887e6e1d58ef8e0bd37f594`
export const showImg = 'https://image.tmdb.org/t/p/original'
export const searchShows = (searchTerm, page) => {
    return `https://api.themoviedb.org/3/search/multi?api_key=99f76dbcb887e6e1d58ef8e0bd37f594&query=${searchTerm}&page=${page}`
}
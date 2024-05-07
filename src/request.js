//const APIKEY = "8699f2e0e099b10fd302b21d597e68e4";

const requests = {
    fetchTrending: `/trending/all/week?api_key=8699f2e0e099b10fd302b21d597e68e4&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=8699f2e0e099b10fd302b21d597e68e4&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=8699f2e0e099b10fd302b21d597e68e4&language=en-US`,
    fetchActionMovies :`/discover/movie?api_key=8699f2e0e099b10fd302b21d597e68e4&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=8699f2e0e099b10fd302b21d597e68e4&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=8699f2e0e099b10fd302b21d597e68e4&with_genres=27`,
    fetchRomanceMovies :`/discover/movie?api_key=8699f2e0e099b10fd302b21d597e68e4&with_genres=10749`,
    fetchDocumentries:`/discover/movie?api_key=8699f2e0e099b10fd302b21d597e68e4&with_genres=99`,
}


export default requests;
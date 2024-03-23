import axios from "axios";
const KEY_API = '51c3adc8a9d58cd1545a7c599996950b';
const ACCESS_KEY_API = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWMzYWRjOGE5ZDU4Y2QxNTQ1YTdjNTk5OTk2OTUwYiIsInN1YiI6IjY1ZjlhOGYzMzkxYjljMDE3YmM5MDI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JgmNMeMBxPXxQCE1XsiKcjvtkWz32bnMnxMwLiWB0UQ';

export const queryMoviesPages = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
        params: {
            language: 'en-US',
            api_key: KEY_API
        },
        headers: {
            Authorization: `Bearer ${ACCESS_KEY_API}`
        }
        
    });
    return data.results;
}


export const queryMoviesPagesById = async (movieId) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/${movieId}`, {
        params: {
            language: 'en-US',
            api_key: KEY_API
        },
        headers: {
            Authorization: `Bearer ${ACCESS_KEY_API}`
        }
        
    });
    return data;
}
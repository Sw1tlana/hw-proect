
import axios from "axios";
     
const API_KEY = "51c3adc8a9d58cd1545a7c599996950b";
const API_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWMzYWRjOGE5ZDU4Y2QxNTQ1YTdjNTk5OTk2OTUwYiIsInN1YiI6IjY1ZjlhOGYzMzkxYjljMDE3YmM5MDI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JgmNMeMBxPXxQCE1XsiKcjvtkWz32bnMnxMwLiWB0UQ"; // Ключ доступу до API

export const requestMovies = async () => {
        const { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
            params: {
                language: "en-US",
                api_key: API_KEY
            },
            headers: {
                Authorization: `Bearer ${API_ACCESS_TOKEN}`
            }
        });
        return data.results;

}

export const requestMoviesByQuery = async (query) => {
        const { data } = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                language: "en-US",
                api_key: API_KEY,
                query: query
            },
            headers: {
                Authorization: `Bearer ${API_ACCESS_TOKEN}`
            }
        });
        return data.results;

}

export const requestMoviesById = async (movieId) => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
            params: {
                language: "en-US",
                api_key: API_KEY
            },
            headers: {
                Authorization: `Bearer ${API_ACCESS_TOKEN}`
            }
        });
        return data;

}

export const requestMoviesByCast = async (movieId) => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
            params: {
                language: "en-US",
                api_key: API_KEY
            },
            headers: {
                Authorization: `Bearer ${API_ACCESS_TOKEN}`
            }
        });
    
        return data;

}

export const requestMoviesByReviews = async (movieId) => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
            params: {
                language: "en-US",
                api_key: API_KEY
            },
            headers: {
                Authorization: `Bearer ${API_ACCESS_TOKEN}`
            }
        });
    
        return data;

}
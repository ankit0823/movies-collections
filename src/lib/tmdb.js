const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchFromAPI = async (endpoint, extraParams = '') => {
    try {
        const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-IN&region=IN${extraParams}`;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Failed to fetch ${endpoint}`);
        }

        const data = await res.json();
        console.log(`Fetched ${endpoint}:`, data);
        return data;
    } catch (error) {
        console.error('API Fetch Error:', error);
        return null;
    }
};

// Fetch movie categories
export const getGenres = () => fetchFromAPI('/genre/movie/list');
export const getUpcomingMovies = () => fetchFromAPI('/movie/upcoming');
export const getLatestMovies = () => fetchFromAPI('/movie/now_playing');
export const getTopRatedMovies = () => fetchFromAPI('/movie/top_rated');
export const getPopularMovies = () => fetchFromAPI('/movie/popular');
export const searchMovies = (query) => fetchFromAPI(`/search/movie`, `&query=${query}`);
export const getMovieDetails = (id) => fetchFromAPI(`/movie/${id}`);
export const getMovieReviews = (id) => fetchFromAPI(`/movie/${id}/reviews`);
export const getSimilarMovies = (id) => fetchFromAPI(`/movie/${id}/similar`);
export const getIndianMovies = () => fetchFromAPI('/discover/movie', '&with_original_language=hi,te,ta,ml,kn');

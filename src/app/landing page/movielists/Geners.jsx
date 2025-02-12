import { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

const Genres = () => {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState({});
    const scrollRef = useRef(null);

    useEffect(() => {
        const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

        // Fetch Genres
        const fetchGenres = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
                );
                const data = await response.json();
                setGenres(data.genres);
            } catch (error) {
                console.error("Error fetching genres:", error);
            }
        };

        fetchGenres();
    }, []);

    useEffect(() => {
        const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

        // Fetch movies for each genre (only Indian movies)
        const fetchMoviesByGenre = async () => {
            try {
                const movieData = {};
                await Promise.all(
                    genres.map(async (genre) => {
                        const response = await fetch(
                            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}&region=IN&with_original_language=hi&sort_by=popularity.desc`
                        );
                        const data = await response.json();
                        movieData[genre.id] = data.results.slice(0, 4); // Get top 4 movies per genre
                    })
                );
                setMovies(movieData);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        if (genres.length > 0) fetchMoviesByGenre();
    }, [genres]);

    // Scroll left
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    // Scroll right
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold mb-4 text-white">Our Genres</h2>
                <div className="flex gap-4">
                    <button className="bg-[#1F1F1F] px-3 py-1 rounded-lg text-white hover:bg-gray-700 transition-all" onClick={scrollLeft}>
                        <i className="ri-arrow-left-line text-xl"></i>
                    </button>
                    <div className="flex items-center -mt-2 justify-center">
                        <h1 className="text-4xl text-red-600">-</h1>
                        <h1 className="text-4xl text-gray-700">-</h1>
                        <h1 className="text-4xl text-gray-700">-</h1>
                    </div>
                    <button className="bg-[#1F1F1F] px-3 py-1 rounded-lg text-white hover:bg-gray-700 transition-all" onClick={scrollRight}>
                        <i className="ri-arrow-right-line text-xl"></i>
                    </button>
                </div>
            </div>

            <div className="relative">
                {/* Genre List */}
                <div 
                    ref={scrollRef}
                    className="flex overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory scroll-smooth px-10"
                >
                    {genres.map((genre) => (
                        <div key={genre.id} className="w-48 min-w-[200px] bg-[#262626] p-3 rounded-xl relative">
                            {/* Movies Grid */}
                            <div className="grid grid-cols-2 gap-1">
                                {movies[genre.id] ? (
                                    movies[genre.id].map((movie) => (
                                        <img
                                            key={movie.id}
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            alt={movie.title}
                                            className="w-full h-24 object-cover rounded-md"
                                        />
                                    ))
                                ) : (
                                    <div className="w-full h-24 bg-gray-700 flex items-center justify-center col-span-2">
                                        <span className="text-gray-400">No image</span>
                                    </div>
                                )}
                            </div>

                            {/* Genre Title & Arrow */}
                            <div className="flex justify-between items-center mt-2">
                                <h3 className="text-white text-lg font-semibold">{genre.name}</h3>
                                <FaArrowRight className="text-gray-400" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Genres;

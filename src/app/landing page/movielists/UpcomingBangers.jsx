"use client"; // Ensure it runs on the client-side

import { getUpcomingMovies } from '../../../lib/tmdb';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import Next.js router

const UpcomingBangers = () => {
    const [movies, setMovies] = useState([]);
    const scrollRef = useRef(null);
    const router = useRouter(); // Initialize router

    useEffect(() => {
        async function fetchMovies() {
            const data = await getUpcomingMovies();
            setMovies(data?.results || []);
        }
        fetchMovies();
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    // Function to navigate to movie details page
    const handleMovieClick = (id) => {
        router.push(`/movie/${id}`); // Redirect to Movie Page with the movie ID
    };

    return (
        <div className="p-6">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Upcoming Bangers</h2>
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

            {/* Movies Section */}
            <div ref={scrollRef} className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth">
                {movies.map((movie) => (
                    <div 
                        key={movie.id} 
                        onClick={() => handleMovieClick(movie.id)} // Handle click
                        className="bg-[#1F1F1F] p-4 rounded-lg h-[320px] text-white flex-shrink-0 w-[241px] hover:scale-105 transition-all cursor-pointer sm:w-[200px] md:w-[220px] lg:w-[241px]"
                    >
                        <img 
                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/fallback-image.jpg"} 
                            alt={movie.title} 
                            className="w-full h-[250px] object-cover rounded-lg mb-2"
                        />
                        <div className='flex items-center justify-between'>
                            <h3 className="text-lg font-bold">{movie.title}</h3>
                            <p className="text-sm flex items-center gap-1">
                                <i className="ri-eye-line text-gray-500"></i> {movie.popularity.toFixed(1)}K
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingBangers;

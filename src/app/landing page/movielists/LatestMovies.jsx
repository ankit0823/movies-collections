import React, { useState, useEffect, useRef } from "react";
import { getLatestMovies } from "../../../lib/tmdb";

const LatestMovies = () => {
  const [movies, setMovies] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    async function fetchMovies() {
      const data = await getLatestMovies();
      setMovies(data?.results || []);
    }
    fetchMovies();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Latest on Utsav</h2>
                <div className="flex gap-4">
                    <button className="bg-[#1F1F1F] px-3 py-1 rounded-lg text-white" onClick={scrollLeft}>
                        <i className="ri-arrow-left-line"></i>
                    </button>
                    <div className="flex items-center -mt-2 justify-center">
                        <h1 className="text-4xl text-red-600">-</h1>
                        <h1 className="text-4xl text-gray-700">-</h1>
                        <h1 className="text-4xl text-gray-700">-</h1>
                    </div>
                    <button className="bg-[#1F1F1F] px-3 py-1 rounded-lg text-white" onClick={scrollRight}>
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
            <div ref={scrollRef} className="flex overflow-x-auto space-x-4 scrollbar-hide">
                {movies.map(movie => (
                    <div key={movie.id} className="bg-[#1F1F1F] p-4 rounded-lg text-white hover:scale-105 transition-all cursor-pointer flex-shrink-0 w-[241px] sm:w-[200px] md:w-[220px] lg:w-[241px]">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-[281px] rounded-lg mb-2" />
                        
                        <div className="flex items-center justify-between text-gray-400 text-sm mt-1">
                        <p className="px-2 py-1 bg-black rounded-lg text-center text-sm">Released at: {movie.release_date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  );
};

export default LatestMovies;



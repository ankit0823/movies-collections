"use client";
import React, { useEffect, useState } from "react";
import NavigationBar from "../../NavBar/NavBar";

const Header = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    const fetchIndianMovies = async () => {
      try {
        const [responsePage1, responsePage2] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&region=IN&with_original_language=hi&page=1`),
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&region=IN&with_original_language=hi&page=2`),
        ]);

        const dataPage1 = await responsePage1.json();
        const dataPage2 = await responsePage2.json();

        // Combine both pages & limit to 40 movies
        setMovies([...dataPage1.results, ...dataPage2.results].slice(0, 40));
      } catch (error) {
        console.error("Error fetching Indian movies:", error);
      }
    };

    fetchIndianMovies();
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Background Movie Grid */}
      <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 grid-rows-2 sm:grid-rows-3 md:grid-rows-4 gap-1 p-2">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover rounded-md opacity-50"
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-end h-full pb-8 sm:pb-12 md:pb-16 text-white z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg">
          Best Viewing expirence with Utsav
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-left text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl mt-2 sm:mt-3 md:mt-4">
          Utsav is the best streaming expirence for watching your favorite movies and show on demand, anytime, anywere. 
          with Utsav,you can enjoy a wide varity of content, including and latest blockbusters, classic movies, popular 
          TV shows,and more. You can also create wour own watchlists, so you can easily find thee content you want to watch.
        </p>
        <button className="mt-4 sm:mt-5 md:mt-6 bg-red-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md text-sm sm:text-base md:text-lg font-semibold hover:bg-red-700 transition">
          <i className="ri-play-large-fill"></i> Start Watching Now
        </button>
      </div>
    </div>
  );
};

export default Header;

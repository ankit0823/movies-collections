// "use client";
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from "react";
// import { getPopularMovies } from "@/lib/tmdb";

// const LandingPage = () => {
//     const [movies, setMovies] = useState([]);
//     const router = useRouter();

//     useEffect(() => {
//         async function fetchMovies() {
//             const data = await getPopularMovies();
//             setMovies(data?.results || []);
//         }
//         fetchMovies();
//     }, []);

//     const handleMovieClick = (id) => {
//         router.push(`/movie/${id}`);
//     };

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-bold text-white">Popular Movies</h2>
//             <div className="grid grid-cols-4 gap-4">
//                 {movies.map((movie) => (
//                     <div key={movie.id} onClick={() => handleMovieClick(movie.id)} className="cursor-pointer">
//                         <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-lg" />
//                         <h3 className="text-lg font-bold">{movie.title}</h3>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default LandingPage;
import React from 'react'
import LandingPage from './landing page/LandingPage'

const page = () => {
  return (
    <div>
      <LandingPage/>
    </div>
  )
}

export default page


"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import MovieHeader from "./componets/MovieHeader";
import MovieInfo from "./componets/MovieInfo";
import CastSection from "./componets/CastSection";
import ReviewsSection from "./componets/ReviewsSection";
import BasicDetailsSection from "./componets/BasicDetailsSection";
import Footer from "@/app/landing page/components/Footer";


const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (id) {
            axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
                .then(response => setMovie(response.data))
                .catch(error => console.error("Error fetching movie details:", error));

            axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
                .then(response => setCast(response.data.cast.slice(0, 8)))  // First 8 actors
                .catch(error => console.error("Error fetching cast:", error));

            axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`)
                .then(response => setReviews(response.data.results))
                .catch(error => console.error("Error fetching reviews:", error));
        }
    }, [id]);

    if (!movie) return <div className="text-white text-center mt-10">Loading...</div>;

    return (
        <div className="relative w-full bg-zinc-950 text-white">
            <MovieHeader movie={movie} />
            <div className="flex flex-col lg:flex-row p-6">
                <div className="flex flex-col p-5 gap-5 w-full lg:w-3/4">
                    <MovieInfo movie={movie} />
                    <CastSection cast={cast} />
                    <ReviewsSection reviews={reviews} />
                </div>
                <span className="w-full lg:w-1/4 p-5">
                    <BasicDetailsSection movie={movie} />
                </span>
            </div>
            <Footer />
        </div>
    );
};

export default MovieDetails;

import CastSection from "./CastSection";
import ReviewsSection from "./ReviewsSection";

const MovieInfo = ({ movie }) => {
    return (
        <div className=" -mt-1 tmd:p-8">
            <div className="bg-[#1A1A1A] p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold border-b border-gray-700">Description</h2>
                <p className="text-gray-300 mt-3">{movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieInfo;

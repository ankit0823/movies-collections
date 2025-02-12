import NavigationBar from "@/app/NavBar/NavBar";

const MovieHeader = ({ movie }) => {
    return (
        <div className="relative w-full h-screen">
            {/* Navigation Bar (Absolute on Top) */}
            <div className="absolute top-0 left-0 w-full z-10">
                <NavigationBar />
            </div>

            {/* Background Image */}
            <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
            />

            {/* Overlay & Content */}
            <div className="absolute inset-0 w-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 md:px-0">
                <div className="absolute top-[50%] transform -translate-y-1/2">
                    <h1 className="text-white text-3xl md:text-5xl font-bold">{movie.title}</h1>
                    <p className="text-gray-300 mt-2 max-w-5xl">{movie.overview}</p>
                    <div className="mt-4 flex flex-wrap justify-center space-x-4 items-center">
                        <button className="bg-red-600 text-white px-6 py-2 text-lg font-bold rounded-lg hover:bg-red-700">
                            <span className="text-white"><i className="ri-play-large-fill"></i> </span> Play Now
                        </button>
                        <button className="bg-[#141414] text-white px-4 py-2 text-lg font-bold rounded-lg hover:bg-gray-700 flex items-center">
                            +
                        </button>
                        <button className="bg-[#141414] text-white px-4 py-2 text-lg font-bold rounded-lg hover:bg-gray-700 flex items-center">
                            <i className="ri-thumb-up-line"></i>
                        </button>
                        <button className="bg-[#141414] text-white px-4 py-2 text-lg font-bold rounded-lg hover:bg-gray-700 flex items-center">
                            <i className="ri-volume-up-line mr-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieHeader;

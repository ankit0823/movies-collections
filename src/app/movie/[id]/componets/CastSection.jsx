const CastSection = ({ cast }) => {
    return (
        <div className="bg-[#1A1A1A] p-4 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between mb-5">
                <h2 className="text-xl font-semibold">Cast</h2>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <button className="bg-[#1F1F1F] px-3 py-1 rounded-full text-white hover:bg-gray-700 transition-all">
                        <i className="ri-arrow-left-line text-xl"></i>
                    </button>
                    <button className="bg-[#1F1F1F] px-3 py-1 rounded-full text-white hover:bg-gray-700 transition-all">
                        <i className="ri-arrow-right-line text-xl"></i>
                    </button>
                </div>
            </div>
            <div className="flex space-x-4 overflow-x-auto mt-4">
                {cast.map((actor) => (
                    <div key={actor.id} className="w-24">
                        <img 
                            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
                            alt={actor.name} 
                            className="w-24 h-24 object-cover rounded-full" 
                        />
                        <p className="text-center text-gray-300 mt-2">{actor.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CastSection;

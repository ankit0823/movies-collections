import { FaStar } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { PiMusicNotesFill } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";

const BasicDetailsSection = ({ movie }) => {
    return (
        <div className="bg-[#1A1A1A] text-white p-6 rounded-lg shadow-lg">
            {/* Released Year */}
            <div className="flex items-center gap-2 mb-4">
                <MdOutlineCalendarToday className="text-gray-400 text-xl" />
                <h2 className="text-lg font-semibold">Released Year</h2>
            </div>
            <p className="text-2xl font-bold mb-4">{movie.release_date.split("-")[0]}</p>

            {/* Available Languages */}
            <div className="flex items-center gap-2 mb-4">
                <MdLanguage className="text-gray-400 text-xl" />
                <h2 className="text-lg font-semibold">Available Languages</h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
                {movie.spoken_languages.map((lang) => (
                    <span key={lang.iso_639_1} className="bg-[#0F0F0F] px-3 py-1 text-sm rounded-lg">
                        {lang.english_name}
                    </span>
                ))}
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-2 mb-4">
                <FaStar className="text-gray-400 text-xl" />
                <h2 className="text-lg font-semibold">Ratings</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="bg-[#0F0F0F] p-4 rounded-lg flex flex-col items-center">
                    <p className="text-white font-semibold">IMDb</p>
                    <div className="flex items-center gap-1 text-red-500">
                        {Array.from({ length: Math.round(movie.vote_average / 2) }, (_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                    <p className="text-gray-300">{movie.vote_average.toFixed(1)}</p>
                </div>
                <div className="bg-[#0F0F0F] p-4 rounded-lg flex flex-col items-center">
                    <p className="text-white font-semibold">StreamVibe</p>
                    <div className="flex items-center gap-1 text-red-500">
                        {Array.from({ length: 4 }, (_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                    <p className="text-gray-300">4.0</p>
                </div>
            </div>

            {/* Genres */}
            <div className="flex items-center gap-2 mb-4">
                <BiSolidCategory className="text-gray-400 text-xl" />
                <h2 className="text-lg font-semibold">Genres</h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
                {movie.genres.map((genre) => (
                    <span key={genre.id} className="bg-[#0F0F0F] px-3 py-1 text-sm rounded-lg">
                        {genre.name}
                    </span>
                ))}
            </div>

            {/* Director */}
            <div className="flex items-center gap-2 mb-4">
                <FaUserTie className="text-gray-400 text-xl" />
                <h2 className="text-lg font-semibold">Director</h2>
            </div>
            <div className="bg-[#0F0F0F] p-4 rounded-lg flex items-center gap-4 mb-4">
                <img src="/director.jpg" alt="Director" className="w-12 h-12 rounded-full" />
                <div>
                    <p className="font-bold">{movie.director}</p>
                    <p className="text-gray-400 text-sm">From India</p>
                </div>
            </div>

            {/* Music */}
            <div className="flex items-center gap-2 mb-4">
                <PiMusicNotesFill className="text-gray-400 text-xl" />
                <h2 className="text-lg font-semibold">Music</h2>
            </div>
            <div className="bg-[#0F0F0F] p-4 rounded-lg flex items-center gap-4">
                <img src="/music-director.jpg" alt="Music Director" className="w-12 h-12 rounded-full" />
                <div>
                    <p className="font-bold">{movie.music_director}</p>
                    <p className="text-gray-400 text-sm">From India</p>
                </div>
            </div>
        </div>
    );
};

export default BasicDetailsSection;

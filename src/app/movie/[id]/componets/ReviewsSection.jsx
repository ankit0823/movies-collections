const ReviewsSection = ({ reviews }) => {
    return (
        <div className="bg-[#1A1A1A] h-auto p-4 rounded-lg mt-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <h2 className="text-xl font-semibold">Reviews</h2>
                <button className="bg-[#0F0F0F] text-white px-4 py-2 rounded-lg mt-4 md:mt-0">+ Add Your Review</button>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div key={review.id} className="p-4 bg-[#0F0F0F] rounded-lg">
                            <h3 className="text-lg font-semibold">{review.author}</h3>
                            <p className="text-yellow-500">⭐ {review.author_details.rating || "4.5"}</p>
                            <p className="text-gray-300 mt-2">{review.content.slice(0, 150)}...</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">No reviews available.</p>
                )}
            </div>

            <div className="flex gap-4 justify-center mt-7">
                <button className="bg-[#0F0F0F] px-3 py-1 rounded-full text-white hover:bg-gray-700 transition-all">
                    <i className="ri-arrow-left-line text-xl"></i>
                </button>
                <div className="flex items-center justify-center">
                    <h1 className="text-4xl text-red-600">-</h1>
                    <h1 className="text-4xl text-gray-700">-</h1>
                    <h1 className="text-4xl text-gray-700">-</h1>
                </div>
                <button className="bg-[#0F0F0F] px-3 py-1 rounded-full text-white hover:bg-gray-700 transition-all">
                    <i className="ri-arrow-right-line text-xl"></i>
                </button>
            </div>
        </div>
    );
};

export default ReviewsSection;

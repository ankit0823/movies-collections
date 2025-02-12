"use client"
import TopRatedMovies from '@/app/landing page/movielists/TopRatedMovies';

import LatestMovies from '@/app/landing page/movielists/LatestMovies';
import PopularMovies from '@/app/landing page/movielists/PopularMovies';
import UpcomingBangers from '@/app/landing page/movielists/UpcomingBangers';
import Genres from '../app/landing page/movielists/Geners';

const MovieCarousel = () => {

return (
    <div className='flex flex-col gap-4'>
        <Genres/>
        <UpcomingBangers/>
        <LatestMovies/>
        <TopRatedMovies/>
        <PopularMovies/>
       

    </div>
)
}

export default MovieCarousel

import { useEffect, useState } from 'react'
import { Loader } from '../components/Loader'
import { MovieList } from '../components/MovieList'
export const MoviesPage = ({movies}) => {
   const [indieNegev2021, setIndieNegev2021] = useState([])
   const [indieNegev2022, setIndieNegev2022] = useState([])
  useEffect(() => {
    setIndieNegev2021(movies.filter(movie => movie.category.toLowerCase() === 'indnegev2021'))
    setIndieNegev2022(movies.filter(movie => movie.category.toLowerCase() === 'indnegev2022'))
    }, [movies])
    if (!movies) return <Loader />
    return (
      <div className="catalogue">
        <MovieList movies={indieNegev2021} moviesTitle={'אינדינגב 2021'} />
        <MovieList movies={indieNegev2022} moviesTitle={'אינדינגב 2022'} />
      </div>
    )
}

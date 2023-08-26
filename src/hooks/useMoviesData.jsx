import { useQuery } from 'react-query'
import { movieService } from '../services/movie-service'

export const useMoviesData = () => {
  return useQuery('movies', movieService.getMovies, {
    select: (data) => {
        return data
    },
  })
}

import { useQuery } from 'react-query'
import { movieService } from '../services/movie-service'

export const useCommentsData = (movieId ) => {
  return useQuery(['comments', movieId], () => movieService.getComments(movieId), {
    select: (data) => {
        return data
    },
  })
}

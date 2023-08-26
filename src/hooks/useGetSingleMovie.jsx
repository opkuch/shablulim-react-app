import { movieService } from "../services/movie-service"
import { useQuery } from "react-query"
export const useGetSingleMovie = (movieId) => {
    return useQuery(['movie', movieId], () => movieService.getMovie(movieId), {
        select: (data) => {
            return data
        },
      })
    
}
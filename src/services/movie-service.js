import { httpService } from './http-service'

export const movieService = {
  getMovies,
  getMovie,
  postComment,
  getComments
}

async function getMovies() {
  try {
    const movies = await httpService.get('movies')
    if (!movies.length) return null
    return movies
  } catch (err) {
    console.log('cannot get movies', err)
  }
}
async function getMovie(movieId) {
  const API = 'movies/' + movieId
  try {
    const movie = await httpService.get(API, { id: movieId })
    if (!movie.length) return null
    return movie[0]
  } catch (err) {
    console.log('cannot get this movie...', err)
  }
}

async function postComment(comment) {
  try {
    const commentId = await httpService.post('comments', comment)
    if (!commentId) return null
    return commentId
  }catch(err) {
    console.log('cannot post comment', err)
  }
}


async function getComments(movieId) {
  const API = 'comments/' + movieId
  try {
    const comments = await httpService.get(API, {id: movieId})
    if (!comments.length) return null
    return comments
  } catch (err) {
    console.log('cannot get comments', err)
  }

}


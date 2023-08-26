import { MoviePreview } from './MoviePreview'

export const MovieList = ({ movies, moviesTitle }) => {
  return (
    <section>
      <header className="header__layout">
        <h1>{moviesTitle}</h1>
      </header>
      <ul className='clean-list flex justify-center'>
        {movies.map((movie) => (
          <MoviePreview key={movie._id} movie={movie} />
        ))}
      </ul>
    </section>
  )
}

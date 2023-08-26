import { useParams } from 'react-router-dom'
import { AddComment } from '../components/AddComment'
import { CommentList } from '../components/CommentList'
import { Loader } from '../components/Loader'
import { Player } from '../components/Player'
import { movieService } from '../services/movie-service'
import { useCommentsData } from '../hooks/useCommentsData'
import { useGetSingleMovie } from '../hooks/useGetSingleMovie'
import { useMutation } from 'react-query'
import { useQueryClient } from 'react-query'
import { EnterCoupon } from '../components/EnterCoupon'
import { ToolTip } from '../features/ToolTip'
import infoImg from '../assets/images/svg/info.svg'
import creatorImg from '../assets/images/svg/creator.svg'
import titleImg from '../assets/images/svg/videocam.svg'

export const MovieDetails = ({ isValidCode }) => {
  const { movieId } = useParams()
  const { data: movie, isLoading: isMovieLoading } = useGetSingleMovie(movieId)
  const { data: comments, isLoading: isCommentsLoading } =
    useCommentsData(movieId)
  const queryClient = useQueryClient()
  const { mutate: mutateComments } = useMutation({
    mutationFn: (comment) => {
      return movieService.postComment(comment)
    },
    onSuccess: () => {
      queryClient.invalidateQueries('comments')
    },
  })

  const onAddComment = async (comment) => {
    mutateComments(comment)
  }
  if (!isValidCode) return <EnterCoupon />
  if (isMovieLoading) return <Loader />
  else if (movie)
    return (
      <div className="movie-details-wrapper">
        <section className='flex column justify-center player-wrapper'>
          <div className="movie-details">
            <Player videoId={movie.videoId} imgUrl={movie.imgUrl} />
          </div>
          <div className="movie-actions">
            <ToolTip iconSrc={titleImg} text={movie.title} />
            {movie.creator ? (
              <ToolTip iconSrc={creatorImg} text={movie.creator} />
            ) : (
              ''
            )}
            {movie.description ? (
              <ToolTip iconSrc={infoImg} text={movie.description} />
            ) : (
              ''
            )}
          </div>
        </section>
        <AddComment onAddComment={onAddComment} movieId={movieId} />
        {isCommentsLoading ? (
          <div>טוען תגובות..</div>
        ) : (
          <CommentList comments={comments} />
        )}
      </div>
    )
}

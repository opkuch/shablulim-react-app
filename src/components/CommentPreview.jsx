import commentImg from '../assets/images/shablul-logo.png'
import { ShortComment } from '../features/ShortComment'
export const CommentPreview = ({ comment }) => {
  const isLongComment = (commentStr) => {
    return commentStr.length > 90? true : false
  }
  return (
    <li>
        <p className="comment-name">
          {comment.name} <span className="ts">{comment.ts.substring(0, 10)}</span>
        </p>
      <p className="comment-content">{isLongComment(comment.comment)? <ShortComment commentStr={comment.comment}/> : comment.comment}</p>
      <img src={commentImg} alt=""/>
    </li>
  )
}

import { CommentPreview } from "./CommentPreview"

export const CommentList = ({comments}) => {

    if (!comments) return <div style={{paddingBlockEnd: '2rem'}}>עוד לא נכתבו תגובות על הסרט..</div>
    else return <ul className="comment-list clean-list">
        {comments.map(comment => <CommentPreview key={comment._id} comment={comment}/>)}
    </ul>
}
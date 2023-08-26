import { useState } from 'react'
import { Button } from './Button'

export const AddComment = ({ onAddComment, movieId }) => {
  const [comment, setComment] = useState({
    name: '',
    content: '',
    movieId
  })
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleName = (val) => {
    setComment((prevState) => {
      return val? { name: val, content: prevState.content, movieId } : { name: '', content: prevState.content, movieId }
})
}
const handleContent = (val) => {
    setComment((prevState) => {
      return val? { name: prevState.name, content: val, movieId } : { name: prevState.name, content: '', movieId }
    })
}

const handleSubmit = (e, comment) => {
  e.preventDefault()
  if (!comment.name || !comment.content) return
  setComment({
    name: '',
    content: '',
    movieId
  })
  onAddComment(comment)
}
  return (
    <div className="add-comment">
      <header className='flex'>
        <h2>מה חשבת על הסרט?</h2>
        <Button text={isFormOpen? 'סגור' : 'הוסף תגובה'} clickFunc={() => setIsFormOpen(prevState => !prevState)}/>
      </header>
      <form className={isFormOpen? 'open-form' : ''} onSubmit={(e) => handleSubmit(e, comment)}>

        <section className="flex column">
          <label htmlFor="commenter-name">שם</label>
          <input type="text" placeholder="איך קוראים לך?" onChange={(e) => handleName(e.target.value)} value={comment.name}/>
        </section>
        <section className="flex column">
          <label htmlFor="commenter-name">תגובה</label>
          <textarea type="text" placeholder="הוסף לכאן טקסט" onChange={(e) => handleContent(e.target.value)} value={comment.content}></textarea>
        </section>
        <Button text="שלח" size="sm" type="submit"></Button>
      </form>
    </div>
  )
}

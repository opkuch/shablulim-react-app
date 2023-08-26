import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import playImg from '../assets/images/svg/play.svg'
export const MoviePreview = ({ movie }) => {
  const assetsPath = 'src/assets/images/inDNegev/'
  const [isHovering, setIsHovering] = useState(false)
  const navigate = useNavigate()
  return (
    <li className={`movie-preview ${isHovering? 'show' : 'hide'}`} onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onClick={() => navigate('' + movie._id)}>
        <img src={assetsPath + movie.imgUrl} alt="" />
        <div className="sub-info">
          <h2 className="title">{movie.title}</h2>
          <h3 className="creator subtle">{movie.creator}</h3>
          <p className="description">{movie.description}</p>
      </div>
    </li>
  )
}

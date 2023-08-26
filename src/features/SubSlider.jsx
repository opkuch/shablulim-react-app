import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'

export const SubSlider = ({ moviesToShow, assetsPath }) => {
  const subSliderSettings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    className: 'sub-slider-hover',
  }

  return (
    <div className="sub-slider">
      <Slider {...subSliderSettings}>
        {moviesToShow.map((movie) => (
          <SubSliderPreview
            key={movie._id}
            movie={movie}
            assetsPath={assetsPath}
          />
        ))}
      </Slider>
    </div>
  )
}
const SubSliderPreview = ({ movie, assetsPath }) => {
  const [isHovering, setIsHovering] = useState(false)
  const navigate = useNavigate()

  return (
    <div
      key={movie._id}
      className={`sub-slider-img ${isHovering ? 'show' : 'hide'}`}
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => navigate('movies/' + movie._id)}
    >
      <img src={assetsPath + movie.imgUrl} alt="" />
      <div className="sub-info">
        <h2 className='title'>{movie.title}</h2>
        <h3 className='creator'>{movie.creator}</h3>
        <p>{movie.description}</p>
      </div>
    </div>
  )
}

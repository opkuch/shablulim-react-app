import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '../components/Button'
import playImg from '../assets/images/svg/play.svg'
export const HeroSlider = ({ moviesToShow, assetsPath }) => {
  const [isGrabbing, setIsGrabbing] = useState(false)
  const navigate = useNavigate()

  const heroSliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    swipeToSlide: true,
    onSwipe: () => {
      setIsGrabbing(false)
    },
  }
  return (
    <div className="hero-slider-container">
      <Slider {...heroSliderSettings}>
        {moviesToShow.map((movie) => (
          <div key={movie._id} className="slide-wrapper">
            <img
              src={assetsPath + movie.imgUrl}
              alt=""
              className={`${isGrabbing ? 'grabbing' : 'grab'} slide-img`}
              onMouseDownCapture={() => setIsGrabbing(true)}
              onMouseUp={() => setIsGrabbing(false)}
            />
            <div className="movie-info-gallery">
              <h2 className="title">{movie.title}</h2>
              <p className="creator subtle">{movie.creator}</p>
              <p className="description">{movie.description}</p>
              <Button
                text="צפה עכשיו"
                clickFunc={() => navigate('/movies/' + movie._id)}
                size="sm"
                pill={true}
                iconSrc={playImg}
                manualClass="icon-right"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

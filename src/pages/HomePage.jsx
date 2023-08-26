import { About } from '../components/About'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { HeroSlider } from '../features/HeroSlider'
import { SubSlider } from '../features/SubSlider'

export const HomePage = ({ movies }) => {
  const assetsPath = 'src/assets/images/inDNegev/'
  const navigate = useNavigate()
  if (!movies) return <div>Loading..</div>
  else
    return (
      <>
        <HeroSlider moviesToShow={movies} assetsPath={assetsPath}/>
        <SubSlider moviesToShow={movies} assetsPath={assetsPath}/>
        <Button
          text="לכל הקטלוג"
          clickFunc={() => navigate('/movies')}
          size="lg"
          manualClass="catalogue-btn"
          pill={true}
        />
        <About />
      </>
    )
}

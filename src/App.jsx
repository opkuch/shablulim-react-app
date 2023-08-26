import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Loader } from './components/Loader'
import { HomePage } from './pages/HomePage'
import { MoviesPage } from './pages/MoviesPage'
import { Navbar } from './components/Navbar'
import { MovieDetails } from './pages/MovieDetails'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMoviesData } from './hooks/useMoviesData'
import { Footer } from './components/Footer'
import { PaymentMessage } from './components/PaymentMessage'
import { authService } from './services/auth-service'
import { ContactUs } from './pages/ContactUs'
function App() {
  const moviesData = useMoviesData()
  const [isValidCode, setIsValidCode] = useState(false)
  useEffect(() => {
    async function isCodeValid() {
      const isValid = await authService.validateCoupon()
      setIsValidCode(isValid)
    }
    isCodeValid()
   }, [])
  if (moviesData.isLoading) return <Loader />
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage movies={moviesData.data} />} />
        <Route
          path="/movies"
          element={<MoviesPage movies={moviesData.data}/>}
        />
        <Route
        exact
          path="/payment-message"
          element={<PaymentMessage />}
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/movies/:movieId" element={<MovieDetails isValidCode={isValidCode} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

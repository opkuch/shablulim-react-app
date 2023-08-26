import logoImg from '../assets/images/shablul-logo.png'
import { useLocation, NavLink } from 'react-router-dom'
import { useEffect } from 'react'

export const Navbar = () => {
  const location = useLocation()
  return (
    <nav
      className={`header__layout navbar ${
        location.pathname === '/' ? 'pos-fixed' : ''
      }`}
    >
      <div className="links-wrapper stick-to-top">
        <input type="checkbox" id="mainLogo" defaultChecked="true" />
        <label className="logo-wrapper" htmlFor="mainLogo">
          <img className="navbar__logo" src={logoImg} alt="" />
        </label>
        <ul className="menu clean-list">
          <li>
            <NavLink to="/">?מי אנחנו</NavLink>
          </li>
          <li>
            <NavLink to="/movies">סרטים</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">דברו איתנו</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

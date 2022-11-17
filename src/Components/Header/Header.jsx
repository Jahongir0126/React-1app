import React from 'react'
import './Headedr.scss'
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <header>
        <div className="nav container">

          <a href="#"><img className='logo' src={logo} alt="img" /></a>
          <div className="nav__items">
            <NavLink to="/" className={ ({isActive})=>isActive ? "nav__link__active" : "nav__link"}>Beranda</NavLink>
            <NavLink to="/feedback" className={ ({isActive})=>isActive ? "nav__link__active" : "nav__link"}>Koleksi</NavLink>
            <NavLink to="/forread" className={ ({isActive})=>isActive ? "nav__link__active" : "nav__link"}>Syarat dan Ketentuan</NavLink>
            <NavLink to="/contact" className={ ({isActive})=>isActive ? "nav__link__active" : "nav__link"}>Kontak</NavLink>
            <a href='#' className="nav__button">Masuk</a>
          </div>
        </div>
      </header>
    </>
  )
}

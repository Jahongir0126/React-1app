import React from 'react'
import './Headedr.scss'
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <>
      <header>
        <div className="nav container">

          <a href="#"><img className='logo' src={logo} alt="img" /></a>
          <div className="nav__items">
            <a href="#" className="nav__link">Beranda</a>
            <a href="#" className="nav__link">Koleksi</a>
            <a href="#" className="nav__link">Syarat dan Ketentuan</a>
            <a href="#" className="nav__link">Kontak</a>
            <a href="#" className="nav__button">Masuk</a>
          </div>
        </div>
      </header>
    </>
  )
}

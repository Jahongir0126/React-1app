import React from 'react'
import './Hero.scss'
import Card from '../Card/Card'
import Card_img1 from '../../assets/images/card1.png'
import Card_img2 from '../../assets/images/card2.png'
import Card_img3 from '../../assets/images/card3.png'
import Card_img4 from '../../assets/images/card4.png'
import Card_img5 from '../../assets/images/card5.png'
import Card_img6 from '../../assets/images/card6.png'
import Card_img7 from '../../assets/images/card7.png'

export default function Hero() {
  return (
    <>
        <section>
            <div className="container">
                <div className="hero">
                    <p className="hero__p"><span className='hero__green'>Pojok Baca</span> Probolinggo</p>
                    <h3 className="hero__h3">Pinjam Buku Secara <span className='hero__green'>Gratis</span> untuk Masyarakat</h3>
                    <div className='hero__links'>
                        <a href="#" className="hero__link">Cari Judul Buku</a>
                        <a href="#" className="hero__link">Donasi dengan Kami</a>
                    </div>
                    <div className="hero__cards">
                    <Card className="hero__cards__card1 card" title="Sedang Tuhan pun Cemburu" author="Emha Ainun Nadjib" img={Card_img1}/>
                    <Card className="hero__cards__card2 card" title="Hati-Hati dengan Sampah" author="Ukjae Lee" img={Card_img2}/>
                    <Card className="hero__cards__card3 card" title="Laut Bercerita" author="Leila S. Chudori" img={Card_img3}/>
                    <Card className="hero__cards__card4 card" title="Toto-chan : The  Little Girl At The Window" author="Testuko Kuroyanagi" img={Card_img4}/>
                    <Card className="hero__cards__card5 card" title="Anatomi Rasa" author="Ayu Utami" img={Card_img5}/>
                    <Card className="hero__cards__card6 card" title="Perempuan di Titik Nol" author="Nawal eEl Saadawi" img={Card_img6}/>
                    <Card className="hero__cards__card7 card" title="Berjalan di Atas Cahaya" author="Hanum Salsabiela Rais" img={Card_img7}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

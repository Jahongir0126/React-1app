import React from 'react'
import './Section3.scss'
import ForRead1 from '../../assets/images/read1.png'
import ForRead2 from '../../assets/images/read2.png'
import ForRead3 from '../../assets/images/read3.png'


export default function Section3() {
    return (
        <>
            <section className='container'>
                <div className="forread">
                    <h4 className="forread__h4">Kegiatan Pojok Baca Probolinggo</h4>
                    <p className="forread__p">Intip kegiatan yang telah kami selenggarakan </p>
                    <img className='forread__img' src={ForRead1}alt="img" />
                    <img className='forread__img'src={ForRead2}alt="img" />
                    <img className='forread__img'src={ForRead3}alt="img" />

                </div>
                <div className="register">
                    <h3 className="register__h3">Ingin <span className='hero__green'>Membantu</span> Meningkatkan Literasi Anak-Anak Sekitar Kita?</h3>
                    <p className="register__p">Percayakan melalui kegiatan kita</p>
                    <a href="#" className="hero__link">Donasi dengan Kami</a>
                    <p className="register__p2">Atau</p>
                    <a href="#" className="hero__link">Hubungi Kami </a>
                    
                </div>
            </section>

        </>
    )
}

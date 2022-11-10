import React from 'react';
import './Footer.scss';
import Case from './FooterList';
import Footer_logo from '../../assets/images/footer_logo.png'
import Instagram from '../../assets/images/instagram_logo.png'
import Facebook from '../../assets/images/facebook_logo.png'
import Youtube from '../../assets/images/youtube_logo.png'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container footer">

                <div className="logo__block">
                    <img src={Footer_logo} alt="logo" />
                    <p className="logo__text">Pojok Baca Probolinggo</p>
                    <img src={Instagram} alt="icon" />
                    <img src={Facebook} alt="icon" />
                    <img src={Youtube} alt="icon" />
                </div>
                <Case
                    title="Kontak"
                    text1="Email"
                    text2="Alamat"
                    text3="No. Rekening"
                />
                <Case 
                    title="Tentang Kami"
                    text1="Umum"
                />
                <Case
                    title="Galery"
                    text1="Kegiatan 2018"
                    text2="Kegiatan 2019"
                    text3="Kegiatan 2020"
                    text4="Kegiatan 2021"
                />

                </div>
                <div className="copyright">
                    <p className="copyright__p">© Pojok Baca Probolinggo 2022</p>
                </div>
            </footer>
        </>
    )
}

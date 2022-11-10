import React from 'react';
import './Section2.scss';
import Feedback from '../Feedbacks/Feedbacks';
import Count from '../Feedbacks/Count';
import Person1 from '../../assets/images/persons_photo1.png'
import Person2 from '../../assets/images/persons_photo2.png'
import Person3 from '../../assets/images/persons_photo3.png'
import Person4 from '../../assets/images/persons_photo4.png'
import Elips from '../../assets/images/Elips_count.png';

export default function Section2() {
  return (
    <>
        <section>
            <div className="feedback">
                <h3 className="feedback__h3">Kenapa Kita <span className='hero__green'>Harus</span> Membaca Buku?</h3>
                <Feedback 
                    title="“Aku rela dipenjara asalkan bersama buku, karena dengan buku aku bebas”" 
                    name="Mohammad Hatta" 
                    text="Wakil Presiden Indonesia Pertama" 
                    img={Person1}
                />
                <Feedback 
                    title="“Cuma perlu satu buku untuk jatuh cinta pada membaca, Cari Buku itu! Mari jatuh cinta! " 
                    name="Najwa Shihab" 
                    text="Duta Membaca" 
                    img={Person2}
                />

            </div>
            <div className="rating">
                <Count
                    strongText="500+"
                    normalText="Judul Buku"
                    img={Elips}
                />
                <Count
                    strongText="$0"
                    normalText="Gratis Peminjaman"
                    img={Elips}
                />
                <Count
                    strongText="5"
                    normalText="Kegiatan Rutin"
                    img={Elips}
                />
            </div>
            <div className="offer">
                <h4 className="offer__h4">
                Apa Kata Mereka?
                </h4>
                <p className="offer__p">Mereka yang telah menjadi pengunjung tetap kami</p>
                <div className="offer__feed">
                <Feedback 
                    title="“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. " 
                    name="Guy Hawkins" 
                    text="32 Tahun, Karyawan" 
                    img={Person3}
                />
                <Feedback 
                    title="“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. " 
                    name="Brooklyn Simmons" 
                    text="20 Tahun, Mahasiswa" 
                    img={Person4}
                />
                </div>
                <div className="offer__icons">
                    <span className="offer__icons__icon"></span>
                    <span className="offer__icons__icon"></span>
                    <span className="offer__icons__icon"></span>
                </div>
            </div>
        </section>
    </>
  )
}

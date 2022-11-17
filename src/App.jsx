import './App.css'
import Header from './Components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Hero from './Components/Hero/Hero';
import Feedback from './Components/Feedback/Feedback';
import ForRead from './Components/ForRead/ForRead';
import Footer from './Components/Footer/Footer'
import NotFound from './Components/Page404//Page404'
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <main>

        <Routes>
            <Route path="/"   element={<Hero/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/forRead' element={<ForRead/>}/>
            <Route path='*' element={<NotFound/> }/>

        </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

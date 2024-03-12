import {useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/campus/Campus'
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Videoplayer from './components/Videoplayer/Videoplayer'
const App = () => {
  const [playerstate, setplayerstate] = useState(false)
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title  subtitle='Our Programs' title="What we Offer" />

    <Programs/>
    <About setplayerstate={setplayerstate}/>
    <Title  subtitle='Gallery' title="Campus Photos" />
    <Campus/>
    <Title  subtitle='Testimonials' title="Students Reviews" />
    <Testimonial/>
    <Title  subtitle='Contact Us' title="Get in Touch" />
    <Contact/>
    <Footer/>
    <Videoplayer playerstate={playerstate} setplayerstate={setplayerstate}/>

    </div>
    </>
  )
}

export default App
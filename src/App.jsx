
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/campus/Campus'
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title  subtitle='Our Programs' title="What we Offer" />

    <Programs/>
    <About/>
    <Title  subtitle='Gallery' title="Campus Photos" />
    <Campus/>
    <Title  subtitle='Testimonials' title="Students Reviews" />
    <Testimonial/>
    <Title  subtitle='Contact Us' title="Get in Touch" />
    <Contact/>
    <Footer/>

    </div>
    </>
  )
}

export default App
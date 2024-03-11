
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/campus/Campus'
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

    </div>
    </>
  )
}

export default App
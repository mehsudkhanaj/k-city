
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-text container">
            <h1>We ensure better Education</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ut consectetur possimus aliquam harum non cum totam commodi et velit atque animi excepturi quod omnis dicta cupiditate! Fugiat, facilis error!</p>
            <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
        </div>

    </div>
  )
}

export default Hero
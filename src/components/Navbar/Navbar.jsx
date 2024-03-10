import {useState,useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  const [sticky, setsticky] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setsticky(true):setsticky(false)
    })

  
  }, [])
  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li> <button className='btn'>Contact Us</button></li>

        </ul>
    </nav>
  )
}

export default Navbar
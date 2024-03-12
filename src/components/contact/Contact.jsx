import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import {useState} from 'react'
const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "677a0533-b9b7-4c48-a21b-a395e24b8b24");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(data.message);
      event.target.reset();

    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>
          Send us a message <img src={msg_icon} alt='' />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorum
          rerum repellat, voluptatum unde at soluta aut? Commodi, unde. Ipsam,
          hic laborum ducimus autem architecto tenetur numquam ullam dolor
          omnis.
        </p>
        <ul>
          <li>
            {' '}
            <img src={mail_icon} alt='' /> ajmehsud12@gmail.com
          </li>
          <li>
            {' '}
            <img src={phone_icon} alt='' /> 123 456 789
          </li>
          <li>
            {' '}
            <img src={location_icon} alt='' />
            Lahore, Subhan hostel
          </li>
        </ul>
      </div>

      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder="Enter your mobile" required />
          <label>Your Message</label>
          <textarea name="message"   rows="6" placeholder="Enter your message" required></textarea>
          <button type="submit" className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact

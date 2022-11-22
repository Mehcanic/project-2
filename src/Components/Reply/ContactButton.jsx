import React from 'react'
import Replay from '../../assets/images/icon-reply.svg'
import '../../App.css'
import './ContactButton.css'

const ContactButton = () => {
  return (
    <button className="reply-button">
      {/* <img src={Replay} alt="" /> */}
      <p>Contact</p>
    </button>
  )
}

export default ContactButton
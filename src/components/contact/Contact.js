import React, { useRef } from 'react'
import './Contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineLinkedin } from 'react-icons/ai'
import emailjs from '@emailjs/browser';
const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4ohmxr5', 'template_5dby2il', form.current, 'X-wTkKDRLuspX8T4J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset()
    }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option__icon' />
            <h4>Email</h4>
            <h5>sayanmaity631@gmail.com</h5>
           <a  rel="noreferrer"target="_blank"href="mailto:sayanmaity631@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option__icon'/>
            <h4>Linkedin</h4>
            <h5>Sayan@LinkedIn.com</h5>
           <a  rel="noreferrer" target="_blank"href="https://www.linkedin.com/in/sayan-maity-8ba151220/">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option__icon'/>
            <h4>Messenger</h4>
            <h5>Sayan@messenger.com</h5>
           <a  rel="noreferrer" target="_blank"href="https://api.whatsapp.com/send?phone+917596889179">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option__icon'/>
            <h4>WhatsApp</h4>
            <h5>7596889179</h5>
           <a  rel="noreferrer" target="_blank"href="https://api.whatsapp.com/send?phone+917596889179">Send a message</a>
          </article>
        </div>
        <form ref={form}  onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' />
          <input type="email" name='email' placeholder='Your Email'/>
          <textarea cols="30" rows="15" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

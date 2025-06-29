import React from 'react'
import { FaGithubAlt, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { LuPhoneCall } from 'react-icons/lu'
import { MdEmail } from 'react-icons/md'
import { RiInstagramLine } from 'react-icons/ri'

const Footer = () => {
    return (
        <footer className='footer-section'>
            <div className="icons-container">
                <a href="https://www.linkedin.com/in/jafar-khan-845396331" className="icon" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="linkedin" />
                </a>
                <a href="https://www.instagram.com/jafar_jk0/" target="_blank" className="icon">
                    <RiInstagramLine className="insta" />
                </a>
                <a href="https://wa.me/917347512300?text=Hi%20there!" target="_blank" className="icon">
                    <FaWhatsapp className="whatsapp" />
                </a>
                <a href="https://github.com/mrjafar" className="icon" target="_blank">
                    <FaGithubAlt />
                </a>
            </div>

            {/* 📞 Contact Info */}
            <div className="contact-info">
                <p><a href="mailto:jk3909030@gmail.com"><MdEmail/> jk39090@gmail.com</a> <strong>|</strong><a href="tel:+917347512300"> <LuPhoneCall/> +91 73475 12300</a></p>
            </div>

            <p className="footer-note">© Portfolio | All Rights Reserved</p>
        </footer>
    )
}

export default Footer

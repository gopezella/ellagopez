import React, { Component } from 'react'
import '../assets/styles/contact.scss'
import contactLogo from '../assets/images/logo-footer.png'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

class contact extends Component {
    render() {
        return (
            <section className="contact-section" name="contact-me">
                <div className="container text-center">
                    <div className="contact-text-div">
                        <h1>CONTACT ME</h1>
                        <h5>You can <span>find me</span> at:</h5>
                    </div>

                    <div className="social-div">
                        <a href="mailto:gopezellam@gmail.com" className="email-link">
                            <p>gopezellam@gmail.com</p>
                        </a>

                        <div className="social-items-div justify-content-center">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/gopezella/" className="social-link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/ellagopez/" className="social-link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/ellagopez/" className="social-link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/gopezella" className="social-link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </li>
                                <li>
                                    <a href="twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="contact-logo-div">
                            <img src={contactLogo} alt="contact-logo" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default contact

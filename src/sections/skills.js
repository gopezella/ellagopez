import React, { Component } from 'react'
import '../assets/styles/skills.scss'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap, faSass } from '@fortawesome/free-brands-svg-icons'


class skills extends Component {
    render() {
        return (
            <section className="skills-section container" name="skills">
                <div className="skills-title-div text-center">
                    <hr className="line" />
                    <p className="mt-5">TECHNICAL SKILLS</p>
                </div>

                <div id="spin">
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>JAVASCRIPT</p>
                    <p>REACTJS</p>
                    <p>SASS</p>
                </div>

                <div className="skills-div">
                    <div className="row justify-content-center">
                        <div className="col-10 col-sm-10 col-md-4 col-lg-3 skill-item-div">
                            <div className="skill-item-content">
                                <div className="upper-div text-center">
                                    <FontAwesomeIcon className="html5-icon" icon={faHtml5} />
                                </div>
                                <div className="lower-div">
                                    <h5>HTML5</h5>
                                    <p>A markup language for the structure and presentation of World Wide Web contents. </p>
                                    <div className="learn-link-div">
                                        <a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noopener noreferrer">
                                            <p className="d-inline-block m-0 mr-1">Learn here</p>
                                            <ion-icon name="arrow-forward-outline" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-sm-10 col-md-4 col-lg-3 skill-item-div">
                            <div className="skill-item-content">
                                <div className="upper-div text-center">
                                    <FontAwesomeIcon className="css3-icon" icon={faCss3Alt} />
                                </div>
                                <div className="lower-div">
                                    <h5>CSS3</h5>
                                    <p>CSS3 is the iteration of the CSS standard used in the styling and formatting of Web pages. </p>
                                    <div className="learn-link-div">
                                        <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
                                            <p className="d-inline-block m-0 mr-1">Learn here</p>
                                            <ion-icon name="arrow-forward-outline" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-sm-10 col-md-4 col-lg-3 skill-item-div">
                            <div className="skill-item-content">
                                <div className="upper-div text-center">
                                    <FontAwesomeIcon className="js-icon" icon={faJsSquare} />
                                </div>
                                <div className="lower-div">
                                    <h5>JAVASCRIPT</h5>
                                    <p>JavaScript is a programming language commonly used in web development. </p>
                                    <div className="learn-link-div">
                                        <a href="https://www.youtube.com/watch?v=PkZNo7MFNFg" target="_blank" rel="noopener noreferrer">
                                            <p className="d-inline-block m-0 mr-1">Learn here</p>
                                            <ion-icon name="arrow-forward-outline" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center second-row">
                        <div className="col-10 col-sm-10 col-md-4 col-lg-3 skill-item-div">
                            <div className="skill-item-content">
                                <div className="upper-div text-center">
                                    <FontAwesomeIcon className="react-icon" icon={faReact} />
                                </div>
                                <div className="lower-div">
                                    <h5>REACTJS</h5>
                                    <p>ReactJS is an open-source JavaScript library that is used for building user interfaces. </p>
                                    <div className="learn-link-div">
                                        <a href="https://www.youtube.com/watch?v=DLX62G4lc44" target="_blank" rel="noopener noreferrer">
                                            <p className="d-inline-block m-0 mr-1">Learn here</p>
                                            <ion-icon name="arrow-forward-outline" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-sm-10 col-md-4 col-lg-3 skill-item-div">
                            <div className="skill-item-content">
                                <div className="upper-div text-center">
                                    <FontAwesomeIcon className="sass-icon" icon={faSass} />
                                </div>
                                <div className="lower-div">
                                    <h5>SASS</h5>
                                    <p> Extension of CSS that enables you to use things like variables, nested rules and more</p>
                                    <div className="learn-link-div">
                                        <a href="https://www.youtube.com/watch?v=_a5j7KoflTs" target="_blank" rel="noopener noreferrer">
                                            <p className="d-inline-block m-0 mr-1">Learn here</p>
                                            <ion-icon name="arrow-forward-outline" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-sm-10 col-md-4 col-lg-3 skill-item-div">
                            <div className="skill-item-content">
                                <div className="upper-div text-center">
                                    <FontAwesomeIcon className="bootstrap-icon" icon={faBootstrap} />
                                </div>
                                <div className="lower-div">
                                    <h5>BOOTSTRAP</h5>
                                    <p> Bootstrap is an open-source framework. It includes HTML and CSS based design templates</p>
                                    <div className="learn-link-div">
                                        <a href="https://www.youtube.com/watch?v=RyTRgQ7k6QE" target="_blank" rel="noopener noreferrer">
                                            <p className="d-inline-block m-0 mr-1">Learn here</p>
                                            <ion-icon name="arrow-forward-outline" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default skills

import React, { Component } from 'react'
import '../assets/styles/home.scss'
import waveImage from '../assets/images/wave.png'
import { ReactComponent as Arrow } from '../assets/icons/down-arrow.svg'
// import { ReactComponent as Heart } from '../assets/icons/heart.svg'
import { Link } from 'react-scroll'

class home extends Component {
    render() {
        return (
            <section className="home-section container-fluid element col-12" id="home" name="home">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-11 col-12">
                            <h1><span>Hello, </span>
                                <div id="spin">
                                    <p>World!</p>
                                    <p>Earth!</p>
                                    <p>Globe!</p>
                                    <p>Designers!</p>
                                    <p>Developers!</p>
                                </div>
                            </h1>
                            <div className="row">
                                <div className="col-xs-12">
                                    <h2>ELLA <span>GOPEZ</span>
                                        <img className="wave-image" src={waveImage} alt="" />
                                        <p>COMPUTER ENGINEER</p>
                                    </h2>
                                </div>
                            </div>
                            <Link to="about" smooth={true} spy={true} className="about-link">
                                <button className="btn btn-about mt-4">
                                    {/* <Heart className="heart-icon" /> */}
                                    <p>ABOUT ME</p>
                                </button>
                            </Link>
                        </div>
                        <div className="arrow-container col-12">
                            <Link className="arrow" to="about" smooth={true} spy={true}><Arrow className="down-arrow" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default home

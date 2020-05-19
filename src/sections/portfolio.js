import React, { Component } from 'react'
import '../assets/styles/portfolio.scss'
import { ReactComponent as Coding } from '../assets/icons/coding.svg'


class portfolio extends Component {
    render() {
        return (
            <section className="portfolio-section" name="portfolio">
                <div className="container">
                    <div className="portfolio-title-div text-center">
                        <hr className="line" />
                        <p className="mt-5">PORTFOLIO</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-11 col-sm-10 col-md-10 col-lg-8 soon-div text-center">
                            <Coding className="coding-icon" />
                            <p>SOON..</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default portfolio

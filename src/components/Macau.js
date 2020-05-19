import React, { Component } from 'react'
import macau1 from '../assets/images/macau1.jpg'
import macau2 from '../assets/images/macau2.jpg'
import macau3 from '../assets/images/macau3.jpg'

class Macau extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-10 col-sm-10 col-md-4 col-lg-4 item-div">
                    <div className="destination-content">
                        <div className="upper-div">
                            <img src={macau1} alt="macau1" />
                            <div className="overlay" />
                        </div>
                        <div className="lower-div">
                            <h5>Ruins of St. Paul's</h5>
                            <p>Lorem ipsum dolor sit. Pellentesque commodo viverra blandit</p>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-sm-10 col-md-4 col-lg-4 item-div">
                    <div className="destination-content">
                        <div className="upper-div">
                            <img src={macau2} alt="macau2" />
                            <div className="overlay" />
                        </div>
                        <div className="lower-div">
                            <h5>De ku alam san tu</h5>
                            <p>Lorem ipsum dolor sit. Pellentesque commodo viverra blandit</p>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-sm-10 col-md-4 col-lg-4 item-div">
                    <div className="destination-content">
                        <div className="upper-div">
                            <img src={macau3} alt="macau3" />
                            <div className="overlay" />
                        </div>
                        <div className="lower-div">
                            <h5>Santo António</h5>
                            <p>Lorem ipsum dolor sit. Pellentesque commodo viverra blandit</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Macau

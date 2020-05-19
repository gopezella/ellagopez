import React, { Component } from 'react'
import hongkong1 from '../assets/images/hongkong1.jpg'
import hongkong2 from '../assets/images/hongkong2.jpg'
import hongkong3 from '../assets/images/hongkong3.jpg'

class Macau extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-10 col-sm-10 col-md-4 col-lg-4 item-div">
                    <div className="destination-content">
                        <div className="upper-div">
                            <img src={hongkong1} alt="hongkong1" />
                            <div className="overlay" />
                        </div>
                        <div className="lower-div">
                            <h5>Mong Kok</h5>
                            <p>Lorem ipsum dolor sit. Pellentesque commodo viverra blandit</p>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-sm-10 col-md-4 col-lg-4 item-div">
                    <div className="destination-content">
                        <div className="upper-div">
                            <img src={hongkong2} alt="hongkong2" />
                            <div className="overlay" />
                        </div>
                        <div className="lower-div">
                            <h5>Hong Kong Disneyland</h5>
                            <p>Lorem ipsum dolor sit. Pellentesque commodo viverra blandit</p>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-sm-10 col-md-4 col-lg-4 item-div">
                    <div className="destination-content">
                        <div className="upper-div">
                            <img src={hongkong3} alt="hongkong3" />
                            <div className="overlay" />
                        </div>
                        <div className="lower-div">
                            <h5>Tsim Sha Tsui East</h5>
                            <p>Lorem ipsum dolor sit. Pellentesque commodo viverra blandit</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Macau

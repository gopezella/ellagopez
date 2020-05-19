import React, { Component } from 'react'
import taiwan1 from '../assets/images/taiwan1.jpg'
import taiwan2 from '../assets/images/taiwan2.jpg'
import taiwan3 from '../assets/images/taiwan3.jpg'

class Macau extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-10 col-sm-10 col-md-4 col-lg-4 item-div">
                    <div className="destination-content">
                        <div className="upper-div">
                            <img src={taiwan1} alt="taiwan1" />
                            <div className="overlay" />
                        </div>
                        <div className="lower-div">
                            <h5>Bopiliao Historic</h5>
                            <p>Lorem ipsum dolor sit. Pellentesque commodo viverra blandit</p>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-sm-10 col-md-4 col-lg-4 item-div">
                    <div className="destination-content">
                        <div className="upper-div">
                            <img src={taiwan2} alt="taiwan2" />
                            <div className="overlay" />
                        </div>
                        <div className="lower-div">
                            <h5>Chiang Kai-shek</h5>
                            <p>Lorem ipsum dolor sit. Pellentesque commodo viverra blandit</p>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-sm-10 col-md-4 col-lg-4 item-div">
                    <div className="destination-content">
                        <div className="upper-div">
                            <img src={taiwan3} alt="taiwan3" />
                            <div className="overlay" />
                        </div>
                        <div className="lower-div">
                            <h5>Taipei 101</h5>
                            <p>Lorem ipsum dolor sit. Pellentesque commodo viverra blandit</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Macau

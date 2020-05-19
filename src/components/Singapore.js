import React, { Component } from 'react'
import sg1 from '../assets/images/sg1.jpg'
import sg2 from '../assets/images/sg2.jpg'
import sg3 from '../assets/images/sg3.jpg'

class Macau extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-10 col-sm-10 col-md-4 col-lg-4 item-div">
                    <div className="destination-content">
                        <div className="upper-div">
                            <img src={sg1} alt="sg1" />
                            <div className="overlay" />
                        </div>
                        <div className="lower-div">
                            <h5>Haji Lane</h5>
                            <p>Lorem ipsum dolor sit. Pellentesque commodo viverra blandit</p>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-sm-10 col-md-4 col-lg-4 item-div">
                    <div className="destination-content">
                        <div className="upper-div">
                            <img src={sg2} alt="sg2" />
                            <div className="overlay" />
                        </div>
                        <div className="lower-div">
                            <h5>Universal Studios</h5>
                            <p>Lorem ipsum dolor sit. Pellentesque commodo viverra blandit</p>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-sm-10 col-md-4 col-lg-4 item-div">
                    <div className="destination-content">
                        <div className="upper-div">
                            <img src={sg3} alt="sg3" />
                            <div className="overlay" />
                        </div>
                        <div className="lower-div">
                            <h5>Marina Bay Sands</h5>
                            <p>Lorem ipsum dolor sit. Pellentesque commodo viverra blandit</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Macau

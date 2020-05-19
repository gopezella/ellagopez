import React, { Component } from 'react'
import '../assets/styles/travel.scss'
import MacauContent from '../components/Macau'
import HongkongContent from '../components/Hongkong'
import TaiwanContent from '../components/Taiwan'
import SingaporeContent from '../components/Singapore'


//Icons
import { ReactComponent as Macau } from '../assets/icons/macao.svg'
import { ReactComponent as Hongkong } from '../assets/icons/hong-kong.svg'
import { ReactComponent as Taiwan } from '../assets/icons/taiwan.svg'
import { ReactComponent as Singapore } from '../assets/icons/singapore.svg'

class travel extends Component {
    render() {
        return (
            <section className="travel-section" name="travel">
                <div className="container">
                    <div className="travel-title-div text-center">
                        <hr className="line" />
                        <p className="mt-5">TRAVEL</p>
                    </div>
                    <div className="row tab-div justfiy-content-center">
                        <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                            <li className="nav-item col-6 col-sm-5 col-md-3 col-lg-3">
                                <a className="nav-link active macau-link" id="macau-tab" data-toggle="tab" href="#macau" role="tab" aria-controls="macau" aria-selected="true">
                                    <Macau id="macau-icon" />
                                    <p>MACAU</p>
                                </a>
                            </li>
                            <li className="nav-item col-6 col-sm-5 col-md-3 col-lg-3">
                                <a className="nav-link hongkong-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                    <Hongkong id="hongkong-icon" />
                                    <p>HONGKONG</p>
                                </a>
                            </li>
                            <li className="nav-item col-6 col-sm-5 col-md-3 col-lg-3">
                                <a className="nav-link taiwan-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                    <Taiwan id="taiwan-icon" />
                                    <p>TAIWAN</p>
                                </a>
                            </li>
                            <li className="nav-item col-6 col-sm-5 col-md-3 col-lg-3">
                                <a className="nav-link singapore-link" id="singapore-tab" data-toggle="tab" href="#singapore" role="tab" aria-controls="singapore" aria-selected="false">
                                    <Singapore id="sg-icon" />
                                    <p>SINGAPORE</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="macau" role="tabpanel" aria-labelledby="macau-tab">
                            <MacauContent />
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <HongkongContent />
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <TaiwanContent />
                        </div>
                        <div className="tab-pane fade" id="singapore" role="tabpanel" aria-labelledby="singapore-tab">
                            <SingaporeContent />
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default travel

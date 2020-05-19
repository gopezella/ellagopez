import React, { Component } from 'react'
import '../assets/styles/about.scss'

class about extends Component {
    render() {
        return (
            <section className="about-section" name="about">
                <div className="container">
                    <div className="text-center about-me-div">
                        <hr className="line" />
                        <p className="mt-5 page-heading">ABOUT ME</p>
                    </div>
                    <div className="row mt-5 mb-5 justify-content-center">
                        <div className="col-xs-12 col-sm-11 col-md-10 col-lg-4 item-container">
                            <div className="item-content">
                                <ion-icon name="desktop-outline" class="item-icon align-middle"></ion-icon>
                                <div className="d-inline-block pl-3 align-middle"><p className="mb-0 text-left title">COMPUTER <br /><span>ENGINEERING</span></p></div>
                                <div className="item-paragraph">
                                    <p className="pt-3">Lorem ipsum dolor sit.
                                    Pellentesque commodo viverra blandit. Curabitur dignissim, sapien quis suscipit mollis,
                                    libero est faucibus mauris, in pretium nisi lorem ac lacus. Donec auctor massa sed nunc sodales,
                               </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-11 col-md-10 col-lg-4 item-container">
                            <div className="item-content">
                                <ion-icon name="code-slash-outline" class="item-icon align-middle" />
                                <p className="d-inline pl-3 title">WEB DESIGN</p>
                                <div className="item-paragraph">
                                    <p className="pt-3">Lorem ipsum dolor sit.
                                    Pellentesque commodo viverra blandit. Curabitur dignissim, sapien quis suscipit mollis,
                                    libero est faucibus mauris, in pretium nisi lorem ac lacus. Donec auctor massa sed nunc sodales,
                               </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-11 col-md-10 col-lg-4 item-container">
                            <div className="item-content">
                                <ion-icon name="airplane-outline" class="item-icon align-middle" />
                                <p className="d-inline pl-3 title">TRAVEL</p>
                                <div className="item-paragraph">
                                    <p className="pt-3">Lorem ipsum dolor sit.
                                    Pellentesque commodo viverra blandit. Curabitur dignissim, sapien quis suscipit mollis,
                                    libero est faucibus mauris, in pretium nisi lorem ac lacus. Donec auctor massa sed nunc sodales,
                               </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default about

import React, { Component } from 'react';

export default class Welcome extends Component {
    render() {
        return (
        <div class="welcome-area" id="welcome">
            <div class="header-text">
                <div class="container">
                    <div class="row">
                        <div class="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                            <h1>Simple App that we <em>CREATE</em></h1>
                            <p>Lava <a href="#">HTML landing page</a> template is provided by <a href="#">TemplateMo</a>.
                            You can modify and use it for your commercial websites for free of charge. This template is last updated on 29 Oct 2019.</p> 
                            <a href="#about" class="main-button-slider">KNOW US BETTER</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
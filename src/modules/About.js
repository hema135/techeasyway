import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <section class="section" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <div class="features-item">
                            <div class="features-icon">
                                <h2>01</h2>
                                <img src="../../public/assets/images/features-icon-1.png" alt="" />
                                <h4>Trend Analysis</h4>
                                <p>Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                                <a href="#testimonials" class="main-button">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                        data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
                        <div class="features-item">
                            <div class="features-icon">
                                <h2>02</h2>
                                <img src="../../public/assets/images/features-icon-2.png" alt="" />
                                <h4>Site Optimization</h4>
                                <p>Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                                <a href="#testimonials" class="main-button">
                                    Discover More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                        data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                        <div class="features-item">
                            <div class="features-icon">
                                <h2>03</h2>
                                <img src="../../public/assets/images/features-icon-3.png" alt="" />
                                <h4>Email Design</h4>
                                <p>Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                                <a href="#testimonials" class="main-button">
                                    More Detail
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
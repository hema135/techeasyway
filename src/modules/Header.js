import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <header class="header-area header-sticky">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <nav class="main-nav">
                                <a href="index.html" class="logo">
                                    Lava
                                </a>
                                <ul class="nav">
                                    <li class="scroll-to-section"><a href="#welcome" class="menu-item">Home</a></li>
                                    <li class="scroll-to-section"><a href="#about" class="menu-item">About</a></li>
                                    <li class="scroll-to-section"><a href="#testimonials" class="menu-item">Testimonials</a>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:;">Drop Down</a>
                                        <ul>
                                            <li><a href="" class="menu-item">About Us</a></li>
                                            <li><a href="" class="menu-item">Features</a></li>
                                            <li><a href="" class="menu-item">FAQ's</a></li>
                                            <li><a href="" class="menu-item">Blog</a></li>
                                        </ul>
                                    </li>
                                    <li class="scroll-to-section"><a href="#contact-us" class="menu-item">Contact Us</a></li>
                                </ul>
                                <a class='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
        </header>
        )
    }
}
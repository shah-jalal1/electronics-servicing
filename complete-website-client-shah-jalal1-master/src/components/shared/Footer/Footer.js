import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faCoffee  } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const noNamed = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
    ]
    const ourAddress = [
        { name: "New York - 101010 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]
    const oralHealth = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" }
    ]
    const services = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <p>
                        We may or may not be an authorized distributor or representative for the manufacturers listed on our website and/or videos. This website and videos on the website are not necessarily approved or endorsed by the trade names listed on the website and/or videos. Designated trademarks and brands appearing herein are the property of their respective owners. All pictures are for reference only and may not be the actual unit.

                    </p>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} Global Electronic Services, Inc. All rights reserved.All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
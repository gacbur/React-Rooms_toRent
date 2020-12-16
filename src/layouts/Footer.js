import React from 'react'

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links-cnt">
                    <h4>Check our social media:</h4>
                    <div className="social-links">
                        <span className="social-link-item"><a href=""><FaFacebook /></a></span>
                        <span className="social-link-item"><a href="">
                            <FaTwitter /></a></span>
                        <span className="social-link-item"><a href="">
                            <FaInstagram /></a></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

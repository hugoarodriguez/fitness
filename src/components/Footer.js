import React from 'react';
import { Link } from 'react-router-dom';
import { RiFacebookCircleLine, RiInstagramLine, RiWhatsappLine } from 'react-icons/ri';

import "../components/styles/Footer.css";
import moresLogoImg from "../images/mores-logo.jfif";

const Footer = () => {

    return (
        <footer className="pt-4 pb-0" id="footer-component">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="row justify-content-center">
                            <div className="col-6 text-center">
                                <img
                                    alt=""
                                    src={moresLogoImg}
                                    width="100"
                                    height="100"
                                />
                            </div>
                        </div>
                        <div className="row p-4 justify-content-center">
                            <div className="col-2 text-center text-white">
                                <a href="https://www.facebook.com/Mores-2061829620752384/" target="_blank" rel="noopener noreferrer" className="nav-link p-0">
                                    <span><RiFacebookCircleLine size="2.2em" /></span>
                                </a>
                            </div>
                            <div className="col-2 text-center text-white">
                                <a href="https://www.instagram.com/mores.sss/" target="_blank" rel="noopener noreferrer" className="nav-link p-0">
                                    <span><RiInstagramLine size="2.2em" /></span>
                                </a>
                            </div>
                            <div className="col-2 text-center text-white">
                                <a href="https://www.instagram.com/mores.sss/" target="_blank" rel="noopener noreferrer" className="nav-link p-0">
                                    <span><RiWhatsappLine size="2.2em" /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/login" className="nav-link p-0 text-white">FAQ</Link></li>
                                <li className="nav-item mb-2"><Link to="/login" className="nav-link p-0 text-white">ENVÍOS</Link></li>
                                <li className="nav-item mb-2"><Link to="/login" className="nav-link p-0 text-white">ACERCA DE</Link></li>
                                <li className="nav-item mb-2"><Link to="/login" className="nav-link p-0 text-white">TERMINOS Y CONDICIONES</Link></li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="d-flex justify-content-end border-top text-white">
                                <p>© 2022 Pastelería More's. Todos los derechos reservados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
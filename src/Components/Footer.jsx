import React from 'react';
import "../css/Footer.css";

export default function Footer() {
    return (
        <div className="row bg-success mt-5 p-3">
            <div className="contacto col-12 col-md-4 col-lg-4 mt-3 ">
                <div className="social-networks h-25">
                    <i className="fab fa-instagram fa-3x mr-4 p-3"></i>
                    <i className="fab fa-facebook fa-3x mr-4 p-3"></i>
                    <i className="fab fa-twitter fa-3x mr-4 p-3"></i>
                </div>
                <div className="info h-75">
                    <h6>Contacto</h6>
                    <ul className="border-top border-dark py-5">
                        <li>Direccion: Calle Falsa 123</li>
                        <li>Telefono: 4-123456</li>
                        <li>whatsapp: 3415-12345667</li>
                        <li>e-mail: tumarca@hotmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="map col-12 col-md-8 col-lg-8 my-3">
                <iframe title="our location on the map"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1674.072023025537!2d-60.636307608001246!3d-32.94720614091602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m1!1m0!5e0!3m2!1ses!2sar!4v1604933086880!5m2!1ses!2sar" frameBorder={0} style={{border:0, width: "100%", height: "300px"}} allowFullScreen="" aria-hidden={false} tabIndex={0} />
            </div>
        </div>
    )
}

import React from "react";

export default function Footer(props) {
    return (
        <footer>
            <div className="row bg-success mt-5 p-3">
                <div className="contacto col-12 col-md-6 col-lg-6 mt-3 text-center my-auto">
                    <div className="social-networks d-flex justify-content-around mb-5 h-25">
                        {props.data.socialnetworks.length
                            ? props.data.socialnetworks.map((element, i) => {
                                  return (
                                      <a
                                          key={i}
                                          href={`https://${element.url}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                      >
                                          <i
                                              className={`fab fa-${element.name} fa-3x p-2`}
                                          ></i>
                                      </a>
                                  );
                              })
                            : ""}
                    </div>
                    <div className="info h-75">
                        <h6 className="w-100 text-uppercase">Contacto</h6>
                        <div className=" d-flex flex-wrap justify-content-center border-top border-bottom border-dark w-100">
                            <ul className="text-left text-capitalize pl-5 py-3 mb-0">
                                {props.data.contact.length
                                    ? props.data.contact.map((element,i) => {
                                          return (
                                              <li key={i}>{`${element.title}: ${element.data}`}</li>
                                          );
                                      })
                                    : ""}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="map col-12 col-md-6 col-lg-6 my-3">
                    <iframe
                        title="our location on the map"
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1674.072023025537!2d-60.636307608001246!3d-32.94720614091602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m1!1m0!5e0!3m2!1ses!2sar!4v1604933086880!5m2!1ses!2sar"
                        frameBorder="0"
                        width="100%"
                        height={300}
                        allowFullScreen=""
                        aria-hidden={false}
                        tabIndex="0"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
}

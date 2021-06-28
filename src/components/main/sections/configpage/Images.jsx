import React from "react";

export default function Images(props) {
    return (
        <div className={`${props.properties.title} p-2 d-flex flex-wrap justify-content-center justify-content-md-between`}>
            {props.data && props.data.length
                ? props.data.map((data, i) => {
                      return (
                          <div
                              key={i}
                              className="d-flex flex-column col-8 col-sm-6 col-md-4 p-3 text-third"
                          >
                              <img
                                  className={`${props.properties.title}${data.id}`}
                                  src={data.url}
                                  alt={data.name}
                                  width="100%"
                                  height="75%"
                              />
                              <p className="position-absolute ml-2">
                                  {data.name}
                              </p>
                              <label
                                  htmlFor={`${props.properties.title}${data.id}`}
                                  className="file text-center"
                              >
                                  Change image
                              </label>
                              <input
                                  dataid={data.id}
                                  id={`${props.properties.title}${data.id}`}
                                  name={`${props.properties.title}${data.id}`}
                                  type="file"
                                  className="file d-none"
                                  onChange={props.properties.handlerChange}
                              />
                              <div
                                  className={`error w-100 ${props.properties.title}${data.id}`}
                              ></div>
                          </div>
                      );
                  })
                : ""}
        </div>
    );
}

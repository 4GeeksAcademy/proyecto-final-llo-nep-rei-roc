import React from "react";
import imagen from "../../../img/testeo.jpg";
import Mark from "../../../img/items/mark.png";

export const Card_Ruta = () => {

  return (
    <div className="card" style={{ width: "18rem", padding: 6 }}>
      <img src={imagen} className="card-img-top" alt="..." style={{ margin: 1, borderRadius: "8px" }} />
      <div className="card-body text-start">
        <h5 className="card-title">Bar & Pubs Route</h5>
        <p className="card-text">@pepe</p>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.99997 8.26005C8.37658 8.26005 8.73777 8.11044 9.00408 7.84413C9.27038 7.57783 9.41999 7.21664 9.41999 6.84003C9.41999 6.46342 9.27038 6.10223 9.00408 5.83593C8.73777 5.56962 8.37658 5.42001 7.99997 5.42001C7.62336 5.42001 7.26217 5.56962 6.99587 5.83593C6.72956 6.10223 6.57996 6.46342 6.57996 6.84003C6.57996 7.21664 6.72956 7.57783 6.99587 7.84413C7.26217 8.11044 7.62336 8.26005 7.99997 8.26005Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" />
              <path d="M8 4C5.15997 4 4.68649 6.36655 5.15997 8.16044C5.57665 9.7322 6.82584 10.8063 7.64987 11.6872C7.69424 11.7359 7.74831 11.7749 7.8086 11.8015C7.86889 11.8281 7.93408 11.8419 8 11.8419C8.06592 11.8419 8.13111 11.8281 8.1914 11.8015C8.25169 11.7749 8.30576 11.7359 8.35013 11.6872C9.17374 10.8063 10.4234 9.7322 10.84 8.16044C11.3135 6.36655 10.84 4 8 4Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" />
            </svg>
            <p>+5</p>
          </div>
          <p className="card-text">⭐4,8</p>
        </div>
      </div>
      <div className="Mark_tarjeta position-absolute" style={{ top: 13, right: 10 }}>
        <img src={Mark} width={40} height={40} />
      </div>
    </div>
  )

}
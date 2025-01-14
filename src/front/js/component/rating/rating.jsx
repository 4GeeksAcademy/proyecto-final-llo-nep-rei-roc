import React from "react";

export const StarRating = () => {
    return (
        <div className="d-flex flex-column align-items-center p-3">
            <div
                className="d-flex justify-content-between w-100"
            // Aumenta el ancho máximo del contenedor
            >
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        width="40" // Tamaño mayor de las estrellas
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.23642 7.33797L1.85642 8.26297L1.74342 8.28597C1.57236 8.33138 1.41641 8.42138 1.29151 8.54677C1.16661 8.67216 1.07722 8.82846 1.03248 8.9997C0.987739 9.17093 0.989246 9.35098 1.03685 9.52144C1.08445 9.69191 1.17643 9.84668 1.30342 9.96997L5.92542 14.469L4.83542 20.824L4.82242 20.934C4.81195 21.1109 4.84868 21.2874 4.92887 21.4455C5.00905 21.6035 5.1298 21.7374 5.27875 21.8335C5.42771 21.9295 5.59951 21.9843 5.77657 21.9921C5.95363 21.9999 6.12958 21.9605 6.28642 21.878L11.9924 18.878L17.6854 21.878L17.7854 21.924C17.9505 21.989 18.1299 22.0089 18.3052 21.9817C18.4805 21.9545 18.6454 21.8812 18.783 21.7692C18.9206 21.6573 19.026 21.5107 19.0883 21.3446C19.1505 21.1785 19.1675 20.9988 19.1374 20.824L18.0464 14.469L22.6704 9.96897L22.7484 9.88397C22.8598 9.74674 22.9329 9.58242 22.9601 9.40776C22.9874 9.23311 22.9678 9.05435 22.9035 8.8897C22.8392 8.72505 22.7323 8.5804 22.5939 8.47048C22.4555 8.36056 22.2904 8.28931 22.1154 8.26397L15.7354 7.33797L12.8834 1.55797C12.8009 1.3905 12.6731 1.24948 12.5146 1.15087C12.3561 1.05226 12.1731 1 11.9864 1C11.7997 1 11.6168 1.05226 11.4582 1.15087C11.2997 1.24948 11.1719 1.3905 11.0894 1.55797L8.23642 7.33797Z"
                            fill="#FFD700"
                        />
                    </svg>
                ))}
            </div>
            <textarea
                className="form-control mt-3"
                rows="3"
                placeholder="Escribe tu opinión aquí..."
                style={{ width: "100%", maxWidth: "400px" }}
            ></textarea>
        </div>
    );
};
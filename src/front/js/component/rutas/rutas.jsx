import React from "react";

export const RouteList = ({ stops }) => {
    return (
        <div className="route-list">
            {stops.map((stop, index) => (
                <div className="route-item" key={index}>
                    {index === stops.length - 1 ? (
                        <svg
                            className="end-marker"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_31_126)">
                                <circle cx="16" cy="16" r="16" fill="white" />
                                <path
                                    d="M16.0001 16.5201C16.7533 16.5201 17.4757 16.2209 18.0083 15.6883C18.5409 15.1557 18.8401 14.4333 18.8401 13.6801C18.8401 12.9269 18.5409 12.2045 18.0083 11.6719C17.4757 11.1393 16.7533 10.8401 16.0001 10.8401C15.2468 10.8401 14.5245 11.1393 13.9919 11.6719C13.4593 12.2045 13.16 12.9269 13.16 13.6801C13.16 14.4333 13.4593 15.1557 13.9919 15.6883C14.5245 16.2209 15.2468 16.5201 16.0001 16.5201Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M16 8C10.3199 8 9.37297 12.7331 10.3199 16.3209C11.1533 19.4644 13.6517 21.6127 15.2997 23.3743C15.3885 23.4718 15.4966 23.5497 15.6172 23.603C15.7378 23.6563 15.8682 23.6838 16 23.6838C16.1318 23.6838 16.2622 23.6563 16.3828 23.603C16.5034 23.5497 16.6115 23.4718 16.7003 23.3743C18.3475 21.6127 20.8467 19.4644 21.6801 16.3209C22.627 12.7331 21.6801 8 16 8Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_31_126">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    ) : (
                        <svg
                            className="point-marker"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_36_87)">
                                <circle cx="16" cy="16" r="16" fill="white" />
                                <path
                                    d="M10.6667 16C10.6667 17.4145 11.2286 18.771 12.2288 19.7712C13.229 20.7714 14.5855 21.3333 16 21.3333C17.4145 21.3333 18.7711 20.7714 19.7713 19.7712C20.7715 18.771 21.3334 17.4145 21.3334 16C21.3334 14.5855 20.7715 13.229 19.7713 12.2288C18.7711 11.2286 17.4145 10.6667 16 10.6667C14.5855 10.6667 13.229 11.2286 12.2288 12.2288C11.2286 13.229 10.6667 14.5855 10.6667 16Z"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_36_87">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    )}
                    <span className="stop-name">{stop}</span>
                </div>
            ))}
        </div>
    );
};

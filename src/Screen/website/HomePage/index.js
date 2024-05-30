import React, { useRef } from "react";
import "./style.scss";
import logo from "../../../assets/images/logo.png";
import car from "../../../assets/images/car.png";
import aeroleft from "../../../assets/images/aeroleft.png";
import aeroright from "../../../assets/images/aeroright.png";
import setting from "../../../assets/images/setting.png";

const HomePage = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -170, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 170, behavior: "smooth" });
        }
    };
    return (
        <>
            <div className="mainbg">
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            <img src={logo} width="30" height="30" alt="Logo" />
                        </a>
                        <div class="navbar-nav mx-auto">
                            <a class="nav-link" href="#">
                                Home
                            </a>
                            <a class="nav-link" href="#">
                                About
                            </a>
                            <a class="nav-link" href="#">
                                Services
                            </a>
                            <a class="nav-link" href="#">
                                Contact
                            </a>
                        </div>
                        <div class="navbar-nav">
                            <button class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </nav>
                <div className="container h-75 d-flex align-items-center main-heading">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-12">
                            <h1>Revolutionize Your Vehicle Transport</h1>
                            <p>Drive Smart, Share More, Earn Big, Preserve Nature.</p>
                            <button className="btn orange">Send</button>
                            <button className="btn yellow">Transparent</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container main-div mb-3">
                <div className="row">
                    <div className="col-12">
                        <div className="text mt-4">
                            <p>How TransWeego Works</p>
                            <h2>
                                Lorem Ipsum is simply<br></br> dummy text
                            </h2>
                        </div>
                        <div className="scrollable-container">
                            <div className="group-btn">
                                <button className="btn orange">vehicles</button>
                                <button className="btn offwhite">Transparent</button>
                                <button className="btn offwhite">Send</button>
                                <button className="btn offwhite">Transparent</button>
                                <button className="btn offwhite">Transparent</button>
                                <button className="btn offwhite">Transparent</button>
                            </div>
                        </div>
                        <div className="mt-5 d-flex gap-3 align-items-center  justify-content-center">
                            <img
                                src={aeroleft}
                                width="22"
                                height="42"
                                alt="left arrow"
                                onClick={scrollLeft}
                                style={{ cursor: "pointer" }}
                            />
                            <div
                                className="d-flex gap-3 align-items-center overflow-auto w-75 text-center overflow-x:hidden"
                                style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
                                ref={scrollContainerRef}
                            >
                                <img src={car} width="170" height="170" alt="car" />
                                <img src={car} width="170" height="170" alt="car" />
                                <img src={car} width="170" height="170" alt="car" />
                                <img src={car} width="170" height="170" alt="car" />
                                <img src={car} width="170" height="170" alt="car" />
                                <img src={car} width="170" height="170" alt="car" />
                            </div>
                            <img
                                src={aeroright}
                                width="22"
                                height="42"
                                alt="right arrow"
                                onClick={scrollRight}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                        <div className="group-btn mt-5 text-center mb-4">
                            <button className="btn orange">Send</button>
                            <button className="btn yellow">Transparent</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lorem-section">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <div className="heading-sec">
                                <p>Why Choose TransWeGo</p>
                                <h1>Lorem Ipsum issimply dummy textof the printing andtypesetting industry</h1>
                            </div>
                            <div className="d-flex align-items-center gap-5 mt-5">
                                <div className="d-flex align-items-center gap-3 setting">
                                    <img src={setting} width="48" height="48" alt="car" />
                                    <p>Cost Efficiency</p>
                                </div>
                                <div className="d-flex align-items-center gap-3 setting">
                                    <img src={setting} width="48" height="48" alt="car" />
                                    <p>Cost Efficiency</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-5 mt-5">
                                <div className="d-flex align-items-center gap-3 setting">
                                    <img src={setting} width="48" height="48" alt="car" />
                                    <p>Cost Efficiency</p>
                                </div>
                                <div className="d-flex align-items-center gap-3 setting">
                                    <img src={setting} width="48" height="48" alt="car" />
                                    <p>Cost Efficiency</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            {/* <img src={carimg} width="500" height="500" alt="car" /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={carimg} width="500" height="500" alt="car" />
                    </div>
                    <div className="col-6">
                        <h6>About us</h6>
                        <h2>Lorem Ipsum is
                            simply dummy text of
                            the printing and
                            typesetting industry.</h2>
                        <p>It is a long established fact that a reader will be
                            distracted by the readable content of a page
                            when looking at its layout. </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;

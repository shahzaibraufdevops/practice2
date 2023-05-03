import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import bannerImg from "../images/mobilebanner.jpg";
import bannerVideo from "../images/homevideo.m4v";


class BannerV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
        <div className="ltn__slider-11-inner">
          <div className="ltn__slider-11-active">
            {/* slide-item */}
            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
              <div className="ltn__slide-item-inner">
                <div className="margin-top-fix container">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <div className="slide-video mb-50 d-none">
                            <a
                              className="ltn__video-icon-2 ltn__video-icon-2-border"
                              href="https://www.youtube.com/embed/tlThdr3O5Qo"
                              data-rel="lightcase:myCollection"
                            >
                              <i className="fa fa-play" />
                            </a>
                          </div>
                          <h6 className="slide-sub-title white-color--- animated">
                            <span>
                              <i
                                className="fas fa-home"
                                style={{ color: "#27A3A3" }}
                              />
                            </span>
                            Property wallet
                          </h6>
                          <h1 className="slide-title animated slide-title-show">
                            Manage Your
                            <br />
                            <span style={{ color: "#27A3A3" }}>
                              Real Estate Business
                            </span>
                            <br /> Anytime, Anywhere
                          </h1>
                          <h1
                            style={{ display: "none" }}
                            className="animated slide-title-hide"
                          >
                            Manage Your
                            <br />
                            <span style={{ color: "#27A3A3" }}>
                              Real Estate Business
                            </span>
                            <br /> Anytime, Anywhere
                          </h1>

                          <div className="slide-brief animated">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>

                          <div className="btn-wrapper animated">
                            <Link to="#" className="theme-btn-Home btn">
                              Watch tutorial
                            </Link>
                            <a
                              className="ltn__video-play-btn-home btn-effect-1"
                              href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0"
                              data-rel="lightcase"
                              style={{ marginTop: "5%" }}
                            >
                              <i
                                className="icon-play icon-home-play"
                              // style={{ color: "#27A3A3" }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item-img">
                        <img src={bannerImg} alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* /// */}
            {/* slide-item */}
            {/* <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
              <div className="ltn__slide-item-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <div className="slide-video mb-50 d-none">
                            <a
                              className="ltn__video-icon-2 ltn__video-icon-2-border"
                              href="https://www.youtube.com/embed/tlThdr3O5Qo"
                              data-rel="lightcase:myCollection"
                            >
                              <i className="fa fa-play" />
                            </a>
                          </div>
                          <h6 className="slide-sub-title white-color--- animated">
                            <span>
                              <i className="fas fa-home" />
                            </span>{" "}
                            Real Estate Agency
                          </h6>
                          <h1 className="slide-title animated ">
                            Find Your Dream <br /> House By Us
                          </h1>
                          <div className="slide-brief animated">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div className="btn-wrapper animated">
                            <Link
                              to="/service"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              OUR SERVICES
                            </Link>
                            <Link
                              to="/about"
                              className="btn btn-transparent btn-effect-3"
                            >
                              LEARN MORE
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item-img">
                        <img
                          src={publicUrl + "assets/img/slider/62.jpg"}
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* slide-item */}
            {/* <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
              <div className="ltn__slide-item-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <div className="slide-video mb-50 d-none">
                            <a
                              className="ltn__video-icon-2 ltn__video-icon-2-border"
                              href="https://www.youtube.com/embed/tlThdr3O5Qo"
                              data-rel="lightcase:myCollection"
                            >
                              <i className="fa fa-play" />
                            </a>
                          </div>
                          <h6 className="slide-sub-title white-color--- animated">
                            <span>
                              <i className="fas fa-home" />
                            </span>{" "}
                            Real Estate Agency
                          </h6>
                          <h1 className="slide-title animated ">
                            Find Your Dream <br /> House By Us
                          </h1>
                          <div className="slide-brief animated">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div className="btn-wrapper animated">
                            <Link
                              to="/service"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              OUR SERVICES
                            </Link>
                            <Link
                              to="/about"
                              className="btn btn-transparent btn-effect-3"
                            >
                              LEARN MORE
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item-img">
                        <img
                          src={publicUrl + "assets/img/slider/63.jpg"}
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* slide-item */}
            {/* <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
              <div className="ltn__slide-item-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <div className="slide-video mb-50 d-none">
                            <a
                              className="ltn__video-icon-2 ltn__video-icon-2-border"
                              href="https://www.youtube.com/embed/tlThdr3O5Qo"
                              data-rel="lightcase:myCollection"
                            >
                              <i className="fa fa-play" />
                            </a>
                          </div>
                          <h6 className="slide-sub-title white-color--- animated">
                            <span>
                              <i className="fas fa-home" />
                            </span>{" "}
                            Real Estate Agency
                          </h6>
                          <h1 className="slide-title animated ">
                            Find Your Dream <br /> House By Us
                          </h1>
                          <div className="slide-brief animated">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div className="btn-wrapper animated">
                            <Link
                              to="/service"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              OUR SERVICES
                            </Link>
                            <Link
                              to="/about"
                              className="btn btn-transparent btn-effect-3"
                            >
                              LEARN MORE
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item-img">
                        <img
                          src={publicUrl + "assets/img/slider/64.jpg"}
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* slider-4-pagination */}
          {/* <div className="ltn__slider-11-pagination-count">
            <span className="count" />
            <span className="total" />
          </div> */}
          {/* slider-sticky-icon */}
          {/* <div className="slider-sticky-icon-2">
            <ul>
              <li>
                <a href="#" title="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" title="Linkedin">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div> */}
          {/* slider-4-img-slide-arrow */}
          {/* <div className="ltn__slider-11-img-slide-arrow">
            <div className="ltn__slider-11-img-slide-arrow-inner">
              <div className="ltn__slider-11-img-slide-arrow-active">
                <div className="image-slide-item">
                  <img
                    src={publicUrl + "assets/img/slider/61.jpg"}
                    alt="Flower Image"
                  />
                </div>
                <div className="image-slide-item">
                  <img
                    src={publicUrl + "assets/img/slider/62.jpg"}
                    alt="Flower Image"
                  />
                </div>
                <div className="image-slide-item">
                  <img
                    src={publicUrl + "assets/img/slider/63.jpg"}
                    alt="Flower Image"
                  />
                </div>
                <div className="image-slide-item">
                  <img
                    src={publicUrl + "assets/img/slider/64.jpg"}
                    alt="Flower Image"
                  />
                </div>
              </div>
          
              <div className="ltn__slider-11-slide-item-count">
                <span className="count" />
                <span className="total" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default BannerV2;




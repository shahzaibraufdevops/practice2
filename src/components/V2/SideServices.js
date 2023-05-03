import React from 'react';
const SideServices = ({ gallery, namingList, heading, bottomContent, type }) => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    let publicUrl = process.env.PUBLIC_URL + '/'
    return <>  <div className="ltn__about-us-area pb-115 go-top" style={{ marginTop: "10%" }} data-aos="fade-up">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 align-self-center">
                    <div className="about-us-img-wrap  about-img-left">
                        {type === 'image' ? <img src={gallery} alt="Image" /> : <video style={iOS ? { width: '100%' } : { width: '100%' }} className='videoTag' playsInline autoPlay loop muted>
                            <source src={gallery} type='video/mp4' />
                        </video>}

                    </div>
                </div>
                <div className="col-lg-7 align-self-center">
                    <div className="about-us-info-wrap">
                        <div className="section-title-area ltn__section-title-2--- mb-20">
                            {/* <h1 className="section-title" style={{ color: "#053857" }}>{heading}<span></span></h1> */}
                            <h6 style={{ color: "#053857", fontSize: "2rem" }}>{heading} </h6>
                            <div>
                                {namingList.map((val, i) => {
                                    return <ul key={i}>
                                        <li>{val.provideList}</li>
                                    </ul>
                                })
                                }
                                <div>
                                    {bottomContent}
                                </div>
                            </div>
                        </div>
                        {/* <div className="btn-wrapper animated">
								<Link to="/about" className="theme-btn-1 btn btn-effect-1 text-uppercase">About Us</Link>
							</div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default SideServices
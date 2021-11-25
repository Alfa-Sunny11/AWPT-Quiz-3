import React from 'react'

export const Client = () => {
      return (
            <div>
                  {/* <!-- ======= Hero Section ======= --> */}
                  <section id="hero" className="d-flex align-items-center justify-content-center">
                        <div className="container position-relative">
                              <h1>Welcome to Baker</h1>
                              <h2>We are team of talented designers making websites with Bootstrap</h2>
                              <a href="#about" className="btn-get-started scrollto">Get Started</a>
                        </div>
                  </section>
                  <section id="clients" className="clients section-bg">
                        <div className="container">

                        <div className="row">

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                              <img src="assets/img/clients/client-1.png" className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                              <img src="assets/img/clients/client-2.png" className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                              <img src="assets/img/clients/client-3.png" className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                              <img src="assets/img/clients/client-4.png" className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                              <img src="assets/img/clients/client-5.png" className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                              <img src="assets/img/clients/client-6.png" className="img-fluid" alt=""/>
                        </div>

                        </div>

                        </div>
                  </section>
            </div>
            
      )
}

export default Client;
import React from "react";
import "../Styles.css";

const ShortenLink = () => {
  return (
    <div>
      <section className="shortenlink mt-5 absolute">
        <div className="container ">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="shorten-bg">
                <div className="d-flex gap-3">
                  <input
                    width=""
                    type="url"
                    placeholder="shorten a link here "
                    className="w-80 form-control text-danger linkShortner"
                  />
                  <button className="btn btn-secondary">Shorten it!</button>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row mt-3">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="shortened_result">
                <div className="s_result_bg">
                  <div className="row pt-2 p-3 black ">
                    <div className="col-md-6">
                      <div>
                        <strong className="text-primary link-to-be-generated">
                          https://www.frontendmentor.io/login/dashboard
                        </strong>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div>
                        <strong className="text-primary link-generated">
                          https://rel.reflink/87484Y
                        </strong>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div>
                        <button className="btn btn-primary">Copy</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row mt-3">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="shortened_result">
                <div className="s_result_bg">
                  <div className="row pt-2 p-3 black ">
                    <div className="col-md-6">
                      <div>
                        <strong className="text-primary link-to-be-generated">
                          https://www.frontendmentor.io/login/dashboard
                        </strong>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div>
                        <strong className="text-primary link-generated">
                          https://rel.reflink/87484Y
                        </strong>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div>
                        <button className="btn btn-primary">Copy</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShortenLink;

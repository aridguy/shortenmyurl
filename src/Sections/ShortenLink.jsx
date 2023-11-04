import React from "react";
import "../Styles.css";

const ShortenLink = () => {
  return (
    <div>
      <section className="shortenlink mt-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="shorten-bg">
                <div className="d-flex gap-3">
                    <input width='' type="url" placeholder="shorten a link here " className="w-80 form-control text-danger linkShortner" />
                    <button className="btn btn-secondary">Shorten it!</button>
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

import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-dark text-secondary px-2 py-2 text-center">
        <div className="py-2">
          <h1 className="display-5 fw-bold text-white">Here Is a Book Cheat Store</h1>
          <div className="col-lg-7 mx-auto">
            <p className="fs-5 mb-4">
              "You have more than you think you have. You can do more than you
              think you can. You alone are responsible to use the intelligence,
              talents, abilities and gifts God has given you." Nancy Corbett
              Cole Edwin and Nancy Cole took the truths and experience gathered
              from over half a century of marriage and ministry together to
              write The Unique Woman. In one of Christianity's modern classics,
              the Coles furnish tools to achieve the image God holds for women.
              In the same upfront and honest style that made Edwin Louis Cole an
              internationally-known minister to men, he teamed with his wife
              Nancy, whom he called "The Loveliest Lady in the Land," to answer
              the heart's cry of women around the world who said, "Write us a
              book!"
            </p>
            <hr />
              © 2021 Copyright: <a className="text-reset fw-bold" href="#">
                BookStore.com
              </a>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center ">
              {/* <button
                type="button"
                className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold m-2"
              >
                Custom button
              </button>
              <button type="button" className="btn btn-outline-light btn-lg px-4 m-2">
                Secondary
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import FellowsComment from "./FellowsComments";

function ProfilePage() {
  const Gender = "Male";
  const Branch = "Marines";
  const Rank = " Officer ";
  const Unit = "401st";
  const ProfilePicture =
    "https://media.istockphoto.com/id/162662924/photo/welcome-to-his-house-of-pain.jpg?s=1024x1024&w=is&k=20&c=GC_iOPXruE79qVgO6Ba3-pkgq_zx4oafge0seXdjhkU=";

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
          <div className="card border-0 shadow">
            <img src={ProfilePicture} alt="..." />
            <div className="card-body p-1-9 p-xl-5">
              <div className="mb-4">
                <h3 className="h4 mb-0">John Doe</h3>
              </div>
              <ul className="list-unstyled mb-4">
                <li className="mb-3">
                  <a href="#!">
                    <i className="far fa-envelope display-25 me-3 text-secondary"></i>
                    JdoeStrongBad@gmail
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#!">
                    <i className="fas fa-mobile-alt display-25 me-3 text-secondary"></i>
                    (818) 845-1059
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>
                    205 Main Street, USA
                  </a>
                </li>
              </ul>
              <ul className="social-icon-style2 ps-0">
                <li>{Gender}</li>
                <li>{Branch}</li>
                <li>{Unit}</li>
                <li>{Rank}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="ps-lg-1-6 ps-xl-5">
            <div className="mb-5 wow fadeIn">
              <div className="text-start mb-1-6 wow fadeIn">
                <h2 className="h1 mb-0 text-primary">#About Me</h2>
              </div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
              <p className="mb-0">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
            </div>
            {/* <div className="mb-5 wow fadeIn">
              <div className="text-start mb-1-6 wow fadeIn">
                <h2 className="mb-0 text-primary">#Education</h2>
              </div>
              <div className="row mt-n4">
                <div className="col-sm-6 col-xl-4 mt-4">
                  <div className="card text-center border-0 rounded-3">
                    <div className="card-body">
                      <i className="ti-bookmark-alt icon-box medium rounded-3 mb-4"></i>
                      <h3 className="h5 mb-3">Education</h3>
                      <p className="mb-0">
                        University of defgtion, fecat complete ME of synage
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-4 mt-4">
                  <div className="card text-center border-0 rounded-3">
                    <div className="card-body">
                      <i className="ti-pencil-alt icon-box medium rounded-3 mb-4"></i>
                      <h3 className="h5 mb-3">Career Start</h3>
                      <p className="mb-0">
                        After complete engineer join HU Signage Ltd as a project
                        manager
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-4 mt-4">
                  <div className="card text-center border-0 rounded-3">
                    <div className="card-body">
                      <i className="ti-medall-alt icon-box medium rounded-3 mb-4"></i>
                      <h3 className="h5 mb-3">Experience</h3>
                      <p className="mb-0">
                        About 20 years of experience and professional in signage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="wow fadeIn border border-danger">
              <div className="text-start mb-1-6 wow fadeIn">
                <h2 className="mb-0 text-primary">Fellows comments</h2>
              </div>
              <FellowsComment />

              <div className="progress-style1">
                <div className="progress-text">
                  <div className="row">
                    <div className="col-6 fw-bold">Average feeling</div>
                    <div className="col-6 text-end">70%</div>
                  </div>
                </div>
                <div className="custom-progress progress rounded-3 mb-4">
                  <div
                    className="animated custom-bar progress-bar slideInLeft"
                    style={{ width: "70%" }}
                    aria-valuemax="100"
                    aria-valuemin="0"
                    aria-valuenow="10"
                    role="progressbar"
                  ></div>
                </div>
                <div className="progress-text">
                  <div className="row">
                    <div className="col-6 fw-bold">
                      Affrimation rating average
                    </div>
                    <div className="col-6 text-end">90%</div>
                  </div>
                </div>
                <div className="custom-progress progress rounded-3 mb-4">
                  <div
                    className="animated custom-bar progress-bar bg-secondary slideInLeft"
                    style={{ width: "90%" }}
                    aria-valuemax="100"
                    aria-valuemin="0"
                    aria-valuenow="70"
                    role="progressbar"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

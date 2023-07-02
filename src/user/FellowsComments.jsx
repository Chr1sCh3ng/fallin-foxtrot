import React from "react";

const FellowsComment = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          {" "}
          <p className="mb-4">
            <h5> Rasean 07/01/23</h5>
            John Doe is thriving, maintaining an active lifestyle. Recently, we
            caught up over a steaming cup of coffee, reminiscing about his
            remarkable experiences during his tenure in the Air Force.
          </p>
        </div>
        <div className="carousel-item">
          {" "}
          <p className="mb-4">
            <h5> Chris 07/10/23</h5>
            John and I had a breakfast meeting to discuss his recent layoff,
            diving into the realm of alternative career paths. We engaged in a
            deep conversation, setting ambitious goals to navigate this new
            chapter with resilience and determination.
          </p>
        </div>
        <div className="carousel-item">
          {" "}
          <p className="mb-4">
            <h5> Dannie 07/15/23</h5>In a time when life seems challenging, I
            found solace in connecting with John, who has endured his fair share
            of hardships. With great generosity, he shared his personal journey,
            offering invaluable insights to inspire and uplift me on my own path
            of self-improvement.
          </p>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default FellowsComment;

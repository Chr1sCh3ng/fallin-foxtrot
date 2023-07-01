import React from "react";

function Landing() {
  const bgZero =
    " https://uploads-ssl.webflow.com/61f04c0cad782c759b55a198/61f04c0cad782c27ec55a72b_veteran_mental_health.jpeg";
  return (
    <>
      <div
        className="col bg-success vh-100 text-white"
        style={{
          backgroundImage: `url(${bgZero})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1>Foxtrot is for Friend</h1>
        <p>
          *need better wording* connect with a vast network of your veteran
          peers.
        </p>
        <p>
          Support connect survive, we are counting on you to make a differnce.
        </p>
        <p> Reach out for support, support when they reach out.</p>
      </div>
    </>
  );
}

export default Landing;

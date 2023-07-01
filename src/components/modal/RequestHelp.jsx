import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const RequestHelp = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="mx-auto">
        <button className="btn btn-danger py-2" onClick={toggle}>
          REQUEST HELP
        </button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="fs-5" toggle={toggle}>
          Requesting help
        </ModalHeader>

        <div className="mx-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="options"
              value="help"
              id="helpOption"
              checked={selectedOption === "help"}
              onChange={handleOptionChange}
            />
            <label className="form-check-label" htmlFor="helpOption">
              I need help immediately
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="options"
              value="talk"
              id="talkOption"
              checked={selectedOption === "talk"}
              onChange={handleOptionChange}
            />
            <label className="form-check-label" htmlFor="talkOption">
              I just need to talk
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="options"
              value="schedule"
              id="scheduleOption"
              checked={selectedOption === "schedule"}
              onChange={handleOptionChange}
            />
            <label className="form-check-label" htmlFor="scheduleOption">
              Schedule a talk with buddy
            </label>
          </div>
          <div>
            <button> submit</button>
          </div>
        </div>

        <ModalBody></ModalBody>
      </Modal>
    </>
  );
};

export default RequestHelp;

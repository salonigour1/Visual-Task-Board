import React, { useEffect, useState } from "react";
import "./Form.css";
import { RxCross1 } from "react-icons/rx";
import moment from "moment";
import { MdDateRange } from "react-icons/md";
import { HiSortDescending } from "react-icons/hi";
import { TfiText } from "react-icons/tfi";
import { useGobalData } from "../context";
function UpdateForm({ setOpenEditable, openEditable }) {
  const {
    ReturnId,
    handleAddCard,
    handleUpdateCard,
    handleDeleteCard,
    boards,
  } = useGobalData();

  const [currentValues, setCurrentValues] = useState({
    cid: "",
    subject: "",
    description: "",
    timeStamp: "",
    urgency: "",
  });

  useEffect(() => {
    if (!openEditable.cardId) return;
    console.log(boards);
    const arr = boards
      .filter((curr) => openEditable.boardId === curr.bid)[0]
      .cards.filter((curr) => openEditable.cardId === curr.cid)[0];
    // setCurrentValues(arr);
  }, [openEditable]);

  const handleChange = (name, value) => {
    // console.log(name, value);
    setCurrentValues({
      ...currentValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpdateCard(openEditable.boardId, openEditable.cardId, currentValues);
    setCurrentValues({
      cid: "",
      subject: "",
      description: "",
      timeStamp: "",
      urgency: "",
    });

    setOpenEditable({ state: false, boardId: "", cardId: "" });
  };
  return (
    <div className={openEditable.state ? "check overlay" : "check"}>
      <div className={`add_form ${openEditable.state ? "visible" : ""}`}>
        <div className="heading">Update Task</div>
        <hr></hr>
        <form onSubmit={handleSubmit}>
          <div className="cross">
            <RxCross1
              size="25px"
              onClick={() => setOpenEditable({ state: false, boardId: "" })}
            />
          </div>
          <div>
            <TfiText size="20px" />
            &nbsp;<label>Title</label>
            <br></br>
            <input
              value={currentValues.subject || ""}
              name="subject"
              type="text"
              className="titleField"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>
          <div>
            <HiSortDescending />
            &nbsp;<label>Description:</label>
            <br />
            <textarea
              value={currentValues.description}
              name="description"
              className="descField"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>
          <div className="bottomContainer">
            <div>
              <label>Urgency:</label>

              <select
                value={currentValues.urgency}
                name="urgency"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <div>
              <MdDateRange />
              &nbsp;<label>Date</label>
              <span className="date">{currentValues.timeStamp}</span>
            </div>
          </div>
          <div className="buttonContainer_Update">
            <button className="add_btn" type="submit">
              Update
            </button>
            <button
              className="add_btn"
              type="button"
              onClick={() => {
                handleDeleteCard(openEditable.boardId, openEditable.cardId);
                setOpenEditable({ state: false, boardId: "", cardId: "" });
              }}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateForm;

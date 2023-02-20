import React from "react";
import "./Form.css";
import { RxCross1 } from "react-icons/rx";
import moment from "moment";
import { MdDateRange } from "react-icons/md";
import { HiSortDescending } from "react-icons/hi";
import { TfiText } from "react-icons/tfi";
function Form({ open, setOpen }) {
  console.log(open.state);
  //
  return (
    <div className={open.state ? "check overlay" : "check"}>
      <div className={`add_form ${open.state ? "visible" : ""}`}>
        <div className="heading">Create New Task</div>
        <hr></hr>
        <form>
          <div className="cross">
            <RxCross1
              size="25px"
              onClick={() => setOpen({ state: false, boardId: "" })}
            />
          </div>
          <div>
            <TfiText size="20px" />
            &nbsp; <label>Title</label>
            <br></br>
            <input type="text" className="titleField" />
          </div>
          <div>
            <HiSortDescending />
            &nbsp;<label>Description:</label>
            <br />
            <textarea className="descField" />
          </div>
          <div className="bottomContainer">
            <div>
              <label>Urgency:</label>

              <select>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <div>
              <MdDateRange />
              <label>Date</label>
              <span className="date">
                {moment().subtract(10, "days").calendar()}
              </span>
            </div>
          </div>
          <button className="add_btn" type="submit">
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;

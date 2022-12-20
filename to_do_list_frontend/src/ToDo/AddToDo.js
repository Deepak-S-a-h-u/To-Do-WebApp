import axios from "axios";
import React, { useEffect, useState } from "react";

function AddToDo() {
  const [addToDo, SetAddToDo] = useState({});
  const ChangeHandler = (event) => {
    SetAddToDo({ ...addToDo, [event.target.name]: event.target.value });
    console.log(addToDo);
  };
  const saveClick = () => {
    //debugger;
    axios
      .post("https://localhost:7180/api/ToDoList/", addToDo)
      .then(() => {
        alert("Data Saved");
      })
      .catch((e) => {
        alert("api DID not Working Properly");
      });
  };
  return (
    <div>
      <form>
        <div>
          <div>
            <div>
              <div>
                <div className="">
                  <h2>New To Do</h2>
                </div>
              </div>
              {/* body */}
              <form>
              <div className="modal-body">
                <div className="form-group row">
                  <label for="txtName" className="col-sm-4">
                    Title
                  </label>
                  <div className="col-sm-8">
                    <input
                      onChange={ChangeHandler}
                      className="form-control"
                      name="title"
                      type="text"
                      id="txtName"
                      placeholder="Title"
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="txtAddress" className="col-sm-4">
                    Details
                  </label>
                  <div className="col-sm-8">
                    <textarea
                      onChange={ChangeHandler}
                      className="form-control"
                      name="details"
                      id="txtAddress"
                      placeholder="Detail"
                    ></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="txtSalary" className="col-sm-4">
                    Status
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="checkbox"
                      name="status"
                      value="true"
                      defaultValue={false}
                      onClick={ChangeHandler}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="modal-footer col-12">
                <button className="btn btn-success col-5" onClick={saveClick}>
                  Save
                </button>
                <button className="btn btn-danger col-6">Cancel</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;

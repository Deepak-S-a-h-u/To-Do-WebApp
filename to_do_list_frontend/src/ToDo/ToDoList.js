import React from "react";
import AddToDo from "./AddToDo";
import RenderToDo from "./RenderToDo";

function ToDoList() {
  function addToDo()
  {
    <AddToDo />
  }
  return (
    <div>
      <div className="row m-3">
        <div className="col-10 align-text-left">
          <h2 className="text-primary text-left">To Do List</h2>
        </div>
       
      </div>
      <div>
      <AddToDo/>
      <RenderToDo />
      <form>
        <div className="modal" id="newModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* header */}
              <div className="modal-header">
                <div className="modal-title">New Employee</div>
                <button className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              {/* body */}
              <div className="modal-body">
                <div className="form-group row">
                  <label for="txtName" className="col-sm-4">
                    Name
                  </label>
                  <div className="col-sm-8">
                    <input
                      // onChange={ChangeHandler}
                      className="form-control"
                      name="name"
                      type="text"
                      id="txtName"
                      placeholder="Employee Name"
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="txtAddress" className="col-sm-4">
                    Address
                  </label>
                  <div className="col-sm-8">
                    <input
                      // onChange={ChangeHandler}
                      className="form-control"
                      name="address"
                      type="text"
                      id="txtAddress"
                      placeholder="Employee Address"
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="txtSalary" className="col-sm-4">
                    Salary
                  </label>
                  <div className="col-sm-8">
                    <input
                      // onChange={ChangeHandler}
                      className="form-control"
                      name="salary"
                      type="text"
                      id="txtSalary"
                      placeholder="Employee Salary"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-success"
                  // onClick={saveClick}
                  data-dismiss="modal"
                >
                  Save
                </button>
                <button className="btn btn-danger">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
      <div>
        
      </div>

      <h1>running</h1>
    
    </div>
  );
}

export default ToDoList;

import React from "react";
import RenderToDo from "./RenderToDo";

function ToDoList() {

    
      
      

  return (
    <div>
      <div className="row m-3">
        <div className="col-10 align-text-left">
          <h2 className="text-primary text-left">To Do List</h2>
        </div>
        <div className="col-2 p-3">
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#newModal"
          >
            New To Do
          </button>
        </div>
      </div>
      <div>
      <RenderToDo />
      </div>
      <h1>running</h1>
    
    </div>
  );
}

export default ToDoList;

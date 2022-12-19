import axios from 'axios';
import React, { useEffect, useState } from 'react'
import StatusButton from './StatusButton';

function RenderToDo() {
    const[ToDoList,SetToDoList]=useState();

    useEffect(() =>{
        getList()
      },[])
    function getList(){
        axios.get("https://localhost:7180/api/ToDoList").then((d)=>{
            if(d.data)
            {
              SetToDoList(d.data); 
            }
          }).catch((e)=>{
            alert('No data Found')
          })
        };
    
        function RenderToDoList()
        {
            var todo=[];
            ToDoList?.map((item)=>{
                console.log(item)
                todo.push(
                    <tr>
                        <td>{item.title}</td>
                        <td>{item.details}</td>
                        <td>
                            <div>{item.status==true?(<button className='btn btn-success'>Pending</button>):(<button className='btn  text-primary bg-danger'>Done</button>)}</div>
                        </td>
                    </tr>
                )
            })
            return todo;
        }
        
  return (
    <div>
        <div className='col-10 offset-1'>
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Details</th>
            {/* <th></th> */}
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
            {RenderToDoList()}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default RenderToDo
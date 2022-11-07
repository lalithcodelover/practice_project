import React, { useState } from "react";
import './AddUser.css'
import Errormsg from "./Errormsg";

function AddUser(props) {
const [enteredUsername,setUsername] = useState('')
const [enteredAge,setAge] = useState('')
const [error,setError] = useState(false)

  const addUsername =(e) => {
setUsername(e.target.value)
  }

  const addAge =(e) =>{
setAge(e.target.value)
  }

  const submitUserHandler = (event)=>{
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0 || enteredAge < 1){
      setError(true)
      return;
    }
    props.onAddUser(enteredUsername,enteredAge)
    setUsername('')
    setAge('')
  }
  const ErrorHandler = () =>{
    setError(false)
  }
  return (
    <div>
     {error && <Errormsg onConfirm={ErrorHandler}/> }
    <form className="form" onSubmit={submitUserHandler}>
      <div>
        <label className="form-label" htmlFor="username">Username</label>
        <input className="form-input" id="username" type="text" value={enteredUsername} onChange={addUsername}/>
      </div>
      <div>
        <label className="form-label" htmlFor="age">Age</label>
        <input className="form-input" id="age" type="number" value={enteredAge} onChange={addAge}/>
      </div>
      <button type="submit">Add User</button>
    </form>
    </div>
  );
}

export default AddUser;

import React, { useState, useCallback } from "react";


// Todo - accept a prop called onSave as a prop of a component
// onClick of button - call that prop with name and id, set name and id to default values

export default function newStudent(props) {
  const [name, setName] = useState("");
  const [emailId, setemailId] = useState("");


  const nameChangeHandler = useCallback(e => setName(e.target.value), []);
  const idChangeHandler = useCallback(e => setemailId(e.target.value), []);



  return (
    <div className="name">
      <name onClick = {handleClick}/>
      <h2>New Student</h2>
      <div>
        <label>name: </label>
        <input value={name} onChange={nameChangeHandler} />
      </div>
      <div>
        <label>id: </label>
        <input value={emailId} onChange={idChangeHandler} />
      </div>
      <br />
      <button onClick={nameChangeHandler} >Save</button>
    </div>
  );
}

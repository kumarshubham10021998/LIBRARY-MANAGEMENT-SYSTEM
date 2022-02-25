import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUsers = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        
        bookname: "",
        bookauthor: "",  
        booklan: "",
       
      });
      const {bookname,bookauthor,booklan} = user
      const onInputChange = e=>{
          setUser({...user,[e.target.name]:e.target.value})
      }; 
      const onSubmit= async e => {
        e.preventDefault();
          await axios.post("/books/", user);
          history.push("/home");
      }
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          
          <div className="form-group my-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Bookname"
              name="bookname"
             value={bookname}
             onChange={e =>onInputChange(e)}
            />
          </div>
          <div className="form-group my-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Author"
              name="bookauthor"
              value={bookauthor}
              onChange={e =>onInputChange(e)}
              
            />
          </div>
          <div className="form-group my-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter language"
              name="booklan"
              value= {booklan}
              onChange={e =>onInputChange(e)}
             
            />
          </div>
          
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
      </div>
  )
}

export default AddUsers

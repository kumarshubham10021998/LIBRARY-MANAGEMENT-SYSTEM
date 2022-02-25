import React, { useState , useEffect} from "react";
import axios from 'axios'
import { Link ,useParams } from "react-router-dom";


const User = () => {
    const [user, setUser] = useState({
        
        bookname: "",
        bookauthor: "",  
        booklan: "",
       
      });
      
      const {id} =useParams();
      useEffect(()=>{
          loadUsers()
      },[])
      const loadUsers = async () => {
        const res = await axios.get(`/books/ ${id}`);
        setUser(res.data);
    };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/home">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">bookname: {user.bookname}</li>
        <li className="list-group-item">bookauthor: {user.bookauthor}</li>
        <li className="list-group-item">booklan: {user.booklan}</li>
        
      </ul>
    </div>
  )
}

export default User

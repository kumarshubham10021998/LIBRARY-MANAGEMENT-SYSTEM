import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";





const Home = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("/books");
 
    setUsers(result.data);
  };
const deleteUser = async id=>{ 
await axios.delete(`/books/${id}`)
loadUsers();
}
  
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow ">
          <thead className="thead-dark">
            <tr>
            <th scope="col">id</th>
              <th scope="col">Book Name</th>
              <th scope="col">Book Author</th>
              <th scope="col">Book Language</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((Books, index) => (
              <tr key={Books.id}>
                <th users="row">{index + 1}</th>
                
                
                <td>{Books.bookname}</td>
                <td>{Books.bookauthor}</td>
                <td>{Books.booklan}</td>
                <td>
                  
                  <Link className="btn btn-primary mr-2 ms-2" to={`/books/ ${Books.id}`}> View</Link>
                 

                  
                  <Link className="btn btn-outline-primary mr-2 mx-2" to = {`component/Edit/ ${Books.id}`}>Edit</Link>
                  

                  
                  <Link className="btn btn-danger mx-2" onClick={()=>deleteUser(Books.id)} to="/"> Delete</Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
}

export default Home

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
    console.log(result)
    setUsers(result.data.reverse());
  };

  // const deleteUser = async id => {
  //   await axios.delete(`http://65.2.132.62:8080/Books/`);
  //   loadUsers();
  // };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow ">
          <thead className="thead-dark">
            <tr>
            <th scope="col">#</th>
              <th scope="col">id</th>
              <th scope="col">Book Name</th>
              <th scope="col">Book Author</th>
              <th scope="col">Book Language</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((Books, index) => (
              <tr>
                <th users="row">{index + 1}</th>
                
                <td>{Books.id}</td>
                <td>{Books.bookname}</td>
                <td>{Books.bookauthor}</td>
                <td>{Books.booklan}</td>
                <td>
                  <Link class="btn btn-primary mr-2 ms-2"> View</Link>
                  <Link class="btn btn-outline-primary mr-2 mx-2" >Edit</Link>
                  <Link class="btn btn-danger mx-2"> Delete</Link>
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

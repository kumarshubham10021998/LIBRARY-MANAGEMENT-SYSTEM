import React, { useState , useEffect} from "react";
import axios from 'axios'
import { useHistory ,useParams } from "react-router-dom";



// => In our React app sometimes we want to access the parameters of the current route in this case useParams hook comes into action. The react-router-dom package has useParams hooks that let you access the parameters of the current route.





const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        
        bookname: "",
        bookauthor: "",  
        booklan: "",
       
      });
      const {bookname,bookauthor,booklan} = user;
      const onInputChange = e=>{
          setUser({...user,[e.target.name]:e.target.value})
      }; 
      useEffect(()=> {
          loadUsers();
      }, []);

      const onSubmit= async e => {
        e.preventDefault();
          await axios.put(`/books/${id}`,user);
          history.push("/home");
      }
      const loadUsers = async () => {
          const result = await axios.get(`/books/${id}`);
          setUser(result.data);
      };
  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Edit  User</h2>
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
        
        <button className="btn btn-warning btn-block">Update User </button>
      </form>
    </div>
    </div>
  )
}

export default EditUser

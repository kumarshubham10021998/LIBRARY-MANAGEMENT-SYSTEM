import React  from "react";

import Contact from "./component/Contact";

import Home from "./component/Home";

import Navbar from './component/Navbar';
import About from "./component/About";
import {
  BrowserRouter as Router,
  Route,
  Switch,
 
} from "react-router-dom";
import AddUsers from "./component/AddUsers";
import EditUser from "./component/EditUser";
import User from "./component/User";
// import Library from "./component/Login";
// function setToken(userToken) {
// }

// function getToken() {
// }

function App(props) {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Library setToken={setToken} />
  // }
  return (
    
      <div>
        <Router>
        <Navbar />

        <Switch>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/about"><About /></Route>
           <Route exact path="/contact"><Contact /></Route>
           <Route exact path="/component/Add"><AddUsers/></Route>
           <Route exact path="/component/Edit/:id"><EditUser /></Route>
           <Route exact path="/books/:id"><User/></Route>
           {/* <Route exact path="/login"><Library /></Route> */}
        </Switch>
        </Router>
      </div>
    
  );
}

export default App;
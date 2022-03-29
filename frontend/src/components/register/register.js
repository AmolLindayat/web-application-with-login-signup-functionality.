import "./register.css";
import { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom"
const Register = () => {

  const history = useHistory()

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
    ...user,
      [name]: value,
    });
  }
  const Register = () => {
    const { name, email, password, reEnterPassword } = user
    if (name && email && password && password === reEnterPassword) {
      // alert("Successful")
      axios.post("http://localhost:8000/register", user)
        .then(res => { // promisese
          alert(res.data.message)
          history.push("/login")
        }) 
    
    } else {
      alert("Invalid input")
    }
    
  } 
 

  return (
    <div className="register">
      {console.log("User", user)}
      <h1>Register</h1>
      <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange}></input>
      <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
      <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
      <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder=" Re-enter your password" onChange={handleChange}></input>
      <div className="button" onClick={Register}>Register</div>
      <div>or</div>
 <div className="button" onClick={() => history.push("/login")}>Login</div>    </div>
  );
};
export default Register;

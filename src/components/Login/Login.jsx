import React, { useEffect, useState } from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const initialLoad={
    email:'',
    password:'',
  }
  const [details, setUserDetails] = useState(initialLoad)
  
  const handleSubmit =(event)=>{
    event.preventDefault();
    const oldItems = JSON.parse(localStorage.getItem('userList')) || [];
    const userData = oldItems.find((oldItem)=>{ return oldItem.email===details.email})
    if (userData!= undefined){
      console.log("Current userData", userData);
      if(userData.password01 === details.password){
        sessionStorage.setItem('userDetail', JSON.stringify(userData));
        navigate(`/dashboard`)
      }
    }else{
      alert("No user exists")
    }
    setUserDetails(initialLoad)

  }
  return (
    <div className="container mt-2">
    <h1 className='d-flex  justify-content-center'>Login Page</h1>
      <form  className="container m-4 p-2" onSubmit={handleSubmit} >
        <div className="mb-1">
          <label className="form-label" >Email</label>
          <input 
           className="form-control"
           type="text"
           name="email"
           placeholder="Email"
           value={details.email}
           onChange={(e) => setUserDetails((pre) => ({ ...pre, [e.target.name]: e.target.value }))}
          />
        </div>
        <div className="mb-1">
          <label className="form-label">Password</label>
          <input 
           className="form-control"
           type="password"
           name="password"
           placeholder="Password"
           value={details.password}
           onChange={(e) => setUserDetails((pre) => ({ ...pre, [e.target.name]: e.target.value }))}
          />
        </div>
        <div className="mb-1">
          <input type="submit" className="btn btn-primary mt-3"/>
        </div>
        <div className="float-end">
        <Link to="/registration">Link to Registration Page</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
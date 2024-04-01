import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate()
  const initialLoad={
    userName:'',
    email:'',
    password01:'',
    password02:'',
  }
  const [details, setUserDetails] = useState(initialLoad)

  const handelSubmit=(event)=>{
    event.preventDefault();
    if(details.password01===details.password02){
      const oldItems = JSON.parse(localStorage.getItem('userList')) || [];
      const isExist=oldItems.find(data=>details.email==data.email)
      if(!isExist){
        oldItems.push(details)
        localStorage.setItem('userList', JSON.stringify(oldItems));
        setUserDetails(initialLoad)
        alert(`You have successfully registered with ${details.email}`)
        navigate('/')
      }else{
        alert("Email already exists")
      }
    }else{
      alert("Password should  be same")

    }
  }
  return (
    <div  className="container mt-2" >
      <h1 className='d-flex  justify-content-center'>Registration Page</h1>
      <form   className="container m-4 p-2" onSubmit={handelSubmit}>
        <div className="mb-1" >
          <label className="form-label" >Username</label>
          <input
           className="form-control"
           type="text"
           name="userName"
           placeholder="Name"
           value={details.userName}
           onChange={(e) => setUserDetails((pre) => ({ ...pre, [e.target.name]: e.target.value }))}
            />
        </div>
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
          <label className="form-label" >Password</label>
          <input 
          className="form-control"
           type="password"
           name="password01"
           placeholder="Password"
           value={details.password01}
           onChange={(e) => setUserDetails((pre) => ({ ...pre, [e.target.name]: e.target.value }))}
            />
        </div>
        <div className="mb-1">
          <label  className="form-label" >Re-Type Password</label>
          <input 
          className="form-control"
          type="password"
          name="password02"
          placeholder="Re-Type Password"
          value={details.password02}
          onChange={(e) => setUserDetails((pre) => ({ ...pre, [e.target.name]: e.target.value }))}
           />
        </div>
        <div className="mb-1">
          <input type="submit" className="btn btn-primary mt-3"/>
        </div>
        <div className="float-end" >
        <Link to="/"> Link to Login Page</Link>
        </div>
      </form>
    </div>
  )
}

export default Registration
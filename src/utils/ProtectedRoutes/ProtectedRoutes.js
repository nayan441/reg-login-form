import { Navigate, Outlet } from 'react-router-dom'
export const PrivateRoutes = () => {
console.log("kkkkkkkkkkkkkkkkkkkk");
let auth = JSON.parse(sessionStorage.getItem('userDetail'))??false
return (
    auth ? <Outlet/> : <Navigate to='/'/>
  )
}
import { Navigate, Outlet } from 'react-router-dom'
export const PublicRoutes = () => {
console.log("uuuuuuuuuuuuuuuuuuuuuu");
let auth = JSON.parse(sessionStorage.getItem('userDetail'))??false
return (
    !auth ? <Outlet/> : <Navigate to='/dashboard'/>
  )
}
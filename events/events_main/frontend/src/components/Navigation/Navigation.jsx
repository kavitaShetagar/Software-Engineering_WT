import {Link} from "react-router-dom"
import "./Navigation.css"
const Navigation = ()=>{
  return (
    <nav>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/find-events">Find Clubs</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/contact">Contact Clubs</Link>
            </li>
        </ul>
    </nav>
  )
}
export default Navigation;
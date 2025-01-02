import EventList from "../pages/EventList/EventList";
import FilterEvents from "../pages/FilterEvents/FilterEvents";
import EventDetail from "../pages/EventDetails/EventDetails";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationForm from "../pages/RegistrationForm/RegistrationForm";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import RoleSelectionPage from "../pages/RoleSelection/RoleSelectionPage";
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import AddClub from './pages/AddClub/AddClub';
import DeleteClub from './pages/DeleteClub/DeleteClub';
import DisplayStudents from './pages/DisplayStudents/DisplayStudents';




export const routes = [
  { path: '/', element: <Home /> },
  { path: '/role-selection', element: <RoleSelectionPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/admin-login', element: <AdminLogin /> }, 
  { path:'/admin-dashboard',element:<AdminDashboard/>},
  { path:'/add-club',element:<AddClub/>},
  { path:'/delete-club',element:<DeleteClub/>},
  { path: '/event-list', element: <EventList /> },
  { path: '/find-events', element: <FilterEvents /> },
  { path: '/events/:id', element: <EventDetail /> },
  { path: '/register', element: <RegistrationForm /> },
  { path: '/display-students', element: <DisplayStudents /> } ,
  { path: '/contact', element: <Contact /> }
];

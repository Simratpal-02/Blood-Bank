import { useContext } from "react"
import { Route,Routes,useNavigate } from "react-router-dom"
import { UserContext } from "../../context/user.context"
import AdminNavigation from "./admin-navigation/admin-navigation.router"
import BloodRequstedRoute from "./blood-requested/blood-requested.route"
import Homepage from "./homepage/homepage.route"
import Users from "./users/users.router"

const Admin = () =>{

    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    if(!user.isAdmin){
        navigate('/');
    }

    return(
        <Routes>
            <Route path="/" element={<AdminNavigation/>}>
                <Route index element={<Homepage/>} />
                <Route path="/Users" element={<Users/>}/>
                <Route path="/Blood Requested" element={<BloodRequstedRoute/>}/>
            </Route>
        </Routes>
    )
}

export default Admin
import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/user.context"
import BloodDonater from "../../../components/blood-donater/blood-donater.component";

const Users = ()=>{
    const { user,users } = useContext(UserContext);
    const navigate = useNavigate();
    const bloodRequestsArray = JSON.parse(window.localStorage.getItem('bloodRequestArray'));
    console.log(bloodRequestsArray)
    if(!user.admin){
        navigate('/');
    }
    return(
        <div>
            <h1>Users:-</h1>
            {
                bloodRequestsArray.map((u,idx) => <BloodDonater key={idx} nameOfDoner={u.email} />)
            }
        </div>
    )
}

export default Users
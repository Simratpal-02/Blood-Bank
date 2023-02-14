import { useContext } from "react"
import { UserContext } from "../../context/user.context";
import { BloodDonaterProvider } from "../../context/bloodDonaters.context"
import BloodDonater from "../../components/blood-donater/blood-donater.component";
import './info.css'

const Info = () =>{
    const { bloodDonated,bloodRequests } = useContext(BloodDonaterProvider);
    const { user } = useContext(UserContext);
    console.log(bloodDonated);
    return(
        <div className="info">
            <h1>Blood Donated:-</h1>
            {
                bloodDonated.map((blood,idx)=>{
                    console.log(blood)
                    if(blood.email===user.email){
                        return(
                                <div className="space">
                                    <BloodDonater key={idx} quantity={blood.bloodData.quantity} location={blood.bloodData.location} city={blood.bloodData.city} State={blood.bloodData.state}/>
                                </div>
                            ) 
                    }
                })
            }
            <div className="info">
                <h1>Blood Requested:-</h1>
                {
                    bloodRequests.map((blood,idx)=>{
                        console.log(blood)
                        if(blood.email===user.email){
                            return(
                                    <div className="space">
                                        <BloodDonater key={idx} quantity={blood.quantity} location={blood.location} city={blood.city} State={blood.state}/>
                                    </div>
                                ) 
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Info
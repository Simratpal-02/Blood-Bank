import { useContext } from 'react';
import { BloodDonaterProvider } from '../../context/bloodDonaters.context';
import { UserContext } from '../../context/user.context'; 
import { bloodRequestsArray } from '../../utils/dummy';
import Button from '../buttons/Button.component';
import './blood-donater.css'

const BloodDonater = ({ quantity,nameOfDoner,location,city,State })=>{

    const { bloodRequests,setBloodRequests } = useContext(BloodDonaterProvider);
    const { user } = useContext(UserContext);

    const requestClick = ()=>{
        if(user){
            bloodRequestsArray.push({email:user.email,name:nameOfDoner,location,city,State,quantity});
            window.localStorage.setItem('bloodRequestArray',JSON.stringify(bloodRequestsArray));
            setBloodRequests([...bloodRequests,{email:user.email,name:nameOfDoner,location,city,State,quantity}]);
            console.log(bloodRequests);
        }
    }

    return(
        <div className="blood-donater">
            <div>
                <h1>{quantity} Packets Of Blood</h1>
                <p>{nameOfDoner}</p>
            </div>
            <div className='lines'>
                <div className='l1'></div>
                <div className='l2'></div>
            </div>
            <div className='get-blood-div'>
                <span>{location}, {city} {State}</span>
                {
                    nameOfDoner? (
                        <Button title={"Get Blood"} customClickEvent={requestClick} name={"red-wt-button-sm"}/>
                    ):''
                }
            </div>
        </div>
    )
}

export default BloodDonater;
import { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user.context'
import { BloodDonaterProvider } from '../../context/bloodDonaters.context';
import Button from '../../components/buttons/Button.component';
import Input from '../../components/input/input.component';
import './donate.css'

const Donate = ()=>{
    const [nameOfDoner,setName] = useState();
    const [city,setCity] = useState('');
    const [location,setLocation] = useState('');
    const [state,setState] = useState('');
    const [quantity,setPackets] = useState('');
    const [bloodGroup,setBloodGroup] = useState('');
    const { user } = useContext(UserContext);
    const { addBlood,data,bloodDonated } = useContext(BloodDonaterProvider);
    const navigate = useNavigate();
    const bloodData = { nameOfDoner,city,location,state,quantity:Number(quantity),bloodGroup,idx:data.length+1 };
    const donateBloodEvent = (e) =>{
        console.log(bloodData)
        addBlood(bloodData,user.email);
        console.log(bloodDonated);
    }

    if(!(user)){
        setTimeout(() => {
            navigate('/sign-up')
        }, 2500);
        return(
            <div>
                <h1>PLease Sign Up To Donate!</h1>
            </div>
        )
    }

    return (
        <div className='donate'>
            <div className='donateForm'>
                <div>
                    <div>
                        <h3>Name:-</h3>
                        <Input type={'text'} className={'input_text'} placeholder={'Enter Your Name'} setData={setName}/>
                    </div>
                    <div>
                        <h3>City:-</h3>
                        <Input type={'text'} className={'input_text'} placeholder={'Enter Your City'} setData={setCity}/>
                    </div>
                    <div>
                        <h3>Location:-</h3>
                        <Input type={'text'} className={'input_text'} placeholder={'Enter Your Location'} setData={setLocation}/>
                    </div>
                    <div>
                        <h3>State:-</h3>
                        <Input type={'text'} className={'input_text'} placeholder={'Enter Your State'} setData={setState}/>
                    </div>
                    <div>
                        <h3>Blood Group:-</h3>
                        <Input type={'text'} className={'input_text'} placeholder={'Enter Your Blood Group'} setData={setBloodGroup}/>
                    </div>
                    <div>
                        <h3>No of Packets:-</h3>
                        <Input type={'number'} className={'input_text'} placeholder={'Enter No of Packets'} setData={setPackets}/>
                    </div>
                    <div>
                        <Button name={'red-wt-button-sm'} title={'Donate'} customClickEvent={donateBloodEvent} data={bloodData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate
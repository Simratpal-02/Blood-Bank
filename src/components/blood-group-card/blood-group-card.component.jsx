import { useNavigate } from 'react-router-dom'
import './blood-group.css'
import bloodicon from '../../static/108-1088015_drop-png.png'

const BloodGroupCard = ({ bloodGroup })=>{
    const navigate = useNavigate();
    return(
            <div className='blood-group-card' onClick={()=> navigate(`/bloods/${bloodGroup}`)}>
                <div className='bg'>
                    <h1>{bloodGroup}</h1>
                    <img src={bloodicon} alt='blood.png' className='blood-icon'/>
                </div>
                <p id='bp1'>0</p>
            </div>
    )
}

export default BloodGroupCard
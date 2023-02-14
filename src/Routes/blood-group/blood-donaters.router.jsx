import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { BloodDonaterProvider } from '../../context/bloodDonaters.context'
import BloodDonater from "../../components/blood-donater/blood-donater.component"
import './blood-dontaers.css'
import Search from '../../components/search/search.component'

const BloodDonaters = () =>{
    let { id } = useParams();
    const { data } = useContext(BloodDonaterProvider);

    return(
        <div className="BloodDonaters">
            <Search/>
            {
                data.map(({ idx,quantity,nameOfDoner,bloodGroup,location,city,state })=>{
                    console.log(id,bloodGroup);
                    if(bloodGroup === id){
                        return <BloodDonater key={idx} nameOfDoner={nameOfDoner} quantity={quantity} location={location} city={city} State={state} />
                    }
                    return ''
                })
            }
        </div>
    )
}

export default BloodDonaters
import { Fragment } from 'react'
import { bloodGroups } from '../../utils/dummy'
import BloodGroupCard from '../blood-group-card/blood-group-card.component'
import FrontImage from '../frontImage/frontImage.component'
import './blood-group-container.css'

const BloodGroupContainer = () =>{
    return(
        <Fragment>
            <FrontImage title={"Bloods"}/>
            <div className="blood-groups">
                {
                    bloodGroups.map(({bloodGroup,id})=> <BloodGroupCard key={id} bloodGroup={bloodGroup}/>)
                }
            </div>
        </Fragment>
    )
}

export default BloodGroupContainer
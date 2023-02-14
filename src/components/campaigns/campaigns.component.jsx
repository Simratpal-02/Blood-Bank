import CampaignCard from '../campaign-card/campaign-card.component'
import './campaigns.css'

const Campaigns = ()=>{
    return(
        <div className='campaigns'>
            <p id='donate-now'>DONATE NOW</p>
            <h1>Popular Campaigns</h1>
            <div className='campaigns-div'>
                <CampaignCard/>
                <CampaignCard/>
                <CampaignCard/>
            </div>
        </div>
    )
}

export default Campaigns
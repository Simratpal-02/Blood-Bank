import CampaignCard from "../../components/campaign-card/campaign-card.component";
import FrontImage from "../../components/frontImage/frontImage.component";
import { dummy } from '../../utils/dummy'
import './campaigns.css'

const CampaignsRoute = ()=>{
    return(
        <div>
            <FrontImage title={"Campaigns"}/>
            <div className="campaigns-contianer">
                <div className="campaingns">
                    {
                        dummy.map(({title,img,id})=> <CampaignCard key={id} img={img} title={title}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default CampaignsRoute;
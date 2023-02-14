import Button from '../buttons/Button.component'
import './campaign-card.css'

const CampaignCard = ({ img,title })=>{
    return(
        <div className='campaign-card'>
            <div className="img-div">
                <img src={img} alt='patient.jpg'/>
            </div>
            <div className='campaign-card-cont'>
                <h2>{title}</h2>
                <p id='p-cc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius!</p>
                <div id='b-cc'>
                    <Button title={"DONATE NOW"} name={"black-wt-button-sm"}/>
                </div>
            </div>
        </div>
    )
}

export default CampaignCard
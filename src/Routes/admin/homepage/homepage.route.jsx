import FrontCompoonent from '../../../components/admin/frontComponent/front-component.component'
import imsrc from '../../../static/profile(2).png' 
import './homepage.css'
const Homepage = ()=>{
    return(
        <div className='homepage'>
            <div className='back-div'>
                <FrontCompoonent imgSrc={imsrc} title={'Users'}/>
            </div>
            <div className='back-div'>
                <FrontCompoonent imgSrc={imsrc} title={'Blood-Requested'}/>
            </div>
            <div className='back-div'>
                <FrontCompoonent imgSrc={imsrc} title={'Blood-Accepted'}/>
            </div>
            <div className='back-div'>
                <FrontCompoonent imgSrc={imsrc} title={'Messages'}/>
            </div>
        </div>
    )
}

export default Homepage
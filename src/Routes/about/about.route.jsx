import { Fragment } from 'react';
import Campaigns from '../../components/campaigns/campaigns.component';
import FrontImage from '../../components/frontImage/frontImage.component';
import Welcome from '../../components/welcome/welcome.component';
import './about.css'

const About = ()=>{
    return(
        <Fragment>
            <FrontImage title={"About Us"}/>
            <Welcome/>
            <div className='contact-us'>
                <div className='in-cont'>
                    <div id='box'>

                    </div>
                    <div>
                        <p id='b-head'>START DONATING</p>
                        <span id='b-span1'>Call Now:</span> <span id='b-span2'>8888 8888 0000</span>
                    </div>
                </div>
            </div>
            <Campaigns/>
        </Fragment>
    )
}

export default About;
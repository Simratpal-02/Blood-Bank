import { Fragment } from 'react';
import BloodCard from '../../components/blood-card/blood-card.component';
import Button from '../../components/buttons/Button.component'  
import Welcome from '../../components/welcome/welcome.component';
import './home.css'

const Home = ()=>{
    return(
        <Fragment>
            <div className='fimg-home'>
                <div id="fimg-home-content">
                    <p id="fimg-home-top">CHANGE THEIR LIFE</p>
                    <h1 id="fimg-home-title">DONATE BLOOD TO <br/>SAVE A LIFE</h1>
                    <Button title={"START DONATING"} name={"red-wt-button"}/>
                </div>
            </div>
            <div className='blood-cards'>
                <BloodCard title={"Become a Donor"} buttonTitle={"Donate"} redirect={'donate'}/>
                <BloodCard title={"Want Some Blood?"} buttonTitle={"Get Blood"} redirect={'bloods'}/>
            </div>
            <Welcome/>
        </Fragment>
    )
}

export default Home;
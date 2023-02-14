import logo from '../../static/Logo-white.png'
import Button from '../buttons/Button.component'
import './footer.css'

const Footer = ()=>{
    return(
        <div className='footer'>
            <div className='ab'>
                <div className="logo">
                    <img src={logo} alt="logo-white.png"/>
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia possimus facilis deleniti nemo obcaecati eveniet sed vero id consequuntur explicabo et odio dolorum, similique earum cumque impedit mollitia
                </p>
            </div>
            <div className='Links'>
                <div>
                    <h1>LINKS</h1>
                </div>
                <div className='lks'>
                    <div>&gt; About Us</div>
                    <div>&gt; Contact Us</div>
                    <div>&gt; Campaigns</div>
                    <div>&gt; Sign Up</div>
                </div>
            </div>
            <div className="news-letter">
                <div>
                    <h1>NEWSLETTER</h1>
                </div>
                <div>
                    <input type='text' placeholder="Email address" required className='em' /><br/>
                    <Button name={"red-wt-button-sm"} title={"SUBSCRIBE"}/>
                </div>
            </div>
        </div>
    )
}

export default Footer
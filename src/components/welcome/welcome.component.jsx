import Button from '../buttons/Button.component'
import './welcome.css'

const Welcome = ()=>{
    return(
        <div className='welcome'>
                <div className="inner-welcome-div">
                    <div className="borded-img"></div>
                    <div className="inner-welcome-message">
                        <div>
                            <p id='p-col'>HELP THE PEOPLE IN NEED</p>
                        </div>
                        <div>
                            <h1 id="h1-col">Welcome To Blood<br/>Donors Organization</h1>
                        </div>
                        <div>
                            <p id='p-col1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ipsa minus incidunt voluptatum non tempora, enim est fuga aliquid tenetur deserunt asperiores et dolor magnam ab pariatur blanditiis. Et iusto error modi minus vel est?</p>
                        </div>
                        <div className='testmon'>
                            <div>
                                <h3>Good Service</h3>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div>
                                <h3>Blood Bank</h3>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div>
                                <h3>Help The People</h3>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div>
                                <h3>Start Donation</h3>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div id="padd">
                            <Button title={"Learn More"} name={"red-wt-button"} />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Welcome
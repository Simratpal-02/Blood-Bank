import { Fragment } from 'react';
import Button from '../../components/buttons/Button.component';
import FrontImage from '../../components/frontImage/frontImage.component'
import Input from '../../components/input/input.component';
import './contact.css'

const Contact = ()=>{
    return(
        <Fragment>
            <FrontImage title={"Contact Us"}/>
            <div className='form-container'>
                <div className='form'>
                    <form>
                        <div>
                            <h1>Leave A Message</h1>
                        </div>
                        <div>
                            <Input type={"text"} placeholder={"Enter Name"} className="input_text"/>
                            <Input type={"email"} placeholder={"Enter Email"} className="leftEle" />
                        </div>
                        <div>
                            <Input type={"text"} placeholder={"Enter Subject"} className="input_text"/>
                            <Input type={"number"} placeholder={"Enter Phone"} className="leftEle"/>
                        </div>
                        <div>
                            <textarea className="input_text text-area" placeholder='Enter Message'></textarea>
                        </div>
                        <div id='btn-box'>
                            <Button title={"Send A Message"} name={"red-wt-button-sm"}/>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact;
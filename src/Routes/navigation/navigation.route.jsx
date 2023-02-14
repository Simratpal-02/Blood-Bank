import { Fragment,useContext,useEffect } from "react"
import { Link, Outlet,useLocation } from "react-router-dom"
import { UserContext } from "../../context/user.context"
import { bloods } from '../../utils/dummy';
import Button from "../../components/buttons/Button.component"
import Footer from "../../components/footer/footer.component"
import logo from '../../static/Logo.png'
import './navigation.css'

const Navigation = ()=>{
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const { user,setUser } = useContext(UserContext);

    const signOut = ()=>{
        setUser(undefined);
    }
    return(
        <Fragment>
            <div className="navigation">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo.png"/>
                    </Link>
                </div>
                <div className="navigation-links">
                    <div className="link">
                        <Link to="/">
                            Home
                        </Link>
                    </div>
                    <div className="link">
                        <Link to="/about">About Us</Link>
                    </div>
                    <div className="link">
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <div className="link">
                        <Link to="/campaigns">Campaigns</Link>
                    </div>
                    <div className="link">
                        {
                            user ? (
                                <div>
                                    <div onClick={signOut}>
                                        <Link>Sign Out</Link>
                                    </div>
                                </div>
                        
                            ) : (
                                <Link to="/sign-up">Sign Up</Link>
                            )
                        }
                    </div>
                    <div className="link">
                        {
                            user && !user.isAdmin ? (
                                <div>
                                    <div>
                                        <Link to="/info">User Info</Link>
                                    </div>
                                </div>
                        
                            ) : (
                                <div></div>
                            )
                        }
                    </div>
                    <div className="link">
                        {
                            user && user.isAdmin ? (
                                <div>
                                    <div>
                                        <Link to="/admin">Admin</Link>
                                    </div>
                                </div>
                        
                            ) : (
                                <div></div>
                            )
                        }
                    </div>
                </div>
            </div>
            <Outlet/>
            <div className="become-a-volunteer">
                <div>
                    <h1>
                        Best Way to Make A Difference<br/>In the Lives of Others 
                    </h1>
                    <Button title={"BECOME A VOLUNTEER"} name={"black-wt-button"}/>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default Navigation
import { Link } from 'react-router-dom'
import './front-component.css'

const FrontCompoonent = ({ imgSrc,title })=>{
    return(
        <Link to={`/admin/${title}`}>
            <div style={{
                width: '100%',
                height: '18rem',
                borderRadius: '9px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('${imgSrc}')`,
                backgroundPosition:'center',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                cursor:'pointer',
                border: '1px solid black',
                color:'red',
            }}>
                <h1>{title}</h1>
            </div>
        </Link>
    )
}

export default FrontCompoonent
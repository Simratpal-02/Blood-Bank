import './frontImage.css'

const FrontImage = ({title}) =>{
    return(
        <div className='fimg'>
            <h1 id='title'>{title}</h1>
            <div>
                <span>Home </span><span> &gt; </span><span>{title}</span>
            </div>
        </div>
    )
}

export default FrontImage
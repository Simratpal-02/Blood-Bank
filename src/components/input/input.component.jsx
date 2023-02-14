import './input.css'

const Input = ({type,placeholder,className,setData})=>{

    const setText = (e)=>{
        setData(e.target.value);
    }

    return(
        <input type={type} required className={`${className}`} placeholder={placeholder} onChange={setText}/>
    )
}

export default Input
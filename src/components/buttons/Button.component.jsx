import './Button.css'

const Button = ({name,title,customClickEvent,setUser,email,password,user,data})=>{
    const classNames = {
        'black-wt-button':'black-wt-button',
        'black-wt-button-sm':'black-wt-button-sm',
        'red-wt-button':'red-wt-button',
        'red-wt-button-sm':'red-wt-button-sm',
        'wt-black-button-sm':'wt-black-button-sm'
    }
    return(
        <button className={classNames[name]} onClick={customClickEvent}>
            {title}
        </button>
    )
}

export default Button
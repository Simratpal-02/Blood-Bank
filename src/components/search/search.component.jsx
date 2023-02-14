import { useContext,useEffect, useState } from 'react'
import { BloodDonaterProvider } from '../../context/bloodDonaters.context'
import { bloods } from '../../utils/dummy'
import Input from '../input/input.component'
import './search.css'

const Search = ()=>{
    const { search,setData } = useContext(BloodDonaterProvider);
    const [value,setValue] = useState('');
    
    useEffect(()=>{
        search(value);
        if(value=='') setData(bloods);
    },[value])


    console.log(value);
    return(
        <div className='search-bar'>
            <Input type={'text'} placeholder={'Search Number of Packets or place'} className={'search_comp'} setData={setValue}/>
        </div>
    )
}

export default Search
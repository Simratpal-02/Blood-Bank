import { useState,createContext } from "react";
import { bloods } from "../utils/dummy";

const addBloodData = (data,bloodData,email,setBloodDonated,bloodDonated)=>{
    const bloodDataDonated = { email,bloodData }
    setBloodDonated([...bloodDonated,bloodDataDonated])
    return [...data,bloodData]
}

const searchFilter =  (data,searchValue)=>{
    if(isNaN(searchValue)){
        return data.filter(({state}) => state.toLowerCase().includes(searchValue.toLowerCase()))
    }else if(searchValue.length !== 0){
        return data.filter(({ quantity }) => quantity === Number(searchValue));
    }else{
        return data
    }
} 

export const BloodDonaterProvider = createContext({
    data:[],
    bloodDonated:[],
    bloodRequests:[],
    bloodsAccepted:[],
    setData:()=>null,
    search: ()=>null,
    addBlood:()=>null,
    setBloodRequests:()=>null
})


export const BloodStateContext = ({ children })=>{

    const [data,setData] = useState([]);
    const [bloodDonated,setBloodDonated] = useState([]);
    const [bloodRequests,setBloodRequests] = useState([]);
    const [bloodsAccepted,setBloodAccepted] = useState([]);

    const search = (searchValue)=>{
        setData(searchFilter(data,searchValue));
    }

    const addBlood = (bloodData,email)=>{
        setData(addBloodData(data,bloodData,email,setBloodDonated,bloodDonated));
        bloods.push(bloodData);
    }

    const values = {
        data,
        search,
        addBlood,
        setData,
        bloodRequests,
        setBloodRequests,
        bloodDonated
    }

    return <BloodDonaterProvider.Provider value={values}>{children}</BloodDonaterProvider.Provider>
}
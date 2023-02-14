import { Route, Routes } from "react-router-dom"
import BloodDonaters from "../blood-group/blood-donaters.router"
import BloodGroupContainer from "../../components/blood-groups-container/blood-groups-container.component"

const BloodRouter = ()=>{
    return(
        <Routes>
            <Route index element={<BloodGroupContainer/>}/>
            <Route path="/:id" element={<BloodDonaters/>}/>
        </Routes>
    )
}

export default BloodRouter
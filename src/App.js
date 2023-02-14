import { Route,Routes } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { bloods } from './utils/dummy'
import { BloodDonaterProvider } from './context/bloodDonaters.context';
import Navigation from './Routes/navigation/navigation.route'
import Home from './Routes/home/home.route';
import Contact from './Routes/contact/contact.route';
import About from './Routes/about/about.route';
import CampaignsRoute from './Routes/campaigns/campaigns.router';
import BloodRouter from './Routes/blood/blood.router';
import SignUp from './Routes/sign-up/signUp.router';
import Donate from './Routes/donate/donate.route';
import Info from './Routes/info/info.route';
import Admin from './Routes/admin/admin'


function App() {

  const { setData,data } = useContext(BloodDonaterProvider);

  useEffect(()=>{
    setData(bloods)
  },[])
  return (
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route path='/' index element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/campaigns' element={<CampaignsRoute/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path='/bloods/*' element={<BloodRouter/>} />
          <Route path='/donate' element={<Donate/>}/>
          <Route path='/info' element={<Info/>}/>
        </Route>
        <Route path='/admin/*' element={<Admin/>} />
      </Routes>
  );
}

export default App;

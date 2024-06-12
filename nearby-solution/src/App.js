import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Map from "./pages/Map";
// import Profile from "./pages/Profile";
// import Header from "./components/Header";
import ContextAuth from "./context/context";
// import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Layout/Navbar";
import {toast} from "react-toastify";
import Footer from "./components/Layout/Footer";
import SidebarService from "./components/serviceProvider/SidebarService";
import SidebarCustomer from "./components/customer/SidebarCustomer";
import UpdateLocation from "./components/serviceProvider/updateLocation";
import SearchService from './components/customer/searchService';
import AddService from './components/serviceProvider/addService';
import MapComponent from './components/customer/MapComponent';
import MapMain from './components/customer/MapMain';
import Feedback from './pages/Feedback';

function App() {
 
  return (
    <>

      <div className="flex-col bg-gray-50">
      <Tooltip id="my-tooltip" className='h-8 w-auto' style={{zIndex:9999}}/>
            <div className="sticky">
              <Navbar />
           
            </div>
            <div className="min-h-screen">
              <div className="h-full flex">
                <div className="h-full ">
                  {/* <SidebarCustomer /> */}
                  <SidebarService />                 </div>
                <div className="w-full mt-5 p-4">   
                 <Routes > 
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} /> 
                  <Route path='/search' element={<SearchService/>}/>
                  <Route path='updateLocation' element={<UpdateLocation/>}/>
                  <Route path="/map" element={<Map />} />
                  <Route path="/addService" element={<AddService />} />
                  <Route path='/directions'   element={<MapMain/>}/>
                  <Route path='/feedback'   element={<Feedback/>}/>
                </Routes>
                </div>
              </div>
            </div>
            <div>
              <Footer />
            </div>
      </div>
    </>
  );
}

export default App;
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
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <>
      {/* <Navbar/> */}

      <div className="flex-col bg-gray-50">

        <Router>
          <ContextAuth>
            <div className="sticky">
              <Navbar />
            </div>
            <div className="min-h-screen  mt-5">

              <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/map" element={<Map />} />
                {/* <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />}/>
        </Route> */}
              </Routes>
            </div>
            <div>
<Footer/>
            </div>
          </ContextAuth>
        </Router>
      </div>
    </>
  );
}

export default App;
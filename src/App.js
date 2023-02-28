import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Clean from "./Components/Cleanenergy/Clean";
import data from "./Data.json"
import Ekaksharsuite from "./Components/Ekakshar/Ekaksharsuite";
import Footer from "./Components/Footer";
import Mobility from "./Components/Mobilityekak/Mobility";
import Navbar from "./Components/Navbar";
import Action from "./Components/Ekakmain/Action";
import Home from "./Components/Ekakmain/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Contact from "./Components/Ekakmain/Contact";
import "./Fonts/gilroy/Gilroy-Bold.ttf";
import "./Fonts/gilroy/Gilroy-Heavy.ttf";
import "./Fonts/gilroy/Gilroy-Light.ttf";
import "./Fonts/gilroy/Gilroy-Regular.ttf";
import "./Fonts/gilroy/Gilroy-Medium.ttf";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Contact/>
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/cleanenergy" element={<Clean/>}></Route>
        <Route path="/Mobility" element={<Mobility/>}></Route>
        <Route path="/Ekakshar" element={ <Ekaksharsuite data={data}/>}></Route> */}
    
      
    
    
     </Routes>
     <Action/>
     <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;

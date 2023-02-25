import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"


import './App.css';
import About from "./Components/About";
import Achievment from "./Components/Achievment";
import Carousal from "./Components/Carousal";
import Clean from "./Components/Cleanenergy/Clean";
import data from "./Data.json"
import Ekaksharsuite from "./Components/Ekakshar/Ekaksharsuite";
import Footer from "./Components/Footer";
import Impact from "./Components/Impact";
import Innovation from "./Components/Innovation";
import Mobility from "./Components/Mobilityekak/Mobility";
import Navbar from "./Components/Navbar";
import Partener from "./Components/Partener";
import Solution from "./Components/Solution";
import Success from "./Components/Success";
import Sustability from "./Components/Sustability";

function App() {
  

  return (
    <div >
      <Navbar/>
     {/* <Navbar/>
    <Carousal/>
    <About/>
   <Success/>
   <Solution/>
  <Sustability/> 
  <Innovation/> 
   <Impact/>
  <Achievment/>
  <Partener/>
  <Footer/>
   */}
   {/* <Clean/> */}
   {/* <Mobility/> */}
    <Ekaksharsuite data={data}/>
    </div>
  );
}

export default App;

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"


import './App.css';
import About from "./Components/About";
import Achievment from "./Components/Achievment";
import Carousal from "./Components/Carousal";
import Footer from "./Components/Footer";
import Impact from "./Components/Impact";
import Innovation from "./Components/Innovation";
import Navbar from "./Components/Navbar";
import Partener from "./Components/Partener";
import Solution from "./Components/Solution";
import Success from "./Components/Success";
import Sustability from "./Components/Sustability";

function App() {
  

  return (
    <div >
      <Navbar/>
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
    </div>
  );
}

export default App;

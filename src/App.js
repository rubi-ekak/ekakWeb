import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"


import './App.css';
import About from "./Components/About";
import Carousal from "./Components/Carousal";
import Navbar from "./Components/Navbar";
import Success from "./Components/Success";

function App() {
  

  return (
    <div >
      <Navbar />
     <Carousal/>
     
   <About/>
   <Success/>
    </div>
  );
}

export default App;

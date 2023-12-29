import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import { Destination } from "./component/Destination";
import Search from "./component/Search";
import Sections from "./component/Sections";
import Carosel from "./component/Carosel";
import Footer from "./component/Footer";

function App() {
  return (
    <div >
     <Navbar/>
     <Hero/>
     <Destination/>
     <Search/>
     <Sections/>
     <Carosel/>
     <Footer/> 
    </div>
  );
}

export default App;

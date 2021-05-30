import Topbar from "./component/topbar/Topbar"
import Intro from "./component/intro/Intro"
import Portfolio from "./component/portfolio/Portfolio"
import Works from "./component/works/Works"
import Testimonials from "./component/testimonials/Testimonials"
import Contact  from"./component/contact/Contact"
import "./App.scss"
import { useState } from "react"
import Menu from "./component/menu/Menu"

function App() {
  const [menuOpen,setmenuOpen] = useState(false)
  return (

  <div className="app">
    <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
    <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
    <div className="section">
      
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
    </div>
  </div>
  );
}

export default App;

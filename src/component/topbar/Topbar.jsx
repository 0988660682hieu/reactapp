
import "./Topbar.scss"
import {Person,Mail} from "@material-ui/icons"
export default function Topbar({menuOpen,setmenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Geninus.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+84 395 219 277</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>HieuPham@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">
                   <div className="hamburger" onClick={()=>setmenuOpen(!menuOpen)}>
                       <span className="line1"></span>
                       <span className="line2"></span>
                       <span className="line3"></span>
                   </div>
                </div>
            </div>
        </div>
    )
}

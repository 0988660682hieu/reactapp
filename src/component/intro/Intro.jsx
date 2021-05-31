import "./intro.scss"
import { init } from 'ityped'
import {useEffect,useRef} from "react"

export default function Intro() {

    const text = useRef();

    useEffect(() =>{
        init(text.current, {
            showCursor: true,
            backDelay:1000,
            backSpeed:60,
            strings: ['Developer', 'Designer' ] 
            })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>HieuPham</h1>
                    <h3>FreeLance <span ref={text}></span> </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

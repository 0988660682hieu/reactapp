import "./portfolio.scss"
import{useState,useEffect} from "react"
import PortfolioList from "../portfoliolist/Portfoliolist";
import {featuredPortfolio,webPortfolio,designPortfolio} from "../../data.js"

export default function Portfolio() {
    const [selected, setSelected]=useState("featured");
    const [data, setdata] = useState([]);
    const list = [
    {
        id:"featured",
        title: "Featured ",
    },

    {
        id:"webapp",
        title: "Webapp ",
    },

    {
        id: "Designer",
        title: "Designer ",
    },

];

    useEffect(()=>{

        switch (selected) {
            case "featured":
                setdata(featuredPortfolio);
                break;
            case "webapp":
                setdata(webPortfolio);
                    break;
            case "Designer":
                setdata(designPortfolio);
                    break;        
            default:
                setdata(featuredPortfolio);
                break;
        }
    },[selected])
    return (
        
        <div class="portfolio" id="portfolio">
            <h1>Portfolio</h1>
                <ul>  
                {list.map((item)=>(
                        <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected}
                        id={item.id}
                        />
                    ))}                 
                </ul>
            <div className="container">
                {data.map((d)=>
                <div className="item">
                    <img src={d.img} alt=""/>
                    <h3>{d.title}</h3>
                </div>
                )}
            </div>
        </div>
    )
}

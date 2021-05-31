import React from 'react'
import "./portfoliolist.scss"
export default function Portfoliolist({title,active,setSelected,id}) {
    return (
        <div className={active ? "portfoliolist active" : "portfoliolist"} 
            onClick={()=>setSelected(id)}
        >
            {title}
        </div>
    )
}

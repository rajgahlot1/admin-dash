import illus from '../img/download.png'
import React, { useContext } from "react";
import { ThemeContext } from '../ThemeContext';
export default function Analytics4(){
  const { theme } = useContext(ThemeContext);

    return(
      <>
        <div className="AnalyticII d-flex align-items-center flex-column justify-content-center  h-100" style={{zIndex:"1", color: theme==="dark" && "white"}}>
          <h1 className="title pt-2" style={{fontSize:"16px",fontWeight:"500",textAlign:"center"}}>New Followers</h1>
          <h2 className="value" style={{fontSize:"15px",color:"lime"}}>+ 0</h2>
          <h2 className="extra-text" style={{textAlign:"center",color:"rgb(95,95,95)",fontSize:"13px"}}>
            People are loving your content
            <br />
           ####
          </h2>
  
          <img src={illus} alt="{illus}" className="illustration" style={{height:"50%", width:"90%"}} />
          
        </div>
      </>
    )
  }
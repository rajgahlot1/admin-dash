import React,{useState} from 'react';
import infinity from './img/infinity.png'
export default function Login(){
  const [email,setemail]=useState();
  const [username,setusername]=useState();
  const [password,setpassword]=useState();
  const [newuser,setnewuser]=useState(true);
  
  return(
    <>
    <div className="Login_main DAlJu position-relative  flex-column " style={{margin:"auto",width:"400px",aspectRatio:"1",borderRadius:"10px",padding:"60px 80px"}}>
    <header className="d-flex align-items-center position-absolute " style={{top:"10px"}}>
    <span style={{fontSize:"13px",color:"rgba(255,255,255,0.534)"}}>From <i className="span_i"> Infinity Studio</i></span>
    </header>
      <img src={infinity} alt="infimity_img" className="w-100 position-relative"/>
      <h2 className="title fw-bold position-relative text-center" style={{fontSize:"25px"}}>
      Sub-Min <br/>
        Dashboard
      </h2>
      <form className="position-relative d-flex flex-column w-100" style={{gap:"15px",marginTop:"30px"}}>
      {newuser && 
        <div className="username position-relative">
      <input type="usename" id="usename" onClick={(e)=>setusername(e.target.value)}  required/>
        <label className="Lable" for="usename" htmlFor="usename" >usename</label>
      </div>}
      
      <div className="email position-relative">
      <input type="email" id="email" onClick={(e)=>setemail(e.target.value)}  required/>
        <label className="Lable" for="email" htmlFor="email" >email</label>
      </div>
      <div className="password position-relative">
      <input type="password" id="password" onClick={(e)=>setpassword(e.target.value)}   required/>  <label className="Lable" for="password" htmlFor="password" >password</label>
      </div>
        
      </form>
    </div>
    </>
  )  
}
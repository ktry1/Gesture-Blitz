import {Link} from "react-router-dom";
import React from "react";

function Greeter(props){
    
    React.useEffect(()=>{
        if (props.formdata.files!=="" && props.formdata.minutes!=="" && props.formdata.seconds!=="" && props.formdata.numOfFiles!==""
        && (parseInt(props.formdata.minutes) + parseInt(props.formdata.seconds))>0 && parseInt(props.formdata.seconds)>=0 && parseInt(props.formdata.minutes)>=0 
         && parseInt(props.formdata.numOfFiles)>0){
        
        document.getElementById("submitBtn").disabled = false;
        }
        else {
            let submitBtn = document.getElementById("submitBtn");
            if (!submitBtn.disabled){
                submitBtn.disabled = true;
            }
        }
    },[props.formdata])

    function handleSubmit(){
        document.getElementById("PicView link").click();
    }

    return(
        
        <div style={{
            margin: "0",
            position: "absolute",
            top: "50%",
            left: "50%",
            msTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
            width: "630px",
            height:"510px",
            border: "solid black 3px",
            borderRadius: "25px",
            padding:"0px 10px 0px 10px",
            backgroundColor: "white"
            
          }}>
        <Link id="PicView link" style={{display:"none"}} to="/PicView"/>
        <form onSubmit={handleSubmit}>
        <div style={{height:"175px"}}  id ="Title wrapper">
        <h1 style={{fontSize:"60px",textAlign: "left"}} className="NotoSerifBalinese" >Welcome to Gesture Blitz, fellow artist :) </h1>
        
        </div>

        <div style={{height:"335px",width:"100%" }} id ="menu wrapper">

            
                <input name='files' onChange={props.updateFiles} id="folder select" directory="" webkitdirectory="" type="file" style={{display:"none"}} />
                <button  type='button' style={{width:"100%"}} className=" text-4xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-black-500 rounded" onClick={()=>document.getElementById("folder select").click()}>Select folder</button>
                
                <label style={{fontSize:"20px"}} className="Roboto-Medium" >Time for a picture</label>
                       
                        <div style={{display:"flex"}}>               
                        <input type="number" min="0" value={props.formdata.minutes}  style={{width:"45%", marginRight:"10%"}} onChange={props.handleChange}   name= "minutes" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
                        <input type="number" min="0" value={props.formdata.seconds} style={{width:"45%"}} onChange={props.handleChange}   name= "seconds" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
                        </div>
                        <div style={{display:"flex"}}>  
                        <label className="Roboto-Regular" style={{width:"45%", marginRight:"10%"}} >Minutes</label> 
                        <label className="Roboto-Regular" style={{width:"45%"}}>Seconds</label>
                        </div>

                        <label className="Roboto-Medium" >Number of pics to use</label>
                        <input type="number" min="0" value={props.formdata.numOfFiles} style={{width:"100%"}} onChange={props.handleChange}   name= "numOfFiles" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
                      
                      
                        <button id="submitBtn" type="submit" style={{width:"100%"}} className="text-4xl  bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-black-500 rounded disabled:border-gray-700 disabled:bg-gray-500 disabled:hover:bg-gray-500 disabled:text-gray-400" disabled>Let's Go</button>
            

          
        </div>
        
        
        </form>
        </div>
    )
}

export default Greeter;
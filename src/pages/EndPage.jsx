import {Link} from "react-router-dom";



export default function EndPage(){
    return (
        <div style={{
            margin: "0",
            position: "absolute",
            top: "50%",
            left: "50%",
            msTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
            width: "630px",
            height:"280px",
            border: "solid black 3px",
            borderRadius: "25px",
            padding:"0px 10px 0px 10px",
            backgroundColor: "white"
            
          }}>
        <h1 style={{fontSize:"60px",textAlign: "left"}} className="NotoSerifBalinese">Yay, you've made it! Another round ? :)</h1>
        
        <div style={{display:"flex"}}>
        <Link style={{width:"49%",marginRight:"2%", display:"inline-block", height:"60px", textAlign:"center"}} className="text-4xl  bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-black-500 rounded disabled:border-gray-700 disabled:bg-gray-500 disabled:hover:bg-gray-500 disabled:text-gray-400" to="/" >Another round!</Link>
        <button onClick={()=>{window.open("about:blank", "_self");
window.close()}} style={{width:"49%", display:"inline-block", height:"60px", textAlign:"center"}} className="text-4xl  bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-black-500 rounded disabled:border-gray-700 disabled:bg-gray-500 disabled:hover:bg-gray-500 disabled:text-gray-400">Exit</button>
        </div>
        <div style={{display:"inline-block",position:"absolute", bottom:"0px", left: "50%",
  transform: "translateX(-50%)" }}>
        <p style={{display:"inline"}} className="Roboto-Medium" >Made by Kirill Troiak | </p>
        <a  style={{display:"inline"}} className="Roboto-Medium" target="_blank" href="https://ko-fi.com/kirilltroiak">Support me</a>
        </div>
        <script type="text/javascript" src="build/electron-open-link-in-browser.js"></script>
        </div>
    )
}
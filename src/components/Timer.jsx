import React from "react";


export default function Timer(props){


  let [counter, setCounter] = React.useState(props.picTime);
  let [tickingTimer, setTickingTimer] = React.useState("");
  let [paused,setPaused] = React.useState(false);

 

  React.useEffect(() => {
    
    if(!paused){
    if(counter > 0){
    let timer = setTimeout(() => {
      countDown();
    }, 1000);
    setTickingTimer(timer);
    }
    else {
      
      setCounter(props.picTime);

      props.updateTimerState();
    }
  }
    return () => {
      clearTimeout(tickingTimer);
    };
  },[counter]);

  React.useEffect(()=>{
    let handleKeyDown = (e)=>{
      switch (e.code) {
          case "ArrowLeft": 
              document.getElementById("backBtn").click();
              break

          case "ArrowRight":
            document.getElementById("forwardBtn").click();
              break
            
          case "Space":
            let pauseBtn = document.getElementById("pauseBtn");
            if (pauseBtn.style.display !=="none"){
              pauseBtn.click();
            }
            else {
              document.getElementById("playBtn").click();
            }
              break;
            case "Backspace":
              document.getElementById("toStartBtn").click();
              break;
              default:
                {console.log(e.code)}
      }
  }
    window.addEventListener("keydown", handleKeyDown )
    return () =>{
      window.removeEventListener("keydown", handleKeyDown);
    }
},[])


  function countDown(){
    
    setCounter((counter)=>counter-1);
    
  }

  function pause(){
    setPaused(true);
    clearTimeout(tickingTimer);
    let btn1 = document.getElementById("pauseBtn");
    btn1.style.display = 'none';
    let btn2 = document.getElementById("playBtn");
    btn2.style.display = 'block';

     }

  function play(){
    setPaused(false);
    let btn2 = document.getElementById("playBtn");
    btn2.style.display = 'none';
    let btn1 = document.getElementById("pauseBtn");
    btn1.style.display = 'block';
    
    
    let timer = setTimeout((counter) => {
      countDown();
    }, 1000);
    setTickingTimer(timer);
    
  }


  return(
    <div >
      
      <div>
      <p className="z-10 text-lg"  style={{position: "absolute", right:"0px", backgroundColor: "black", color:"Silver", fontSize:"30px"}}> {Math.floor(counter/60)<10 ? "0" : ""}{Math.floor(counter/60)}:{counter % 60 < 10 ? "0" : ""}{counter % 60} </p>
      <button id="toStartBtn" onClick={()=>{document.getElementById("Start link").click()}} className="z-10 text-lg"  style={{position: "absolute",top: "30px", left: "0px", backgroundColor: "black", color:"Silver"}}>Back</button>
      <button id="pauseBtn" onClick={pause} className="z-10 text-lg"  style={{position: "absolute",top: "30px", right: "0px", color:"Silver"}}>⏸️</button>
      <button id="playBtn" onClick={play} className="z-10 text-lg"  style={{display:"none",position: "absolute",top: "30px", right: "0px", color:"Silver"}}>▶️</button>
      
      <button id="backBtn" onClick={()=>{
        clearTimeout(tickingTimer);
        setCounter(props.picTime);
       
        props.back()}} className="z-10 text-2xl"  style={{position: "absolute",top: "50%", left: "0px", color:"Silver"}}>⬅</button>
      
      
      <button id="forwardBtn" onClick={()=>{
      clearTimeout(tickingTimer);
      setCounter(props.picTime);
      
      props.forward()}} className="z-10 text-2xl"  style={{position: "absolute",top: "50%", right: "0px",  color:"Silver"}}>➡</button>
      

      </div>
      
    </div>
  )
}
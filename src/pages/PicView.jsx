import React from 'react';
import MyTimer from '../components/Timer';
import {Link} from "react-router-dom";



function PicView(props){
   

   

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    let images = props.files;
    let starterArray = Array.from(Array(images.length).keys());
    let randomPictureArray = shuffle(starterArray);
    if (props.numOfFiles < randomPictureArray.length){
    randomPictureArray = randomPictureArray.slice(0, props.numOfFiles) 
    }

    


    
    let [StateOfIndexes, updateStateOfIndexes] = React.useState({activeIndexes:randomPictureArray,
        currentIndex: 0
    })
    
   function back(){
    if (StateOfIndexes.currentIndex > 0){
        updateStateOfIndexes((prevValue)=>{return{...prevValue, currentIndex:prevValue.currentIndex-1}});
        }
   }

   function forward(){
    if (StateOfIndexes.currentIndex < StateOfIndexes.activeIndexes.length-1){
        updateStateOfIndexes((prevValue)=>{return{...prevValue, currentIndex:prevValue.currentIndex+1}});
        }
    else{document.getElementById("End link").click()}
   }

    function updateTimerState(){
        
        
        if (StateOfIndexes.currentIndex < StateOfIndexes.activeIndexes.length-1){
        updateStateOfIndexes((prevValue)=>{return{...prevValue, currentIndex:prevValue.currentIndex+1}});
        }
        else{document.getElementById("End link").click()}
        
    }
    
    return(
        <div>
        <MyTimer back={back} forward={forward}   picTime={props.picTime}   updateTimerState = {updateTimerState}/>
        {StateOfIndexes.currentIndex <= StateOfIndexes.activeIndexes.length   ?
        <>
        <p  className="z-10 text-lg"  style={{position: "absolute",top: "0px", left: "0px", backgroundColor: "black", color:"Silver"}}>{StateOfIndexes.currentIndex+1}/{StateOfIndexes.activeIndexes.length}</p>
        <img style={{position: "absolute", maxHeight:"100vh", margin: "0",
            position: "absolute",
            top: "50%",
            left: "50%",
            msTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",}} className='z-0' src={URL.createObjectURL(images[StateOfIndexes.activeIndexes[StateOfIndexes.currentIndex]])} alt="Displayed pic" />
        </>
        : <></>}
        
        <Link id="End link"  to="/end"  style={{display:"none"}}/>
        <Link id="Start link"  to="/"  style={{display:"none"}}/>
       
        </div>
    
    )
}

export default PicView;
import logo from './logo.svg';
import react from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Greeter from "./pages/Greeter.jsx"
import PicView from "./pages/PicView.jsx"
import EndPage from './pages/EndPage';


const fs = window.require("fs")


function App() {

  let [formData, setFormData] = react.useState({
    files: "",
    minutes: "",
    seconds: "",
    numOfFiles: 0
  });

  //------------- Greeter functions start ----------------------


function handleChange(e){
    const {name, value} = e.target;

    setFormData((prevValue)=>{
        return {
            ...prevValue,
            [name] : value
        }
    })
}

function updateFiles(){
  let files = document.getElementById("folder select").files;
  
  setFormData((prevValue)=>{
    return {
        ...prevValue,
        files:files
    }
})
}
//------------- Greeter functions end ----------------------


  
  return (
    <Routes>
    <Route path='/' element={<Greeter formdata={formData}  handleChange={handleChange} updateFiles={updateFiles}/>}/>
    <Route path='/picView' element={<PicView numOfFiles = {formData.numOfFiles}  picTime={parseInt(formData.minutes) * 60 + parseInt(formData.seconds)} files={formData.files}/>}/> 
    <Route path='/end' element={<EndPage />}/> 
    </Routes>
  );
}

export default App;

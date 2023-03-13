import React,{useState,useEffect} from 'react'
import img1 from '../src/images/img1.jpg'
import Axios from 'axios';
import './App.css';

function App() {
  const [fact,setFact] =useState("");

  const fetchCatFact = () => {

    // fetch("https://catfact.ninja/fact")
    // .then((res)=>res.json())
    // .then((data)=>setFact(data.fact))

  /* 
    <------use Axios Library For Fetch API------>
  */
    Axios.get("https://catfact.ninja/fact")
    .then((res)=>setFact(res.data.fact))
  }
 
useEffect(()=>{
  fetchCatFact();
},[])
  return (
    <div className='App'>
    <div>
        <button onClick={fetchCatFact}>
          Get New Fact
      </button>
    </div>
    <h1>{fact}</h1>
    <img src={img1} alt='name' />
    </div>
  );
}

export default App;

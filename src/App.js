import {useEffect, useState} from 'react';
import logo from './logo.svg';
import {itxProvider} from './common/itx-provider';
import './App.css';

function App() {
  const [hash,setHash]=useState("0x552865a0dbbc5169a1da606598d3908f2652bd656e021bf74acd5f3b2d93591d");
  const [trn,setTrn]=useState(); 
  const [loading,setLoading]=useState(false); 
  const getTransactionStatus=async ()=>{
    setLoading(true)
    const itx=await itxProvider()
    const t= await itx.getTransaction(hash);
    setTrn(t)
    setLoading(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Check Transaction Status in Mainnet </h1>
        <div className="form-group">
          <label>Transaction Hash</label>
           <input onChange={(e)=>setHash(e.target.value)}  value={hash} />
        </div>
        <button onClick={getTransactionStatus}>{loading ? "Loading...":"Run"}</button>
       {trn && trn?.error && <div className="alert-div">
         <alert>
         {trn.message}
           </alert> 
         </div>}
         {trn && !trn?.error && <div className="alert-div">
      
         Transaction Find
          <br /><br /> 
          Status : {trn.transaction.blockNumber? <alert className="alert-success">Success</alert> :<alert>block</alert>} <br /> <br />
          From : {trn.transaction.from} <br /><br />
          To : {trn.transaction.to} <br /><br /> 
         </div>}
      </header>
    </div>
  );
}

export default App;

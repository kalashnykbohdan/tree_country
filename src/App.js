import './index.css';
import React, { useState, useEffect } from 'react'
import fetchTree from './FetchRequest.js'
import Tree from './Tree.js';
import Context from './context';



function App() {
  const [tempContinents, setTempContinents] = useState([]);
  const [continents, setContinents] = useState([]);

useEffect(() => {
  fetchTree.fetchContinens().then(date => {
      setTempContinents(date.data.continents)
      setContinents(date.data.continents)});

},[])

useEffect(() => {
  setContinents(tempContinents);
},[continents, tempContinents])
  
  return (
    <Context.Provider value={{setContinents}}>
      <div className="app">
        <Tree data={continents}/>
      </div>
    </Context.Provider>
  );
}

export default App;


import './App.css';
import Newsapp from './components/Newsapp';
import { useEffect, useState } from 'react';

function App() {

  const [searchData, setSearchData] = useState("india");

  const apiKey = `3d764baf363245d492f3781787ca59b3`;

  
  const [data, setData] = useState([]);

  async function fetchData() {
    const fetchData = await fetch(apiUrl);
    const data = await fetchData.json();

    setData(data.articles);

    return fetchData;
  }

  
  

  
  useEffect(()=>{fetchData()},[])
  

  


  return (
    <div className='top'>

        <div className='head'>
            <h1>NEWS APP</h1>
        </div>

        <div className='search'>
            <input type="text" placeholder='Search news...' className='srch' onChange={(event)=> {setSearchData(event.target.value)}}/>
            <button className='btn' onClick={()=> {fetchData()}} >Search</button>
        </div>

      <Newsapp data={data}></Newsapp>
    </div>
  );
}

export default App;

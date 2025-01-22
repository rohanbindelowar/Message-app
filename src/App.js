
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AllGroup from './components/AllGroup';
import Science from './components/Science';
import Engineer from './components/Engineer';
import Arts from './components/Arts';
import Error from './components/Error';
import Navbar from './components/Navbar';
import NewMessage from './components/NewMessage';
import { useState } from 'react';


function App() {
  const [data, setData] = useState([])
  function handleNewData(newData){
    const tempData = data;
    tempData.push(newData);
    console.log(tempData);
    setData(tempData);

    localStorage.setItem(newData.time, JSON.stringify(newData))
    
  }
  console.log(data);
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AllGroup data={data}/>}/>
        <Route path="/all-group" element={<AllGroup data={data}/>}/>
        <Route path="/science-group" element={<Science data={data}/>}/>
        <Route path="/engineer-group" element={<Engineer data={data}/>}/>
        <Route path="/arts-group" element={<Arts data={data}/>}/>
        <Route path="/create-new" element={<NewMessage handleNewData={handleNewData} />}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;

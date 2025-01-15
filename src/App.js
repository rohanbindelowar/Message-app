
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


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AllGroup/>}/>
        <Route path="/all-group" element={<AllGroup/>}/>
        <Route path="/science-group" element={<Science/>}/>
        <Route path="/engineer-group" element={<Engineer/>}/>
        <Route path="/arts-group" element={<Arts/>}/>
        <Route path="/create-new" element={<NewMessage/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;

import ApiService from './services/ApiService'; 
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CountryComponent from './components/CountryComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    // Lógica adicional si es necesaria al iniciar la aplicación
    const [globalData, setGlobalData] = useState([]);
    const continents = [...new Set(globalData.map(item => item.region))];

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await ApiService.fetchData();
          setGlobalData(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <Router basename='/populationchart'>
      <div>
        <Navbar continents={continents} />

        <Routes>
          <Route exact path="/" element={<CountryComponent globalData={globalData} continent={''} population={''}/>} />
          {globalData && continents.map((continent) => (
            <Route key={continent} path={`/${continent}`} element={<CountryComponent globalData={globalData} continent={continent} population={''} />}/>
          ))}
        </Routes>
      </div>
    </Router>

  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './asset/css/style.css';
import './asset/css/modal.css';

import ButtonLayout from './Components/ButtonLayout';
import Graph from './Components/Graph';
import GrobalAlertModal from './Components/GrobalAlertModal';
import SideBar from './Components/SideBar';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';

function App() {
  return (
    <>
      <Router>
        <SideBar />
        <Routes>
          <Route path="/overview" exact element={<Overview />}></Route>
          <Route path="/reports" exact element={<Reports />}></Route>
          <Route path="/reports/report1" exact element={<ReportsOne/>}></Route>
          <Route path="/reports/report2" exact element={<ReportsTwo/>}></Route>
          <Route path="/reports/report3" exact element={<ReportsThree />}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;

import React from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main/Main";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 p-0">
            <Sidebar />
          </div>
          <div className="col-xl-10 pt-5 main">
            <Main />
          </div>                 
        </div>        
      </div>      
    </>
  );
}

export default App;

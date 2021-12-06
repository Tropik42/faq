import React from 'react';

import { BrowserRouter } from "react-router-dom"

import {
    Route,
    Routes,
} from "react-router-dom"

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main/Main";
import Test from "./components/Test";

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
            <Main/>
              {/*<BrowserRouter>*/}
              {/*<Routes>*/}
              {/*    <Route path='/Main' element={Main} />*/}
              {/*    <Route path='/Test' element={Test} />*/}
                  {/*<Route from='/' to='/Main'/>*/}
              {/*</Routes>*/}
              {/*</BrowserRouter>*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

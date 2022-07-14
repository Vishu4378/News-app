import "./App.css";
import React, { useState } from "react";

import News from "./components/News";
import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
// import Navbar from './components/Header/Navbar'
import Navbar from './components/Navbar'
const Main = () => {
  const pagesize = 10;
  const apikey = "a0cfc77ee84e4734a75d6ad945cfaa43";
  const [progress, setprogress] = useState(0);

  return (
    <div>
      <BrowserRouter>
       
        <Navbar/>
        <LoadingBar height={5} color="#f11946" progress={progress} />
        <Routes>
      <Route path= "/News-app-react" element={<Navigate to ="/general"/>}/>
        {/* <Route path='/general'  element={<News key="General" newsSize={12} country='in' category='General'/>} /> */}
           <Route
            exact path="/News-app"
            element={
              <News
                setprogress={setprogress}
                aplikey={apikey}
                key="general"
                pageSize={pagesize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setprogress={setprogress}
                aplikey={apikey}
                key="entertainmentl"
                pageSize={pagesize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setprogress={setprogress}
                aplikey={apikey}
                key="entertainmentl"
                pageSize={pagesize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setprogress={setprogress}
                aplikey={apikey}
                key="business"
                pageSize={pagesize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setprogress={setprogress}
                aplikey={apikey}
                key="general"
                pageSize={pagesize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setprogress={setprogress}
                aplikey={apikey}
                key="health"
                pageSize={pagesize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setprogress={setprogress}
                aplikey={apikey}
                key="sports"
                pageSize={pagesize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setprogress={setprogress}
                aplikey={apikey}
                key="technology"
                pageSize={pagesize}
                country="in"
                category="technology"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setprogress={setprogress}
                aplikey={apikey}
                key="science"
                pageSize={pagesize}
                country="in"
                category="science"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;

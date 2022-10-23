import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from "../App";

const AppRouter = () => {
  return (
    <Router basename='/calendario-medico'>
      <Routes>
        <Route exact path="/" element={<App/>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter
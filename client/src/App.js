import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginScreen from './Components/Login/Signin';
import RegisterScreen from './Components/Register/Signup';
import Home from './Components/Home/Home';
import './App.css'

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
            <Route path="/room/*" element={<Home/>}/>
            <Route exact path="/login" element={<LoginScreen/>}/>
            <Route exact path="/register" element={<RegisterScreen/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;

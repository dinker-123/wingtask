import './App.css';
import Login from './component/auth/Login';
import SignUp from './component/auth/SignUp';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './component/navbar/navbar';
import Dashboard from './component/dashbord/dashboard';
function App() {
  return (
    <div className="App">
      <SignUp/>
      {/* <BrowserRouter>
      <Routes>
        <NavBar />
      <Route path="/" element={<NavBar/>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashbord" element={<Dashboard />}></Route>
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

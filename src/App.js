import './App.scss';
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/home.component';
import RegisterUser from './pages/register/register-user.component';
import NavBar from './components/navbar/navbar.component';
import UpdateUser from './pages/update-user/update-user.component';
import DelUser from './pages/del-user/del-user.component';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route element={<Home />} path="/home" />
          <Route element={<RegisterUser />} path="register-user" />
          <Route element={<UpdateUser />} path="update-user" />
          <Route element={<DelUser />} path="del-user" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

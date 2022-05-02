import { Route, Routes } from 'react-router-dom';
import Login from './views/Login/Login';
import { Profile } from './views/Profile/Profile';
import Register from './views/Register/Register';
import { NavBar } from './components/NavBar/NavBar';
import { Galery } from './views/Galery/Galery';
import { Home } from './views/Home/Home';
import './App.css';
import './scss/app.scss'

function App() {
  return ( 
    <div className="App"> 
      <NavBar/>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/galery' element={<Galery />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;

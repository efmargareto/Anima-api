import { Route, Routes } from 'react-router-dom';
import Login from './views/Login/Login';
import { Profile } from './views/Profile/Profile';
import Register from './views/Register/Register';
import './App.css';
import './scss/app.scss'

function App() {
  return ( 
    <div className="App"> 
      <h1>Anima NFT</h1>
      <hr></hr>

      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;

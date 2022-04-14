// --------------------
// App js
// --------------------

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './views/Login/Login';

function App() {
  return ( 
    <div className="App"> 
      <h1>Anima NFT</h1>

      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;

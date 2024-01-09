import { useEffect } from 'react';
import './App.css';
import AppNavBar from './components/pages/AppNavBar';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './redux/actions';
function App() {
  const dispatch=useDispatch()
  const getAuth=()=>{
  dispatch(getAuthUser())
  }
  useEffect(getAuth,[])
  return (
    <div className="App">
    <AppNavBar />
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Dashboard" element={<Dashboard/>} />
</Routes>

    </div>
  );
}

export default App;

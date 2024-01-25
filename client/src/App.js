import { useEffect } from 'react';
import './App.css';
import AppNavBar from './components/pages/AppNavBar';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Moi from './components/pages/Moi';
import Projet from './components/pages/Projet';
import Contact from './components/pages/Contact';
import { useDispatch,useSelector } from 'react-redux';
import { getAuthUser } from './redux/actions';
function App() {
  const dispatch=useDispatch()
  const getAuth=()=>{
  dispatch(getAuthUser())
  }
  useEffect(getAuth,[])
  const isAuth=useSelector((state)=>state.auth.user)

  return (
    <div className="App">

    <AppNavBar />
    <Dashboard/>
    
    
    

    {isAuth &&
    
    <Routes>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Projet" element={<Projet/>} />
      <Route path="/Moi" element={<Moi/>} />
      </Routes>
        }
      <Routes>

  
</Routes>
  


    </div>
  );
}

export default App;

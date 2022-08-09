import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Error404 from './pages/Error404';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
    <Router>
      <Header/>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/inicio' element={<Home/>}></Route>
       <Route path='/series' element={<Series/>}></Route>
       <Route path='/comics' element={<Comics/>}></Route>
       <Route element={<Error404/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

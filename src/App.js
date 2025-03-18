import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import Cards from './components/Cards';
import ShoppingCart from './components/ShoppingCart';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Cards/>}/>
      <Route path='/cart' element={<ShoppingCart/>}/>
    </Routes>
    </>
  );
}

export default App;

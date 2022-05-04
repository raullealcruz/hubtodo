import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPrincipal from './components/MainPrincipal/MainPrincipal';
import LoGin from './pages/LoGin/LoGin';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainPrincipal />} />
          <Route path='/login' element={<LoGin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

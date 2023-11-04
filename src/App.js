// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Styles.css';
import Home from './Routes/Home';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
       
          <Route index element={<Home />} />
         
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

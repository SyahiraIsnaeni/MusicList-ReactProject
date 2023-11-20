import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import Appheader from './components/Appheader';
import Profile from './pages/Profile';
import Detail from './pages/Detail';
import { MusicProvider } from './services/MusicContext';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <MusicProvider>
      <BrowserRouter>
        <Appheader></Appheader>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      </MusicProvider>
    </div>
  );
}

export default App;

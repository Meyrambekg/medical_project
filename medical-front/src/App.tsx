import './App.scss';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BannerComponent from './components/banner/banner';
import LoginComponent from './components/login/login';
import RegisterComponent from './components/register/register';
import { useState } from 'react';
import UserComponent from './components/user/user';

export default function App() {
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <div className="main">
        <Header />
        <div className='content'>
          <div className='content-inner'>
            <Routes>
              <Route path='/login' element={<LoginComponent />} />
              <Route path='/signup' element={<RegisterComponent />} />
              <Route path='/profile' element={<UserComponent />} />
              <Route path='*' element={<BannerComponent />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

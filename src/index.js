import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';//App.js .js생략
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassKakaoMap from './components/ClassKakaoMap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/classkakaomap" element={<ClassKakaoMap />} />
    </Routes>
  </BrowserRouter>
);
{/* <React.StrictMode>
    <App />
  </React.StrictMode> */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';  
// import 'react-toastify/dist/ReactToastify.css';

// import Login from './pages/Login';
// import Register from './pages/Register';
// import Secret from './pages/Secret';

// export default function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/register" element={<Register />} />
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/" element={<Secret />} />
//         </Routes>
//       </BrowserRouter>
//       <ToastContainer /> {/* ✅ Ensures toast notifications work */}
//     </>
//   );
// }

//this is the newer one






import React from 'react'
import {BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Secret from "./pages/Secret";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
     <Route exact path="/register" element={<Register/>}/>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/" element={<Secret/>}/>
    </Routes>
    
    
    </BrowserRouter>
            
  );
}


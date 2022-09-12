import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { Company, ContactUs, NotFound, Partners, Security, Services } from './pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/services' element={<Services />} />
      <Route path='/security' element={<Security />} />
      <Route path='/company' element={<Company />} />
      <Route path='/partners' element={<Partners />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

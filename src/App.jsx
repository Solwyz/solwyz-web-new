import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FrontLayout from './Front/FrontLayout'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Front/Pages/HomePage/HomePage'
import AboutPage from './Front/Pages/AboutPage/AboutPage'
import BlogsPage from './Front/Pages/BlogsPage/BlogsPage'
import ServicePage from './Front/Pages/ServicePage/ServicePage'
import CareersPage from './Front/Pages/CareersPage/CareersPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="">
    <Routes>
      <Route path='/' element={<FrontLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='blogs' element={<BlogsPage/>}/>
        <Route path='services' element={<ServicePage/>}/>
        <Route path='careers' element={<CareersPage/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App

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
import ContactPage from './Front/Pages/ContactPage/ContactPage'

import CareerDetails from './Front/Pages/CareersPage/CareerDetails/CareerDetails'


import BlogDetailsPage from './Front/Pages/BlogsPage/BlogDetailsPage'
import ErpService from './Front/Pages/ServicePage/ServiceDetail/ErpService'
import PharmaService from './Front/Pages/ServicePage/ServiceDetail/PharmaService'
import DigitalService from './Front/Pages/ServicePage/ServiceDetail/DigitalService'
import MobWebService from './Front/Pages/ServicePage/ServiceDetail/MobWebService'
import ScrollToTop from './ScrollToTop'

import AdminLayout from './Admin/AdminLayout'
import CareerMangement from './Admin/Pages/CareerManagement/CareerMangement'
import JobApplications from './Admin/Pages/JobApplications/JobApplications'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="font-manrope ">
      <ScrollToTop/>
    <Routes>
      <Route path='/' element={<FrontLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='blogs' element={<BlogsPage/>}/>
        <Route path='blogdetails' element={<BlogDetailsPage/>}/>
        <Route path='services' element={<ServicePage/>}/>
        <Route path='careers' element={<CareersPage/>}/>
        <Route path='contact' element={<ContactPage/>}/>


        <Route path='services/Pharma-ERP' element={<ErpService/>}/>
        <Route path='services/Pharma-E-Commerce' element={<PharmaService/>}/>
        <Route path='services/digital-marketing' element={<DigitalService/>}/>
        <Route path='services/mobile-and-web' element={<MobWebService/>}/>

        <Route path='CareerDetails' element ={<CareerDetails/>}/>
       


      </Route>
      <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<CareerMangement/>}/>
        <Route path='career' element={<CareerMangement/>}/>
        <Route path='jobapplications' element={<JobApplications/>}/>
      </Route>

    </Routes>
    </div>
  )
}

export default App

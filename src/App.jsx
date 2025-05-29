import { useEffect, useState } from 'react'
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

import CareerForm from './Front/Pages/CareersPage/CareerDetails/CareerForm'

import JobApplications from './Admin/Pages/JobApplications/JobApplications'
import DepartmentVacancyList from './Admin/Pages/CareerManagement/DepartmentVacancyList'
import VacancyAddingForm from './Admin/Pages/CareerManagement/VacancyAddingForm'
import Loader from './Front/Loaders/Loader'

import DepartmentApplicationList from './Admin/Pages/JobApplications/DepartmentApplicationList'
import ApplicationsTable from './Admin/Pages/JobApplications/ApplicationsTable'

import WebsiteAudit from './Admin/Pages/WebsiteAudit/WebsiteAudit'





function App() {
  // const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }


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
         <Route path='careerForm' element={<CareerForm/>}/>
       


      </Route>
      <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<CareerMangement/>}/>
        <Route path='career' element={<CareerMangement/>}/>
        <Route path='career/:id' element={<DepartmentVacancyList/>}/>
        <Route path='addvacancy/:id' element={<VacancyAddingForm/>}/>
        <Route path='jobapplications' element={<JobApplications/>}/>

        <Route path='jobapplications/:id' element={<DepartmentApplicationList/>}/>
        <Route path='jobapplications/:id/:groupId' element={<ApplicationsTable/>}/>

        <Route path='WebsiteAudit' element={<WebsiteAudit/>}/>

      </Route>

    </Routes>
    </div>
  )
}

export default App

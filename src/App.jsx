import { useEffect, useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'

// import DigitalService from './Front/Pages/ServicePage/ServiceDetail/DigitalService'
// import MobWebService from './Front/Pages/ServicePage/ServiceDetail/MobWebService'
import ScrollToTop from './ScrollToTop'

import AdminLayout from './Admin/AdminLayout'
import CareerMangement from './Admin/Pages/CareerManagement/CareerMangement'


import JobApplications from './Admin/Pages/JobApplications/JobApplications'
import DepartmentVacancyList from './Admin/Pages/CareerManagement/DepartmentVacancyList'
import VacancyAddingForm from './Admin/Pages/CareerManagement/VacancyAddingForm'

import DepartmentApplicationList from './Admin/Pages/JobApplications/DepartmentApplicationList'
import ApplicationsTable from './Admin/Pages/JobApplications/ApplicationsTable'

import WebsiteAudit from './Admin/Pages/WebsiteAudit/WebsiteAudit'

import AdminBlogsPage from './Admin/Pages/BlogPage/AdminBlogPage'

import AdminLogin from './Admin/AdminLogin/AdminLogin'
import AdminContact from './Admin/Pages/AdminContact/AdminContact'
import AdminBlogForm from './Admin/Pages/BlogPage/AdminBlogForm'







function App() {
  // const [count, setCount] = useState(0)
  

  return (
    <div className="font-manrope ">
      <ScrollToTop />
      <Routes>
       

        <Route path='/' element={<AdminLayout />}>
          <Route index element={<CareerMangement />} />
          <Route path='career' element={<CareerMangement />} />
          <Route path='career/:id' element={<DepartmentVacancyList />} />
          <Route path='addvacancy/:id' element={<VacancyAddingForm />} />
          <Route path='jobapplications' element={<JobApplications />} />

          <Route path='jobapplications/:id' element={<DepartmentApplicationList />} />
          <Route path='jobapplications/:id/:designationId' element={<ApplicationsTable />} />

          <Route path='WebsiteAudit' element={<WebsiteAudit />} />

          <Route path='enquiries' element={<AdminContact />} />


          <Route path='blogPage' element={<AdminBlogsPage />} />
          <Route path='blogPageForm' element={<AdminBlogForm />} />
          <Route path='blogPageForm/:blogId' element={<AdminBlogForm />} />


        </Route>
        <Route path='/' element={<AdminLogin />} />


      </Routes>
    </div>
  )
}

export default App

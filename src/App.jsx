import { useEffect, useState } from 'react'

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

import PharmaService from './Front/Pages/ServicePage/ServiceDetail/SeoService'
// import DigitalService from './Front/Pages/ServicePage/ServiceDetail/DigitalService'
// import MobWebService from './Front/Pages/ServicePage/ServiceDetail/MobWebService'
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

import AdminBlogsPage from './Admin/Pages/BlogPage/AdminBlogPage'

import AdminLogin from './Admin/AdminLogin/AdminLogin'
import AdminContact from './Admin/Pages/AdminContact/AdminContact'
import AdminBlogForm from './Admin/Pages/BlogPage/AdminBlogForm'
import SeoService from './Front/Pages/ServicePage/ServiceDetail/SeoService'
import SocialMediaMarketing from './Front/Pages/ServicePage/ServiceDetail/SocialMediaMarketing'
import SearchEngineMarketing from './Front/Pages/ServicePage/ServiceDetail/SearchEngineMarketing'
import InfInfluencerMarketing from './Front/Pages/ServicePage/ServiceDetail/InfluencerMarketing'
import VideoMarketing from './Front/Pages/ServicePage/ServiceDetail/VideoMarketing'
import Branding from './Front/Pages/ServicePage/ServiceDetail/Branding'
import WebDevelopment from './Front/Pages/ServicePage/ServiceDetail/WebDevelopment'
import AppDevelopment from './Front/Pages/ServicePage/ServiceDetail/AppDevelopment'
import ERPsolution from './Front/Pages/ServicePage/ServiceDetail/ERPsolution'
import CRMsolution from './Front/Pages/ServicePage/ServiceDetail/CRMsolution'






function App() {
  // const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }


  return (
    <div className="font-manrope ">
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<FrontLayout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='blogs' element={<BlogsPage />} />
          <Route path='blogdetails/:id' element={<BlogDetailsPage />} />
          <Route path='services' element={<ServicePage />} />
          <Route path='careers' element={<CareersPage />} />
          <Route path='contact' element={<ContactPage />} />


          <Route path='services/Social-Media-Marketing' element={<SocialMediaMarketing/>} />
          <Route path='services/SEO-Service' element={<SeoService/>} />
          <Route path='services/Search-Engine-Marketing' element={<SearchEngineMarketing/>} />
          <Route path='services/Influencer-Marketing' element={<InfInfluencerMarketing/>} />
          <Route path='services/Video-Marketing' element={<VideoMarketing/>} />
          <Route path='services/Branding' element={<Branding/>} />
          <Route path='services/Web-Development' element={<WebDevelopment/>} />
          <Route path='services/App-Development' element={<AppDevelopment/>} />
          <Route path='services/ERP-Solution' element={<ERPsolution/>} />
          <Route path='services/CRM-Solution' element={<CRMsolution/>} />
          {/* <Route path='services/digital-marketing' element={<DigitalService />} /> */}
          {/* <Route path='services/mobile-and-web' element={<MobWebService />} /> */}

          <Route path='CareerDetails/:id' element={<CareerDetails />} />
          <Route path='careerForm/:id' element={<CareerForm />} />



        </Route>


        <Route path='/admin' element={<AdminLayout />}>
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
        <Route path='login' element={<AdminLogin />} />


      </Routes>
    </div>
  )
}

export default App

import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

import '../../assets/admin/css/styles.css'
import '../../assets/admin/js/scripts.js'


import React from 'react'

const MasterLayout = () => {
  return (
    <div className='sb-nav-fixed'>
        <Navbar />
        <div id="layoutSidenav">

            <div id="layoutSidenav_nav">
                <Sidebar />
            </div>

            <div id="layoutSidenav_content">
                <main>
                    
                    <Outlet />
                    {/* <Routes>
                   
                        <Route path="/admin/*" element={<Navigate to="/admin/dashboard" /> } />

                    </Routes> */}

                </main>
                <Footer />
            </div>

        </div>
    </div>
  )
}

export default MasterLayout
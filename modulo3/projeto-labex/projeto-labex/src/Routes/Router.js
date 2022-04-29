import {HomePage} from '../Pages/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListTripsPage from '../Pages/ListTripsPage'
import ApplicationFormPage from '../Pages/ApplicationFormPage'
import LoginPage from '../Pages/LoginPage'

export const Router = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route  index element={<HomePage/>}/>
            <Route path = "trips/list" element={<ListTripsPage/>}/>
            <Route path = "trips/application" element={<ApplicationFormPage/>} />
            <Route path = "login" element={<LoginPage/>}/>
            <Route path = "admin/trips/list" />
            <Route path = "admin/trips/create"/>
            <Route path = "admin/trips/:id" />
          </Routes>
      </BrowserRouter>
    )
}
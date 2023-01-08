import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import Sapir from './Sapir'

import SectionBorder from '../components/SectionBorder'


export const MainTest = () => {

    return (
        <Routes>
            {/* <Route path='/aviad' element={<Aviad />} /> */}
            <Route path='/sapir' element={<LoginPage />} />

         
        </Routes>

)}


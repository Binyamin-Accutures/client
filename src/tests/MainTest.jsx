import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Aviad from './Aviad'
import Sapir from './Sapir'

import SectionBorder from '../components/SectionBorder'
import Matanel from './Matanel'
import Elisha from './Elisha'
import NoaTest from './NoaTest'


export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/sapir' element={<Login />} />

            <Route path='/matanel/*' element={<Matanel />} />
            <Route path='/elisha' element={<Elisha/>} />           
            <Route path='/noa' element={<NoaTest />} />
        </Routes>

)}


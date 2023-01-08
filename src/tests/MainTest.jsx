import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Aviad from './Aviad'
import Sapir from './Sapir'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/sapir' element={<Login />} />
        </Routes>

)}


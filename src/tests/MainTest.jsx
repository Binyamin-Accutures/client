import { Route, Routes } from 'react-router-dom'
//import SideBar from '../components/SideBar'
import Aviad from './Aviad'
import LiatTest from './LiatTest'


export default function Root () {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/liattest' element={<LiatTest/>} />
        </Routes>
    )
    
}

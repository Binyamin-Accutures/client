import { Route, Routes } from 'react-router-dom'
import SectionBorder from '../components/SectionBorder'
import Aviad from './Aviad'
import Adel from './Adel'
import NoaTest from './NoaTest'
import Moran from './Moran'


export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/adel' element={<Adel />} />
            {/* <Route path='/hadar' element={<Hadar />} />
            <Route path='/matanel/*' element={<Matanel />} />
            <Route path='/elisha' element={<Elisha />} /> */}
            <Route path='/noa' element={<NoaTest />} />
            <Route path='/moran' element={<Moran />} />
        </Routes>
    )
}


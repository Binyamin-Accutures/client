import { Route, Routes } from 'react-router-dom'
import SectionBorder from '../components/SectionBorder'
import Aviad from './Aviad'
import Shahar from './Shahar'
import AviadElya from './AviadElya'
import Hadar from './Hadar'
import Matanel from './Matanel'
import Elisha from './Elisha'
import NoaTest from './NoaTest'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/shahar' element={<Shahar />} />
            <Route path='/aviadElya' element={<AviadElya />} />
            <Route path='/hadar' element={<Hadar />} />
            <Route path='/matanel/*' element={<Matanel />} />
            <Route path='/elisha' element={<Elisha />} />
            <Route path='/noa' element={<NoaTest />} />
        </Routes>
    )
}


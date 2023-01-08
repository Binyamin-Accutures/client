import { Route, Routes } from 'react-router-dom'
import ChangeFrame from '../components/ChangeFrame'
import Aviad from './Aviad'
import David from './David'
import Shahar from './Shahar'
import AviadElya from './AviadElya'
import Hadar from './Hadar'
import Matanel from './Matanel'
import NoaTest from './NoaTest'
import Moran from './Moran'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/elisha' element={<ChangeFrame/>} />
            <Route path='/shahar' element={<Shahar />} />
            <Route path='/aviadElya' element={<AviadElya />} />
            <Route path='/hadar' element={<Hadar />} />
            <Route path='/matanel/*' element={<Matanel />} />
            <Route path='/noa' element={<NoaTest />} />
            <Route path='/moran' element={<Moran />} />
        </Routes>
    )
}


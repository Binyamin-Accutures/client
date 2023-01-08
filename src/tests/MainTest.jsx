import { Route, Routes } from 'react-router-dom'
import ChangeFrame from '../components/ChangeFrame'
import Aviad from './Aviad'
import Matanel from './Matanel'
import NoaTest from './NoaTest'
import AviadElya from './AviadElya'
import David from './David'
import Shahar from './Shahar'
import Hadar from './Hadar'
import Moran from './Moran'
import YisraelTest from './YisraelTest'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/elisha' element={<ChangeFrame/>} />
            <Route path='/shahar' element={<Shahar />} />
            <Route path='/hadar' element={<Hadar />} />
            <Route path='/matanel/*' element={<Matanel />} />
            <Route path='/noa' element={<NoaTest />} />
            <Route path='/aviadElya' element={<AviadElya />} />
            <Route path='/moran' element={<Moran />} />
            <Route path='/Yisrael' element={<YisraelTest />} />
        </Routes>
    )
}


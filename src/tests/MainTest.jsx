import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'
import Matanel from './Matanel'
import Elisha from './Elisha'
import NoaTest from './NoaTest'
import AviadElya from './AviadElya'
import David from './David'
import Shahar from './Shahar'
import Hadar from './Hadar'
// import Moran from './Moran'
import YisraelTest from './YisraelTest'
import Roye from './Roye'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/david' element={<David />} />
            <Route path='/shahar' element={<Shahar />} />
            <Route path='/hadar' element={<Hadar />} />
            <Route path='/matanel/*' element={<Matanel />} />
            <Route path='/elisha' element={<Elisha />} />
            <Route path='/noa' element={<NoaTest />} />
            <Route path='/aviadElya' element={<AviadElya />} />
            {/* <Route path='/moran' element={<Moran />} /> */}
            <Route path='/Yisrael' element={<YisraelTest />} />
            <Route path='/roye' element={<Roye />} />
        </Routes>
    )
}


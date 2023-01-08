
import Roye from './Roye'

import { Route, Routes } from 'react-router-dom'
import ChangeFrame from '../components/ChangeFrame'
import Aviad from './Aviad'
import Matanel from './Matanel'
import NoaTest from './NoaTest'


export const MainTest = () => {

    return (
        <Routes>
            {/* <Route path='/aviad' element={<Aviad />} />

            <Route path='/matanel/*' element={<Matanel />} />
            <Route path='/elisha' element={<Elisha />} /> */}
            <Route path='/roye' element={<Roye/>} />

{/* 
            <Route path='/david' element={<David />} />
            <Route path='/shahar' element={<Shahar />} />
            <Route path='/hadar' element={<Hadar />} />
            <Route path='/matanel/*' element={<Matanel />} />
            <Route path='/noa' element={<NoaTest />} />
            <Route path='/aviadElya' element={<AviadElya />} />
            <Route path='/moran' element={<Moran />} />
            <Route path='/Yisrael' element={<YisraelTest />} /> */}

        </Routes>
    )
}


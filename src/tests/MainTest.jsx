import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'
import Shahar from './Shahar'
import Hadar from './Hadar'
import Matanel from './Matanel'
import Elisha from './Elisha'
import NoaTest from './NoaTest'
import Yair from './Yair'
import Roye from './Roye'


export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/shahar' element={<Shahar />} />
            <Route path='/hadar' element={<Hadar />} />
            <Route path='/matanel/' element={<Matanel />} />
            <Route path='/elisha' element={<Elisha />} />
            <Route path='/noa' element={<NoaTest />} />
            <Route path='/yair' element={<Yair />} />
            <Route path='/roye' element={<Roye />} />
        </Routes>
    )}

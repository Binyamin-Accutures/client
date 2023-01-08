import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'
import Hadar from './Hadar'
import Matanel from './Matanel'
import Elisha from './Elisha'
import NoaTest from './NoaTest'
import Yair from './Yair'


export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/hadar' element={<Hadar />} />
            <Route path='/matanel/*' element={<Matanel />} />
            <Route path='/elisha' element={<Elisha />} />
            <Route path='/noa' element={<NoaTest />} />
            <Route path='/yair' element={<Yair />} />
        </Routes>
    )
}


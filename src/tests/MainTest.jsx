import { Route, Routes } from 'react-router-dom'
import ChangeFrame from '../components/ChangeFrame'
import Aviad from './Aviad'
import Matanel from './Matanel'
import Elisha from './Elisha'
import NoaTest from './NoaTest'


export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />

            <Route path='/elisha' element={<ChangeFrame/>} />

            <Route path='/matanel/*' element={<Matanel />} />
          
            <Route path='/noa' element={<NoaTest />} />

        </Routes>
    )
}



import Roye from './Roye'

import { Route, Routes } from 'react-router-dom'
import SectionBorder from '../components/SectionBorder'
import Aviad from './Aviad'
import Matanel from './Matanel'
import Elisha from './Elisha'
import NoaTest from './NoaTest'



export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />

            <Route path='/roye' element={<Roye />} />

            <Route path='/matanel/*' element={<Matanel />} />
            <Route path='/elisha' element={<Elisha/>} />           
            <Route path='/noa' element={<NoaTest />} />

        </Routes>
    )
}


import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'
import Matanel from './Matanel'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/matanel/*' element={<Matanel />} />
        </Routes>
    )
}


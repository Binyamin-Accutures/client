import { Route, Routes } from 'react-router-dom'
import ChangeFrame from '../components/ChangeFrame'
import Aviad from './Aviad'
import Elisha from './Elisha'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/elisha' element={<ChangeFrame/>} />
        </Routes>
    )
}


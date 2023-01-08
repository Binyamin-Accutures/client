import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'
import David from './David'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/david' element={<David />} />
        </Routes>
    )
}


import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'
import Adel from './Adel'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/adel' element={<Adel />} />
        </Routes>
    )
}


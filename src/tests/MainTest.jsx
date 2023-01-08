import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'
import NoaTest from './NoaTest'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/noa' element={<NoaTest />} />
        </Routes>
    )
}


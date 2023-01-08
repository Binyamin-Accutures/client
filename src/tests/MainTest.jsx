import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'
import Hadar from './Hadar'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/hadar' element={<Hadar />} />
        </Routes>
    )
}


import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
        </Routes>
    )
}


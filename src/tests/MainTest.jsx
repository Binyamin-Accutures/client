import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'
import Shahar from './Shahar'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/shahar' element={<Shahar />} />
        </Routes>
    )
}


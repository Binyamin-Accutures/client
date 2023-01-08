import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'
import AviadElya from './AviadElya'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/aviadElya' element={<AviadElya />} />
        </Routes>
    )
}


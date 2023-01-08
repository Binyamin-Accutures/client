import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'
import Yair from './Yair'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/yair' element={<Yair />} />
        </Routes>
    )
}


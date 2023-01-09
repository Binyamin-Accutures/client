import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'
import Dael from './Dael'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/dael' element={<Dael />} />
        </Routes>
    )
}


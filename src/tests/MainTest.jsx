import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'
import Chananel from './Chananel'

export const MainTest = () => {

    

    return (
        <Routes>
            <Route path='/Aviad' element={<Aviad />} />
            <Route path='/Chananel' element={<Chananel />} />
        </Routes>
    )
}


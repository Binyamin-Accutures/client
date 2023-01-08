
import Roye from './Roye'

import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'


export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/roye' element={<Roye />} />
        </Routes>
    )
}


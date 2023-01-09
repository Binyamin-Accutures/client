import { Route, Routes } from 'react-router-dom'
import Aviad from './Aviad'
// import AviadElya from './AviadElya'
// import David from './David'
// import Shahar from './Shahar'
// import Hadar from './Hadar'
// import Elisha from './Elisha'
// import NoaTest from './NoaTest'
// import Moran from './Moran'
import Pavel from './Pavel'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/pavel' element={<Pavel />} />
        </Routes>
    )
}


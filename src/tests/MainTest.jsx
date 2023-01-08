import { Route, Routes } from 'react-router-dom'
import Anat from './Anat'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/anat' element={<Anat />} />
        </Routes>
    )
}


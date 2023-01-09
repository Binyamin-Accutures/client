import { Route, Routes } from 'react-router-dom'
import Anat from './Anat'

export default function Nuc() {

    return (
        <Routes>
            <Route path='/anat' element={<Anat />} />
        </Routes>
    )
}


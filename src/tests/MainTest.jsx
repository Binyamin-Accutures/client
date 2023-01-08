import { Route, Routes } from 'react-router-dom'
import SectionBorder from '../components/SectionBorder'
import Aviad from './Aviad'
import Elisha from './Elisha'

export const MainTest = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/elisha' element={<SectionBorder border='dashed' height='auto' width='auto'>
                <Elisha/>
                <Elisha/>
                <Elisha/>
                <Elisha/>
                <Elisha/>
                <Elisha/>

            </SectionBorder>} />
        </Routes>
    )
}


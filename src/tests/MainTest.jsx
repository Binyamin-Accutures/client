import Aviad from './Aviad'
import Yair from './Yair'

export const Test = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/yair' element={<Yair />} />
        </Routes>
    )
}


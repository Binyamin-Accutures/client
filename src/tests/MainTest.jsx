import Roye from './Roye'

export const Test = () => {

    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/roye' element={<Roye />} />
        </Routes>
    )
}


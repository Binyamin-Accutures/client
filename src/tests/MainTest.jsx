<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom'
import SectionBorder from '../components/SectionBorder'
import Aviad from './Aviad'
import Matanel from './Matanel'
import Elisha from './Elisha'
import NoaTest from './NoaTest'
import AviadElya from './AviadElya'
// import David from './David'
import Shahar from './Shahar'
import Hadar from './Hadar'
import Moran from './Moran'
=======
import Roye from "./Roye";

import { Route, Routes } from "react-router-dom";
import ChangeFrame from "../components/ChangeFrame";
import Aviad from "./Aviad";
import Matanel from "./Matanel";
import NoaTest from "./NoaTest";
import Elisha from "./Elisha";
import David from "./David";
import Shahar from "./Shahar";
import Hadar from "./Hadar";
import AviadElya from "./AviadElya";
import Noam from "./Noam";
import YisraelTest from "./YisraelTest";
>>>>>>> 3c21ce12398c1a9ff096c650c8a76c3207fe2fd5

export const MainTest = () => {
  return (
    <Routes>
      <Route path="/aviad" element={<Aviad />} />
      <Route path="/noam" element={<Noam />} />

<<<<<<< HEAD
    return (
        <Routes>
            <Route path='/aviad' element={<Aviad />} />
            {/* <Route path='/david' element={<David />} /> */}
            <Route path='/shahar' element={<Shahar />} />
            <Route path='/hadar' element={<Hadar />} />
            <Route path='/matanel/*' element={<Matanel />} />
            <Route path='/elisha' element={<Elisha />} />
            <Route path='/noa' element={<NoaTest />} />
            <Route path='/aviadElya' element={<AviadElya />} />
            <Route path='/moran' element={<Moran />} />
        </Routes>
    )
}
=======
      <Route path="/matanel/*" element={<Matanel />} />
      <Route path="/elisha" element={<Elisha />} />
      <Route path="/roye" element={<Roye />} />
>>>>>>> 3c21ce12398c1a9ff096c650c8a76c3207fe2fd5

      <Route path="/david" element={<David />} />
      <Route path="/shahar" element={<Shahar />} />
      <Route path="/hadar" element={<Hadar />} />
      <Route path="/noa" element={<NoaTest />} />
      <Route path="/aviadElya" element={<AviadElya />} />

      <Route path="/Yisrael" element={<YisraelTest />} />
    </Routes>
  );
};

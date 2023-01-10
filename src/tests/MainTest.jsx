import { Route, Routes } from 'react-router-dom'

import SectionBorder from '../components/SectionBorder'
import LoginPage from '../pages/LoginPage'
import Pavel from './Pavel'
import Roye from "./Roye";
import Anat from './Anat';
import Adel from './Adel';
import Moran from './Moran'
import Sapir from './Sapir'
import Aviad from "./Aviad";
import Matanel from "./Matanel";
import NoaTest from "./NoaTest";
import Elisha from "./Elisha";
import David from "./David";
import Shahar from "./Shahar";
import Hadar from "./Hadar";
import AviadElya from "./AviadElya";
import Noam from "./Noam";
import Dudu from './Dudu';
import YisraelTest from "./YisraelTest";
import Yair from './Yair';
// import Chananel from './Chananel';


export const MainTest = () => {
  return (
    <Routes>
      <Route path="/aviad" element={<Aviad />} />
      <Route path="/noam" element={<Noam />} />
      <Route path='/anat' element={<Anat />} />
      <Route path="/matanel/*" element={<Matanel />} />
      <Route path="/elisha" element={<Elisha />} />
      <Route path="/roye" element={<Roye />} />
      <Route path="/david" element={<David />} />
      <Route path="/shahar" element={<Shahar />} />
      <Route path="/hadar" element={<Hadar />} />
      <Route path="/noa" element={<NoaTest />} />
      <Route path="/aviadElya" element={<AviadElya />} />
      <Route path='/adel' element={<Adel />} />
      <Route path='/pavel' element={<Pavel />} />
      <Route path='/sapir' element={<Sapir />} />
      <Route path='/moran' element={<Moran />} />
      <Route path='/Yisrael' element={<YisraelTest />} />
      <Route path='/dudu' element={<Dudu />} />
      <Route path='/yair' element={<Yair />} />
    </Routes>
  )
};


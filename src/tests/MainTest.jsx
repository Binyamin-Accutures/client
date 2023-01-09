<<<<<<< HEAD
=======

import Roye from "./Roye";
import Anat from './Anat'
>>>>>>> 3763bbfacbadd6a5eba5e363b91239d77a9222be
import { Route, Routes } from "react-router-dom";
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
import Roye from "./Roye";

export const MainTest = () => {
<<<<<<< HEAD
  return (
    <Routes>
      <Route path="/aviad" element={<Aviad />} />
      <Route path="/noam" element={<Noam />} />
      <Route path="/matanel/*" element={<Matanel />} />
      <Route path="/elisha" element={<Elisha />} />
      <Route path="/roye" element={<Roye />} />
      <Route path="/david" element={<David />} />
      <Route path="/shahar" element={<Shahar />} />
      <Route path="/hadar" element={<Hadar />} />
      <Route path="/noa" element={<NoaTest />} />
      <Route path="/aviadElya" element={<AviadElya />} />
      <Route path="/Yisrael" element={<YisraelTest />} />
    </Routes>
  );
=======
    return (
        <Routes>
            <Route path="/aviad" element={<Aviad />} />
            <Route path="/noam" element={<Noam />} />
            <Route path='/anat' element={<Anat />} />
            <Route path="/matanel/*" element={<Matanel />} />
            <Route path="/elisha" element={<Elisha />} />
            <Route path="/roye" element={<Roye />} />
            <Route path='/aviad' element={<Aviad />} />
            <Route path='/david' element={<David />} />
            <Route path='/shahar' element={<Shahar />} />
            <Route path='/hadar' element={<Hadar />} />
            <Route path='/matanel/*' element={<Matanel />} />
            <Route path='/elisha' element={<Elisha />} />
            <Route path='/noa' element={<NoaTest />} />
            <Route path='/aviadElya' element={<AviadElya />} />
            <Route path='/moran' element={<Moran />} />
            <Route path='/Yisrael' element={<YisraelTest />} />
        </Routes>
    )
>>>>>>> 3763bbfacbadd6a5eba5e363b91239d77a9222be
};

import { Route, Routes } from 'react-router-dom';
import './global.css';
import Layout from './layout';

import {MainTest} from './tests/MainTest'

function App() {
  return (
    <div>
      {/* <Login/> */}
      <MainTest/>
      <Layout/>
    </div>
  );
}

export default App;

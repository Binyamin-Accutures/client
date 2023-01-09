import './global.css';
import Layout from './layout';
import {ContextProvider} from './context/manageContext'
import { useState } from "react"
import {MainTest} from './tests/MainTest'
import LayoutLogin from './LayoutLogin';

function App() {
  const [user, setUser] = useState(true)
  return (
    <div>

      {(!user) && <><LayoutLogin setUser={setUser}/></>}
      {user &&<>
      <ContextProvider user={user} setUser={setUser}>
        <MainTest/>
        <Layout/>
      </ContextProvider>
      </>}
    </div>
  );
}

export default App;

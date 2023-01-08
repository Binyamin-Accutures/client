import './global.css';
import Layout from './layout';
import {ContextProvider} from './context/manageContext'
import { useState } from "react"
import {MainTest} from './tests/MainTest'

function App() {
  const [user, setUser] = useState('')
  return (
    <div>

      <ContextProvider user={user} setUser={setUser}>
        <MainTest/>
        <Layout/>
      </ContextProvider>

      {/* <Login setUser={setUser}/>
      (user) && <></> 
      */}

      
    </div>
  );
}

export default App;

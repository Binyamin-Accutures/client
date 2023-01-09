<<<<<<< HEAD
import "./global.css";
import Layout from "./layout";
import { ContextProvider } from "./context/manageContext";
import { useState } from "react";
=======
import './global.css';
import Layout from './layout';
import { ContextProvider } from './context/manageContext'
import { useState } from "react"

import { MainTest } from './tests/MainTest'
import LoginPage from './pages/LoginPage';
>>>>>>> 3763bbfacbadd6a5eba5e363b91239d77a9222be

import { MainTest } from "./tests/MainTest";
import LoginPage from "./pages/LoginPage";

function App() {
  const [user, setUser] = useState(true);
  return (
    <div>
<<<<<<< HEAD
      {/* {(!user) && <><LoginPage setUser={setUser}/></>}
      {user &&<>
      <ContextProvider user={user} setUser={setUser}> */}
      <MainTest />
      <Layout />
      {/* </ContextProvider>
      </>} */}
=======

      {(!user) && <><LoginPage setUser={setUser} /></>}
      {user && <>
        <ContextProvider user={user} setUser={setUser}>
          <MainTest />
          <Layout />
        </ContextProvider>
      </>}
>>>>>>> 3763bbfacbadd6a5eba5e363b91239d77a9222be
    </div>
  );
}

export default App;

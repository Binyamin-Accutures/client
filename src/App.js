import './global.css';
import Layout from './layout';
import { ContextProvider } from './context/manageContext'
import { useEffect, useState } from "react"
import { MainTest } from './tests/MainTest'
import LayoutLogin from './LayoutLogin';



function App() {

  const [user, setUser] = useState(true)
  useEffect(() => {
    const startApp = async () => {
      const userFromServer = await apiCalls("get", "https://localhost:5000/api/user")
      if (userFromServer) {
        setUser(userFromServer)
      }
    }

    if (!user&&localStorage.token) startApp()
  }, [])


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

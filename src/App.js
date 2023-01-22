import "./global.css";
import Layout from "./layout";
import { ContextProvider } from "./context/manageContext";
import { useEffect, useState } from "react";
import LayoutLogin from "./LayoutLogin";
import apiCalls, { setToken } from "./functions/apiRequest";
import { MainTest } from "./tests/MainTest";
import { useNavigate } from "react-router-dom";

function App() {
  const nav = useNavigate();
  const [user, setUser] = useState(false);

  useEffect(() => {
    const startApp = async () => {
      await setToken(localStorage.token);
      apiCalls("get", "http://localhost:9000/api/user/").then((res) => {
        console.log(res);
        if (res.status === 200) {
          setUser(res.data);
          nav("/loadimage");
        }
      });
    };

    if (!user && localStorage.token) startApp();
  }, []);

  return (
    <div>
      {!user && (
        <>
          <LayoutLogin setUser={setUser} />
        </>
      )}
      {user && (
        <>
          <ContextProvider user={user} setUser={setUser}>
            <MainTest />
            <Layout />
          </ContextProvider>
        </>
      )}
    </div>
  );
}

export default App;

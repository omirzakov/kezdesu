import { Layout } from "antd";
import Login from "./components/login/Login";
import "./app.css";
import { MainContext } from "./components/context/MainContext";
import { useState } from "react";
import Main from "./components/main";

function App() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className="app">
            <Layout>
                <MainContext.Provider value={{isLogin, setIsLogin}}>
                    {
                        isLogin ? <Main /> : <Login />
                    }
                </MainContext.Provider>
            </Layout>
        </div>
    );
}

export default App;

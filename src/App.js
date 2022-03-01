import { Layout } from "antd";
import Login from "./components/login/Login";
import { MainContext } from "./components/context/MainContext";
import { useEffect, useState } from "react";
import './App.css';
import Main from "./components/main";

function App() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const isAuth = JSON.parse(localStorage.getItem('auth'));

        if (isAuth) {
            setIsLogin(true);
        }
    }, [])


    return (
        <div className="app">
            <Layout>
                <MainContext.Provider value={{ isLogin, setIsLogin }}>
                    {
                        isLogin ? <Main /> : <Login />
                    }
                </MainContext.Provider>
            </Layout>
        </div>
    );
}

export default App;

import { Layout } from "antd";
import Login from "./components/login/Login";
import { MainContext } from "./components/context/MainContext";
import { useEffect, useState } from "react";
import './App.css';
import Main from "./components/main";
import { useSelector } from "react-redux";

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const { isAuth } = useSelector(state => state.user);

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
                        isAuth ? <Main /> : <Login />
                    }
                </MainContext.Provider>
            </Layout>
        </div>
    );
}

export default App;

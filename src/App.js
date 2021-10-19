import { Layout } from "antd";
import Login from "./components/login/Login";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Layout>
        <Login />
      </Layout>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Layout } from "antd";
import "./assets/styles/typography.scss";
import "./assets/styles/global.css";

function App() {
  return (
    <Layout>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </Layout>
  );
}

export default App;

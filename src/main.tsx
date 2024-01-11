import { createRoot, Root } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";

// const container = document.getElementById("root")!;
// const root = createRoot(container);
// root.render(<App />);

const baseUrl: string = document
  .getElementsByTagName("base")[0]
  .getAttribute("href")!;
const rootElement: HTMLElement = document.getElementById("root")!;
const root: Root = createRoot(rootElement);

root.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>
);

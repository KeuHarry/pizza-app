import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Order from "./Order";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Welcome to the Pizza App - Order Now</h1>
        <Order />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import ConfirmPage from "./pages/ConfirmPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/order"
          element={<OrderPage />}
        />
        <Route
          path="/order/confirm"
          element={<ConfirmPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

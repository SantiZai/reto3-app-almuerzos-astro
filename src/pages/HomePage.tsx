import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Bienvenido</h1>
      <h3>Para crear su pedido debe iniciar sesión.</h3>
      <button onClick={() => navigate("login")}>Iniciar sesión</button>
    </main>
  );
};

export default HomePage;

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <h1 className="mb-2">Bienvenido</h1>
      <h3 className="mb-4 text-xl">Para crear su pedido debe iniciar sesión.</h3>
      <button onClick={() => navigate("login")}>Iniciar sesión</button>
    </main>
  );
};

export default HomePage;

import { useNavigate } from "react-router-dom";

const ConfirmPage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <h1 className="text-4xl mb-4">¡Su pedido ha sido creado exitosamente!</h1>
      <h3 className="text-xl mb-4">
        Compruebe su casilla de correo para más información.
      </h3>
      <button onClick={() => navigate("/")}>Volver al inicio</button>
    </main>
  );
};

export default ConfirmPage;

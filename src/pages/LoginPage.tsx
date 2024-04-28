import { useState } from "react";
import { login } from "../utils/data";
import { userStore } from "../utils/state";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState<{
    fullname: string;
    identifier: string;
  }>({ fullname: "", identifier: "" });

  const updateUser = userStore((state) => state.setUser);

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(formData).then((res) => {
      if (res.status !== 200) return;
      updateUser(res.data);
      navigate("/order")
    });
  };

  return (
    <main>
      <h1 className="text-4xl mb-8">Ingresar a mi cuenta</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col"
      >
        <label
          htmlFor="fullname"
          className="text-left text-gray-300 mb-2"
        >
          Nombre completo
        </label>
        <input
          type="text"
          id="fullname"
          value={formData.fullname}
          onChange={handleChange}
          className="w-full mx-auto px-4 py-2 rounded-md mb-4"
        />
        <label
          htmlFor="identifier"
          className="text-left text-gray-300 mb-2"
        >
          Identificador
        </label>
        <input
          type="text"
          id="identifier"
          value={formData.identifier}
          onChange={handleChange}
          className="w-full mx-auto px-4 py-2 rounded-md mb-4"
        />
        <input
          type="submit"
          value="Ingresar"
          className="button"
        />
      </form>
    </main>
  );
};

export default LoginPage;

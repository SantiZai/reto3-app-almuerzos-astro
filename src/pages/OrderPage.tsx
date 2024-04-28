import { useEffect, useState } from "react";
import { getMenus } from "../utils/data";
import { Menu } from "../utils/models";
import { userStore } from "../utils/state";
import Card from "../components/Card";

const OrderPage = () => {
  const [menus, setMenus] = useState<Menu[]>();
  const [entrada, setEntrada] = useState("");
  const [principal, setPrincipal] = useState("");
  const [postre, setPostre] = useState("");

  const user = userStore((state) => state.user);

  useEffect(() => {
    getMenus("senior").then((res) => setMenus(res));
  }, []);

  return (
    <main>
      <h1 className="text-4xl">Creá tu orden</h1>
      <section>
        {menus && menus.length > 0 ? (
          <>
            <h3 className="text-2xl mt-4">Entrada</h3>
            <ul>
              {menus
                .filter((men) => men.type === "entrada")
                .map((menu: Menu) => (
                  <Card
                    menu={menu}
                    key={menu.id}
                  />
                ))}
            </ul>
            <h3 className="text-2xl mt-4">Plato principal</h3>
            <ul>
              {menus
                .filter((men) => men.type === "principal")
                .map((menu: Menu) => (
                  <Card
                    menu={menu}
                    key={menu.id}
                  />
                ))}
            </ul>
            <h3 className="text-2xl mt-4">Postre</h3>
            <ul>
              {menus
                .filter((men) => men.type === "postre")
                .map((menu: Menu) => (
                  <Card
                    menu={menu}
                    key={menu.id}
                  />
                ))}
            </ul>
          </>
        ) : (
          <h4>No hay menús disponibles</h4>
        )}
      </section>
    </main>
  );
};

export default OrderPage;

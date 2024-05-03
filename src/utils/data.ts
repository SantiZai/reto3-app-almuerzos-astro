import { API_BASE } from "./constants";
import { Order } from "./models";

const generateConfig = (method: string, body?: any) => {
  switch (method) {
    case "POST":
      return {
        method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "Application/json",
        },
      };
    case "GET":
      return {
        method,
        headers: {
          "Content-Type": "Application/json",
        },
      };
  }
};

export const getMenus = async (position: string) => {
  const results = await fetch(
    `${API_BASE}/menus/${position}`,
    generateConfig("GET")
  );
  const data = await results.json();
  return data;
};

export const login = async (credentials: {
  fullname: string;
  identifier: string;
}) => {
  const result = await fetch(
    `${API_BASE}/auth/login`,
    generateConfig("POST", {
      fullname: credentials.fullname.toLowerCase().trim(),
      identifier: credentials.identifier.toLowerCase().trim(),
    })
  );
  const data = await result.json();
  return { data, status: result.status };
};

export const createOrder = async (order: Order, email: string) => {
  if (order.employeeid.length <= 0) {
    return { message: "Inicie sesión para crear una orden" };
  }
  const result = await fetch(
    `${API_BASE}/orders`,
    generateConfig("POST", {
      order,
      to: email,
      from: "santiagozaidandev@gmail.com",
      subject: "¡Orden creada exitosamente!",
      text: "Su pedido se ha creado con éxito y ya se encuentra en proceso!!",
    })
  );
  const data = await result.json();
  console.log(data);
  return { data, status: result.status };
};

import { API_BASE } from "./constants";

const generateConfig = (method: string, body?: any) => {
  return method === "POST"
    ? {
        method: method,
        body,
        headers: {
          "Content-Type": "Application/json",
        },
      }
    : {
        method: method,
        headers: {
          "Content-Type": "Application/json",
        },
      };
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
    generateConfig("POST", credentials)
  );
  const data = await result.json();
  return data;
};

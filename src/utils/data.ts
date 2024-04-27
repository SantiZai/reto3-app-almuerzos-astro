import { API_BASE } from "./constants";

const generateConfig = (method: string, body?: any) => {
  switch (method) {
    case "POST":
      const credentials = {
        fullname: body.fullname.toLowerCase().trim(),
        identifier: body.identifier.toString().trim(),
      };
      return {
        method: method,
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "Application/json",
        },
      };
    case "GET":
      return {
        method: method,
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
    generateConfig("POST", credentials)
  );
  const data = await result.json();
  return { data, status: result.status };
};

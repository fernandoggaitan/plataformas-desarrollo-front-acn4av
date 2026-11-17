import api from "./api";

export const loginRequest = async (email, contrasena) => {
  // Axios serializa automáticamente el objeto a JSON
  // y lo envía a http://localhost:3000/login
  const response = await api.post('/login', {
    email,
    contrasena,
  });
  
  return response.data;
};

export const welcomeRequest = async (token) => {
  const response = await api.get('/welcome', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
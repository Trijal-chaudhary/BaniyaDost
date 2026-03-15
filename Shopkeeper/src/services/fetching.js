const BacUrl = "http://localhost:3000"
export const signupApi = async (data) => {
  const response = await fetch(`${BacUrl}/api/shop/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data }),
    credentials: "include"
  })
  return response.json();
}
export const LoginShop = async (data) => {
  const response = await fetch(`${BacUrl}/api/shop/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
    credentials: "include"
  })
  return response.json();
}
export const islogged = async (data) => {
  const response = await fetch(`${BacUrl}/api/shop/islogged`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
    credentials: "include"
  })
  return response.json();
} 
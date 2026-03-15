const BacUrl = "http://localhost:3000"
export const signupApi = async (data) => {
  const response = await fetch(`${BacUrl}/api/whole/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data }),
    credentials: "include"
  })
  return response.json();
}
export const loginWhole = async (data) => {
  const response = await fetch(`${BacUrl}/api/whole/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data }),
    credentials: "include"
  })
  return response.json();
}
export const wholeIsLogged = async (data) => {
  const response = await fetch(`${BacUrl}/api/whole/isLogged`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data }),
    credentials: "include"
  })
  return response.json();
}
export const AddProductapi = async (data) => {
  const response = await fetch(`${BacUrl}/api/whole/addproduct`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data }),
    credentials: "include"
  })
  return response.json();
}
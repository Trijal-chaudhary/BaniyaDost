const BacUrl = "https://baniyadostbackend.onrender.com"
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
export const wholeDetails = async (data) => {
  const response = await fetch(`${BacUrl}/api/shop/wholedetails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
    credentials: "include"
  })
  return response.json();
}
export const wholeByIdForProduct = async (data) => {
  const response = await fetch(`${BacUrl}/api/whole/wholebyid`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
    credentials: "include"
  })
  return response.json();
}
export const ShopOrderProduct = async ({ productAdded, id }) => {
  const response = await fetch(`${BacUrl}/api/shop/orderproduct`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productAdded, id }),
    credentials: "include"
  })
  return response.json();
}
export const postShopLoggedout = async (data) => {
  const response = await fetch(`${BacUrl}/api/shop/loggedout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  })
  return response.json();
} 
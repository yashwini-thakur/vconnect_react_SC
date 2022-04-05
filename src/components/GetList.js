export function GetList() {
  return fetch("https://reqres.in/api/products/").then((data) => data.json());
}

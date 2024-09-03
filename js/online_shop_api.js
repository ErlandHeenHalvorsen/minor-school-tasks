const baseUrl = "https://v2.api.noroff.dev";

async function getOnlineShop() {
  let response = await fetch(`${baseUrl}/online-shop`);
  const res = await response.json();
  const data = res.data;
  console.log(data);
}

getOnlineShop();

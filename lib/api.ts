const API_BASE_URL = 'https://dummyjson.com';

export async function getProducts() {
  const res = await fetch(`${API_BASE_URL}/products`);
  return res.json();
}

export async function getProduct(id: string) {
  const res = await fetch(`${API_BASE_URL}/products/${id}`);
  return res.json();
}

export async function searchProducts(query: string) {
  const res = await fetch(`${API_BASE_URL}/products/search?q=${query}`);
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${API_BASE_URL}/products/categories`);
  return res.json();
}

export async function getProductsByCategory(category: string) {
  const res = await fetch(`${API_BASE_URL}/products/category/${category}`);
  return res.json();
}
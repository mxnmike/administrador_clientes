export async function obtenerClientes() {
  return await (await fetch(import.meta.env.VITE_API_URL)).json()
}

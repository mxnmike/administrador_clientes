export async function obtenerClientes() {
  return await (await fetch(import.meta.env.VITE_API_URL)).json()
}

export async function obtenerCliente(id) {
  return await (await fetch(`${import.meta.env.VITE_API_URL}/${id}`)).json()
}
export async function agregarCliente(datos) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: { 'Content-Type': 'application/json' },
    })
    await respuesta.json()
  } catch (error) {
    console.log(error)
  }
}

export async function actualizarCliente({ id, datos }) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: { 'Content-Type': 'application/json' },
    })
    await respuesta.json()
  } catch (error) {
    console.log(error)
  }
}

export async function eliminarCliente(id) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE',
    })
    await respuesta.json()
  } catch (error) {
    console.log(error)
  }
}

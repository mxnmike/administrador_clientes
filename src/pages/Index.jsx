import { useLoaderData } from 'react-router-dom'
import Client from '../components/Client'
import { obtenerClientes } from '../data/clientes'

export function loader() {
  const clientes = obtenerClientes()
  return clientes
}

function Index() {
  const clients = useLoaderData()
  console.log(clients)

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className='mt-3'>Administra Tus Clientes</p>
      {clients.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-500 text-white'>
            <tr>
              <th className='p-2'>Clients</th>
              <th className='p-2'>Contact</th>
              <th className='p-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <Client
                key={client.id}
                client={client}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-center mt-10'> No Hay Clientes Aun</p>
      )}
    </>
  )
}

export default Index

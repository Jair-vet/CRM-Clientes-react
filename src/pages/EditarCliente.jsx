import { obtenerClientes } from "../data/clientes";

export const loader = async ({params}) => {
    const cliente = await obtenerClientes(params.clienteId)
    if(Object.values(cliente).length === 0 ){
        throw new Response('', {
            status: 404,
            statusText: 'El Cliente no fue encontrado'
        })
    }

    return cliente
}


export const EditarCliente = () => {


  return (
    <h1>Editar Clientes</h1>

  )
}

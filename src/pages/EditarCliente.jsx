import { obtenerClientes } from "../data/clientes";

export const loader = async ({params}) => {
    const cliente = await obtenerClientes(params.clienteId)
    console.log(cliente);

    return cliente
}

export const EditarCliente = () => {


  return (
    <h1>Editar Clientes</h1>

  )
}

import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { Error } from "../components/Error";
import { Formulario } from "../components/Formulario";
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

    const navigate = useNavigate()
    const cliente = useLoaderData()

  return (
    <>
      <h1 className="font-extrabold text-4xl text-blue-900 uppercase md:text-left text-center">Editar Cliente</h1>
      <p className="mt-3 md:text-left text-center">Modifica los datos de un Cliente</p>

      <div className="flex md:justify-end justify-center mt-3">
        <button 
          onClick={() => navigate('/')}
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-md">
          Volver
        </button>
      </div>

      <div className="bg-gray-100 shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-7">
        <Form
          method="post"
          noValidate
        >
          {/* { errores?.length && errores.map( (error, i) => 
            <Error key={i}>{error}</Error>
          ) } */}
          <Formulario
            cliente={ cliente }
          />

          <input 
            type="submit"
            className="btn-submit"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>

  )
}

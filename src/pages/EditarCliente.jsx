import { Form, redirect, useActionData, useLoaderData, useNavigate } from "react-router-dom";
import { Error } from "../components/Error";
import { Formulario } from "../components/Formulario";
import { actualizarCliente, obtenerClientes } from "../data/clientes";


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

export  async function action({request, params}) {
  
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const email = formData.get('email')

    // Validación
    const errores = []
    if(Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios')
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!regex.test(email)) {
        errores.push('El Email no es válido')
    }

    // Retornar datos si hay errores
    if(Object.keys(errores).length) {
        return errores
    }

    // Actualizar el cliente
    await actualizarCliente(params.clienteId, datos)
    return redirect('/')
  
    // return { ok: true };
  }

export const EditarCliente = () => {

    const navigate = useNavigate()
    const cliente = useLoaderData()
    const errores = useActionData()

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
          { errores?.length && errores.map( (error, i) => 
            <Error key={i}>{error}</Error>
          ) }
          <Formulario
            cliente={ cliente }
          />

          <input 
            type="submit"
            className="btn-submit"
            value="Guardar Cliente"
          />
        </Form>
      </div>
    </>

  )
}

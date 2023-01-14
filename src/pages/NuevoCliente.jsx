import { Form, useNavigate } from "react-router-dom"
import { Formulario } from "../components/Formulario"

export  async function action({request}) {
  
  const formDat = await request.formData()
  console.log(formDat.get('nombre'));
  
  return { ok: true };
}

export const NuevoCliente = () => {

  const navigate = useNavigate()
  
  return (
    <>
      <h1 className="font-extrabold text-4xl text-blue-900 uppercase md:text-left text-center">Nuevo Cliente</h1>
      <p className="mt-3 md:text-left text-center">Llena todos los Campos para registrar un nuevo Cliente</p>

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
        >
          <Formulario />

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

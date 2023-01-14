import { Form, useActionData, useNavigate } from "react-router-dom"
import { Error } from "../components/Error"
import { Formulario } from "../components/Formulario"

export  async function action({request}) {
  
  const formDat = await request.formData()
  const datos = Object.fromEntries(formDat)
  const email = formDat.get('email')

  // Validación
  const errores = []
  if( Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }

  // Validar email formato adecuado
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if( !regex.test(email) ){
    errores.push('El email no es Valido')
  }
  
  // Retornar datos si hay errores
  if( Object.keys(errores).length ){
    return errores
  }

  return { ok: true };
}

export const NuevoCliente = () => {

  const errores = useActionData()
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
          noValidate
        >
          { errores?.length && errores.map( (error, i) => 
            <Error key={i}>{error}</Error>
          ) }
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

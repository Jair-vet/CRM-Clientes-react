import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {

    const error = useRouteError()
    console.log(error.message);

  return (
    <div className="space-y-8">
        <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-800">CRM - Clientes</h1>
        <p className="text-center font-bold text-2xl uppercase text-gray-500">Hubo un error</p>
        <p className="text-center text-red-500">{ error.message }</p>
    </div>
  )
}

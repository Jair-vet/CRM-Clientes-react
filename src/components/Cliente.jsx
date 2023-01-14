
export const Cliente = ({cliente}) => {

    const { nombre, empresa, email, telefono, id } = cliente

  return (
    <tr className="border-b">
        {/* Cliente */}
        <td className="p-6">
            <p className="text-xl font-bold">{nombre}</p>
            <p className="text-sm font-light text-gray-400">{empresa}</p>
        </td>
        {/* Contacto */}
        <td className="p-6">
            <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">email: </span>{email}</p>
            <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">tel: </span>{telefono}</p>
        </td>
        {/* Acciones */}
        <td className="p-6 md:gap-2 md:flex md:space-y-0 space-y-2">
            <button
                type="button"
                className="bg-blue-700 text-white p-2 rounded-md w-full hover:bg-blue-600 font-bold text-xs uppercase"
            >
                Editar
            </button>
            <button
                type="button"
                className="bg-red-700 text-white p-2 rounded-md w-full hover:bg-red-600 font-bold text-xs uppercase"
            >
                Eliminar
            </button>
        </td>
    </tr>
  )
}

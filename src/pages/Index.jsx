import { useLoaderData } from "react-router-dom"
import { Cliente } from "../components/Cliente";

export const loader = () => {

  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Yarkast JS'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Talink'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'iTijuana'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Agile Thought'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Benchmark'
    },
];

  return clientes
}

export const Index = () => {
  
  const clientes = useLoaderData()  


  return (
    <>
      <h1 className="font-extrabold text-4xl text-blue-900 uppercase md:text-left text-center">Clientes</h1>
      <p className="mt-3 md:text-left text-center">Administra tus Clientes</p>

      { 
        clientes.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto text-center">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="p-2 uppercase">Cliente</th>
                <th className="p-2 uppercase">Contacto</th>
                <th className="p-2 uppercase">Acciones</th>
              </tr>

            </thead>
            <tbody>
              {clientes.map(cliente => (
                <Cliente 
                  cliente={ cliente }
                  key={ cliente.id }
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center mt-10 uppercase">No hay Clientes Aún</p>
        )
      }
    </>
  )
}

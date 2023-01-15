
export const obtenerCliente = async () => {

    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()

    return resultado
}

//  Obtener Cliente
export const obtenerClientes = async (id) => {

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = await respuesta.json()

    return resultado
}

// Agregar un Cliente POST 
export const agregarCliente = async (datos) => {

    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: { 'Content-Type': 'application/json' }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error);
    }
    

}

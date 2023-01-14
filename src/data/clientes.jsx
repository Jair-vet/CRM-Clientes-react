
export const obtenerCliente = async () => {
    const url = ''
    const resp = await fetch(import.meta.env.VITE_API_URL)
    const res = await resp.json()

    console.log(res);
}
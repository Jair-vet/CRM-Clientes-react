
export const Formulario = ({cliente}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="formulario-label"
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="formulario"
                    placeholder="Nombre del Cliente"
                    name="nombre"
                />
            </div>
            <div className="mb-4">
                <label
                    className="formulario-label"
                    htmlFor="empresa"
                >Empresa:</label>
                <input 
                    id="empresa"
                    type="text"
                    className="formulario"
                    placeholder="Empresa del Cliente"
                    name="empresa"
                />
            </div>

            <div className="mb-4">
                <label
                    className="formulario-label"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="formulario"
                    placeholder="Email del Cliente"
                    name="email"
                />
            </div>

            <div className="mb-4">
                <label
                    className="formulario-label"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input 
                    id="telefono"
                    type="tel"
                    className="formulario"
                    placeholder="Teléfono del Cliente"
                    name="telefono"
                />
            </div>

            <div className="mb-4">
                <label
                    className="formulario-label"
                    htmlFor="notas"
                >Notas:</label>
                <textarea
                    as="textarea"
                    id="notas"
                    type="text"
                    className="formulario h-40 align-self"
                    placeholder="Notas del Cliente"
                    name="notas"
                />
            </div>
        </>
    )
}


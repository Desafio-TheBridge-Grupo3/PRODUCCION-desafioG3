import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const CargaDatos = () => {

  const navigate = useNavigate()

  const rellenarTabla = () => {
    navigate(`/home`)
  }

  const [selectedFile, setSelectedFile] = useState(null);
  const [completed, setCompleted] = useState(false)

  const hiddenFileInput = useRef(null);


  const handleChange = (event) => {
    const archivo = event.target.files[0];
    setSelectedFile(archivo);
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  }
  const deshabilitado = () => {
    console.log("Este botón está deshabilitado, sube un archivo")
  }

const handleFile = async()=>{
  setCompleted(true)
  const res = await axios.post(`${import.meta.env.VITE_INVOICE}/invoice`, 
  selectedFile,
  {
    headers: { "Content-Type": selectedFile.type },
    
  }
  )
  console.log(res)
}

  return (
    <>
      <article className="carga">
        <article id="metodo">
          <h2 id="pregunta">¿Cómo quieres cargar los datos?</h2>

          <button className={selectedFile ? "completed" : "file-select"} onClick={handleClick} >
            <input type="file" className="inputfile" onChange={handleChange} ref={hiddenFileInput} />
            <label for="file-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="iborrainputfile" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
              <span>{selectedFile?.name || "Seleccionar archivo"}</span>
            </label>
          </button>
          <p id="mini">Adjunta aquí tu factura. Formatos aceptados: .pdf y .jpg</p>
          <button className={selectedFile ? 'opciones' : 'no-continuar'} onClick={handleFile}>Subir factura</button>
          <p id="cambio" onClick={rellenarTabla}>Rellenar datos manualmente</p>
        </article>

        <button className={selectedFile && completed ? 'boton-con-archivo' : 'boton-sin-archivo'} onClick={selectedFile ? rellenarTabla : deshabilitado}>Continuar</button>
      </article>
    </>
  );
};

export default CargaDatos;

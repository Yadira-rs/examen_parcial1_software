import React, { useState } from 'react';
import './App.css';
import mifoto from './mifoto.png';
import logo_utd from './logo_utd.png';

function App() {
  const [verDescargas, setVerDescargas] = useState(false);
  const nombreAlumno = "Iris Yadira Santiago Santos";

  if (verDescargas) {
    return (
      <div className="pantalla-oscura">
        <div className="centro-descargas-directo">
          <h1 className="titulo-seccion">Centro de Descargas</h1>
          <h3>Haz clic en los botones para obtener tus archivos PDF.</h3>
          <div className="lista-botones">
            
            {/* 1. Comandos React */}
            <a href="/comandos.pdf" download="comandos.pdf">
              <button className="btn btn-azul">COMANDOS BÁSICOS DE REACT</button>
            </a>

            {/* 2. ISO / IEEE */}
            <a href="/ieee.pdf" download="ieee.pdf">
              <button className="btn btn-verde">ISO / ESTANDAR IEEE</button>
            </a>

            {/* 3. Requerimientos */}
            <a href="/requerimientos.pdf" download="requerimientos.pdf">
              <button className="btn btn-gris">REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES</button>
            </a>

            {/* 4. Python SHA-256 */}
            <a href="/sha_256.pdf" download="sha_256.pdf">
              <button className="btn btn-gris">CÓDIGO PYTHON ALGORITMO SHA-256</button>
            </a>

            <button className="btn btn-gris" onClick={() => setVerDescargas(false)} style={{marginTop: '20px', border: '1px solid #555'}}>
              VOLVER AL PERFIL
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pantalla-oscura">
      <div className="contenedor-perfil">
        <img src={mifoto} alt="Perfil" className="foto-perfil-simple" />
        <h1 className="evaluacion-texto">EVALUACIÓN PARCIAL 1</h1>
        <p className="alumno-texto">Alumno: {nombreAlumno}</p>

        <h1>
          Evaluación parcial1
        </h1>
        <h3>Alumna: Santiago Santos Iris yadira</h3>
        <h3>Profe: Isaac Reyes Lara</h3>
        <h2>Carrera: Desarrollo de Software Multiplataforma</h2>
        <h2>Universidad: Universidad Tecnológica de Durango</h2>
        <img src={logo_utd} alt="Logo Universidad Tecnológica de Durango" className="logo_utd" />

        

        <div className="enlaces-inferiores">
          <a href="https://www.linkedin.com/in/santiago-santos-iris-yadira-ba481a394/?trk=li_LOL_SPIN_global_careers_jobsgtm_conv_acq_july2022_spinv1" target="_blank" rel="noreferrer">
            Visitar mi perfil de Linkedin
          </a>
          <button onClick={() => setVerDescargas(true)} className="boton-enlace">
            Documento Parcial1
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
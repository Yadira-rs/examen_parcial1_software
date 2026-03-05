import React, { useState } from 'react';
import './App.css';
import mifoto from './mifoto.png';
import logo_utd from './logo_utd.png';

// Importación de imágenes para los modales de metodologías
import modelocascada from './img/modelocascada.png';
import modelov from './img/modelov.png';
import agiles from './img/metodologiasagiles.png';
import scrum from './img/scrum.png';
import kanban from './img/kanban.png';
import hibridas from './img/hibridas.png';

function App() {
  // Estados para navegación y modal
  const [vista, setVista] = useState('perfil'); 
  const [imagenModal, setImagenModal] = useState(null); 
  
  const nombreAlumno = "Iris Yadira Santiago Santos";

  // ------------------- PANTALLA: PARCIAL 1 (DESCARGAS) -------------------
  if (vista === 'parcial1') {
    return (
      <div className="pantalla-oscura">
        <div className="centro-descargas-directo">
          <h1 className="titulo-seccion">Centro de Descargas - Parcial 1</h1>
          <div className="lista-botones">
            <a href="/comandos.pdf" download><button className="btn btn-azul">COMANDOS BÁSICOS DE REACT</button></a>
            <a href="/ieee.pdf" download><button className="btn btn-verde">ISO / ESTANDAR IEEE</button></a>
            <a href="/requerimientos.pdf" download><button className="btn btn-gris">REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES</button></a>
            <a href="/sha_256.pdf" download><button className="btn btn-gris">CÓDIGO PYTHON ALGORITMO SHA-256</button></a>
            <button className="btn btn-gris" onClick={() => setVista('perfil')} style={{marginTop: '20px'}}>VOLVER AL PERFIL</button>
          </div>
        </div>
      </div>
    );
  }

  // ------------------- PANTALLA: PARCIAL 2 (METODOLOGÍAS) -------------------
  if (vista === 'parcial2') {
    return (
      <div style={{ backgroundColor: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'Arial, sans-serif', textAlign: 'center', color: '#333' }}>
        <h1 style={{ fontWeight: 'bold' }}>METODOLOGÍAS DE DESARROLLO DE SW</h1>
        <h2>¿Qué es una metodología de desarrollo de software?</h2>
        <p style={{ maxWidth: '900px', margin: '20px auto', fontSize: '16px', color: '#555' }}>
          Las metodologías de desarrollo de software son un conjunto de técnicas y métodos organizativos que se aplican para diseñar soluciones de software informático.
        </p>

        <h2 style={{ marginTop: '40px', fontWeight: 'bold' }}>TIPOS DE METODOLOGÍAS</h2>
        <hr style={{ width: '90%', border: '0.5px solid #eee', margin: '20px auto' }} />

        {/* Botones de Metodologías */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
          <button onClick={() => setImagenModal({titulo: "Cascada", img: modelocascada})} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 30px', borderRadius: '5px', cursor: 'pointer' }}>CASCADA</button>
          <button onClick={() => setImagenModal({titulo: "Modelo V", img: modelov})} style={{ backgroundColor: '#6c757d', color: 'white', border: 'none', padding: '10px 30px', borderRadius: '5px', cursor: 'pointer' }}>MODELO V</button>
          <button onClick={() => setImagenModal({titulo: "Ágiles", img: agiles})} style={{ backgroundColor: '#198754', color: 'white', border: 'none', padding: '10px 30px', borderRadius: '5px', cursor: 'pointer' }}>ÁGILES</button>
          <button onClick={() => setImagenModal({titulo: "Scrum", img: scrum})} style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '10px 30px', borderRadius: '5px', cursor: 'pointer' }}>SCRUM</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button onClick={() => setImagenModal({titulo: "Kanban", img: kanban})} style={{ backgroundColor: '#ffc107', color: 'black', border: 'none', padding: '10px 30px', borderRadius: '5px', cursor: 'pointer' }}>KANBAN</button>
          <button onClick={() => setImagenModal({titulo: "XP", img: agiles})} style={{ backgroundColor: '#0dcaf0', color: 'black', border: 'none', padding: '10px 30px', borderRadius: '5px', cursor: 'pointer' }}>XP</button>
          <button onClick={() => setImagenModal({titulo: "Híbridas", img: hibridas})} style={{ backgroundColor: '#212529', color: 'white', border: 'none', padding: '10px 30px', borderRadius: '5px', cursor: 'pointer' }}>HÍBRIDAS</button>
        </div>

        <hr style={{ width: '90%', border: '0.5px solid #eee', margin: '40px auto' }} />
        
        <h2 style={{ fontWeight: 'bold' }}>LINK A TABLERO DE TRABAJO</h2>
        <a href="https://lucyci.atlassian.net/" target="_blank" rel="noreferrer" style={{ display: 'inline-block', border: '1px solid #007bff', color: '#007bff', padding: '5px 25px', borderRadius: '5px', textDecoration: 'none' }}>---- JIRA ----</a>

        <div style={{ margin: '40px 0' }}>
          <button onClick={() => setVista('perfil')} style={{ border: '1px solid #007bff', color: '#007bff', background: 'white', padding: '10px 30px', borderRadius: '5px', cursor: 'pointer' }}>
            ---- REGRESAR MENÚ PRINCIPAL ----
          </button>
        </div>

        <h3 style={{ fontWeight: 'normal' }}>Escribe la frase que colocaste en el tablero de metodología ágil:</h3>
        <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '20px 0' }}>
          "TU MENTE ES TU JARDÍN SIEMBRA EN ELLA LO QUE DESEAS VER FLORECER"
        </p>
        <h2 style={{ fontWeight: 'bold' }}>Alumno: {nombreAlumno}</h2>

        {/* Modal para visualizar imágenes */}
        {imagenModal && (
          <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3000 }}>
            <div style={{ background: "white", padding: "20px", borderRadius: "10px", maxWidth: "80%", textAlign: "center" }}>
              <button onClick={() => setImagenModal(null)} style={{ float: 'right', border: 'none', background: 'none', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
              <h3 style={{ marginBottom: '15px' }}>{imagenModal.titulo}</h3>
              <img src={imagenModal.img} alt="metodologia" style={{ width: '100%' }} />
            </div>
          </div>
        )}
      </div>
    );
  }

  // ------------------- PANTALLA PRINCIPAL -------------------
  return (
    <div className="pantalla-oscura">
      <div className="contenedor-perfil">
        <img src={mifoto} alt="Perfil" className="foto-perfil-simple" />
        <h1 className="evaluacion-texto">EVALUACIÓN INTEGRAL</h1>
        <p className="alumno-texto">Alumna: {nombreAlumno}</p>
        
        <div style={{ margin: '20px 0' }}>
          <img src={logo_utd} alt="Logo UTD" style={{ width: '120px' }} />
          <h3 style={{ color: 'white' }}>Universidad Tecnológica de Durango</h3>
        </div>

        <div className="enlaces-inferiores">
          <button onClick={() => setVista('parcial1')} className="boton-enlace">
            Documento Parcial 1
          </button>
          <button onClick={() => setVista('parcial2')} className="boton-enlace" style={{ backgroundColor: '#28a745' }}>
            Metodologías Parcial 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
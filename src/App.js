import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
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

const handleRedirect = () => {
  window.open("https://iris23rs2006.atlassian.net/jira/software/projects/CR/boards/34", "_blank", "noopener,noreferrer");
};

const Dashboard = ({ user }) => (
  <div className="App-header" style={{ minHeight: "100vh", backgroundColor: "#282c34", color: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
    <img src={mifoto} style={{ borderRadius: '50%', width: '150px', height: '150px', marginBottom: '20px', objectFit: 'cover', objectPosition: 'center top' }} alt="Perfil" />

    <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}>Bienvenido(a), {user?.name}</h1>
    {user?.email && <h4 style={{ fontWeight: 'normal', color: '#ccc' }}>{user.email}</h4>}

    <h2 style={{ marginTop: '30px', marginBottom: '40px', fontWeight: 'bold' }}>EVALUACIÓN PARCIAL 3</h2>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <a href="/parcial3.pdf" download="parcial3.pdf" style={{ textDecoration: 'none' }}>
        <button style={{ padding: '5px 15px', backgroundColor: 'white', border: 'none', color: 'black', fontSize: '12px', fontWeight: 'normal', cursor: 'pointer' }}>
          DESCARGAR DOCUMENTO ERS DEL PROYECTO
        </button>
      </a>

      <button onClick={handleRedirect} style={{ padding: '5px 15px', backgroundColor: 'white', border: 'none', color: 'black', fontSize: '12px', fontWeight: 'normal', cursor: 'pointer' }}>
        TABLERO JIRA PROYECTO SIBA
      </button>

      <button onClick={() => window.location.reload()} style={{ padding: '5px 15px', backgroundColor: 'white', border: 'none', color: 'black', fontSize: '12px', fontWeight: 'normal', cursor: 'pointer' }}>
        CERRAR SESIÓN PARCIAL 3
      </button>
    </div>
  </div>
);


function App() {
  // Estados para navegación y modal
  const [vista, setVista] = useState('perfil');
  const [imagenModal, setImagenModal] = useState(null);

  // Estados para el login de Google
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const clientId = "521707700999-pdir1afkg76cd4oguc11v5c8ra0dgg95.apps.googleusercontent.com";

  const onSuccess = (response) => {
    console.log("Login Success:", response);
    const decoded = jwtDecode(response.credential);
    console.log("Token Decodificado:", decoded);
    setUserData(decoded);
    setIsLoggedIn(true);
  };

  const onError = () => {
    console.log("Login Failed");
  };

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
            <button className="btn btn-gris" onClick={() => setVista('perfil')} style={{ marginTop: '20px' }}>VOLVER AL PERFIL</button>
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
          <button onClick={() => setImagenModal({ titulo: "Cascada", img: modelocascada })} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 30px', borderRadius: '5px', cursor: 'pointer' }}>CASCADA</button>
          <button onClick={() => setImagenModal({ titulo: "Modelo V", img: modelov })} style={{ backgroundColor: '#6c757d', color: 'white', border: 'none', padding: '10px 30px', borderRadius: '5px', cursor: 'pointer' }}>MODELO V</button>
          <button onClick={() => setImagenModal({ titulo: "Ágiles", img: agiles })} style={{ backgroundColor: '#198754', color: 'white', border: 'none', padding: '10px 30px', borderRadius: '5px', cursor: 'pointer' }}>ÁGILES</button>
          <button onClick={() => setImagenModal({ titulo: "Scrum", img: scrum })} style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '10px 30px', borderRadius: '5px', cursor: 'pointer' }}>SCRUM</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button onClick={() => setImagenModal({ titulo: "Kanban", img: kanban })} style={{ backgroundColor: '#ffc107', color: 'black', border: 'none', padding: '10px 30px', borderRadius: '5px', cursor: 'pointer' }}>KANBAN</button>
          <button onClick={() => setImagenModal({ titulo: "XP", img: agiles })} style={{ backgroundColor: '#0dcaf0', color: 'black', border: 'none', padding: '10px 30px', borderRadius: '5px', cursor: 'pointer' }}>XP</button>
          <button onClick={() => setImagenModal({ titulo: "Híbridas", img: hibridas })} style={{ backgroundColor: '#212529', color: 'white', border: 'none', padding: '10px 30px', borderRadius: '5px', cursor: 'pointer' }}>HÍBRIDAS</button>
        </div>

        <hr style={{ width: '90%', border: '0.5px solid #eee', margin: '40px auto' }} />

        <h2 style={{ fontWeight: 'bold' }}>LINK A TABLERO DE TRABAJO</h2>
        <a href="https://iris23rs2006.atlassian.net/jira/software/projects/CR/boards/34" target="_blank" rel="noreferrer" style={{ display: 'inline-block', border: '1px solid #007bff', color: '#007bff', padding: '5px 25px', borderRadius: '5px', textDecoration: 'none' }}>---- JIRA ----</a>

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
    <GoogleOAuthProvider clientId={clientId}>
      {isLoggedIn ? (
        <Dashboard user={userData} />
      ) : (
        <div className="pantalla-oscura">
          <div className="contenedor-perfil">
            <img src={mifoto} alt="Perfil" className="foto-perfil-simple" />
            <h1 className="evaluacion-texto">ANÁLISIS Y DISEÑO DE SOFTWARE</h1>
            <p className="alumno-texto">Alumno(a): {nombreAlumno}</p>

            <div style={{ margin: '20px 0' }}>
              <img src={logo_utd} alt="Logo UTD" style={{ width: '120px' }} />
              <h3 style={{ color: 'white' }}>Universidad Tecnológica de Durango</h3>
            </div>

            {/* --- SECCIÓN DE ENLACES INTEGRADA --- */}
            <div className="enlaces-inferiores" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <a
                href="https://www.linkedin.com/in/santiago-santos-iris-yadira-ba481a394/?trk=li_LOL_SPIN_global_careers_jobsgtm_conv_acq_july2022_spinv1"
                target="_blank"
                rel="noreferrer"
              >
                Visitar mi perfil de Linkedin
              </a>
              <button onClick={() => setVista('parcial1')} className="boton-enlace">
                Documento Parcial1
              </button>
              <button onClick={() => setVista('parcial2')} className="boton-enlace">
                Documento Parcial2
              </button>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
              <GoogleLogin
                onSuccess={onSuccess}
                onError={onError}
                useOneTap
              />
            </div>
          </div>
        </div>
      )}
    </GoogleOAuthProvider>
  );
}

export default App;
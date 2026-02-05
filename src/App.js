import avatar from './avatar.png';
import logo_utd from "./logo_utd.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="App-logo" alt="logo" />
        <h1>
          Evaluación parcial1
        </h1>
        <h3>Alumna: Santiago Santos Iris yadira</h3>
        <h3>Profe: Isaac Reyes Lara</h3>
        <h2>Carrera: Desarrollo de Software Multiplataforma</h2>
        <h2>Universidad: Universidad Tecnológica de Durango</h2>
        <img src={logo_utd } alt="Logo Universidad Tecnológica de Durango" className="logo_utd " />

        <a
          className="App-link"
          href="https://www.linkedin.com/in/santiago-santos-iris-yadira-ba481a394/?trk=li_LOL_SPIN_global_careers_jobsgtm_conv_acq_july2022_spinv1"
          target="_blank"
          rel="noopener noreferrer"
        >
          ENLAZADO EN EL PERFIL DE MI LINKEDIN
        </a>
         <a
          className="App-link"
          href="https://www.medikt.com.mx/practicas/documentacion.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentación parcial1 
        </a>
      </header>
    </div>
  );
}

export default App;
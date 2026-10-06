import './App.css'
import Container from 'react-bootstrap/Container';
import CandidatosLista from './components/CandidatosLista'

export default function App(){

  const msj = 'Soy tu primer componente';

  return (
    <Container>
      <h1> Hola, <span className="cornflowerblue"> {msj} </span> </h1>
      <CandidatosLista />
    </Container>
  )

}

//export default App;
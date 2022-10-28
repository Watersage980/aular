//import Contador from "./components/contador";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Navbar from "./components/navbar";
import Content from './components/conteudo';

function App() {
  return (
    <>
      <Navbar/>
      <Content></Content>
    </>
  );
}

export default App;

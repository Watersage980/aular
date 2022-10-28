import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabela from './tabela';

export default function content() {
  return (
    <Container>
      <Row>
        <Col>Ultimate battle numba one</Col>
        <Col>Screw one side focused decks</Col>
      </Row>
      <br/>
      <Row>
        <Col>P(endulum)</Col>
        <Col>T(opological)</Col>
        <Col>S(upreme king)</Col>
        <Col>B(orrel)</Col>
      </Row>
      <br/>
      <Row>
        <Tabela></Tabela>
      </Row>
    </Container>
  );
}


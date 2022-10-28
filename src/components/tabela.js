import Table from 'react-bootstrap/Table';

export default function tabela() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Deckme</th>
          <th>Deckthem</th>
          <th>Ratio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>PTSB</td>
          <td>Flowanderbreeze</td>
          <td>1-2</td>
        </tr>
        <tr>
          <td>2</td>
          <td>PTSB</td>
          <td>Blue-eyes</td>
          <td>2-0</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Mix</td>
          <td>Flowanderbreeze</td>
          <td>2-1</td>
        </tr>
      </tbody>
    </Table>
  );
}


import {Container,Nav,Navbar} from 'react-bootstrap'
import React from 'react'


export default function Topo(){
    return(
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">YCS 2023</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#decklists">Decklists</Nav.Link>
                        <Nav.Link href="#matches">Matches</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
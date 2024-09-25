import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Confirmation_Login() {
    return (
        <div>
            <Link to="/">
                Home page
            </Link>
            <Container fluid className="vh-100">
                <Row className='h-100'>
                    <Col className="h-100 w-80 d-flex align-items-center justify-content-center">
                        <Alert key="success" variant="success" className="w-50 text-center py-5 display-5 ">
                            You Loged in successfully!
                        </Alert>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Confirmation_Login;

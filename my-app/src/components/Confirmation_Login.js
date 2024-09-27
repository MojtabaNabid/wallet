import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";

function Confirmation_Login() {

    function callSettingAPI() {
        const token = localStorage.getItem("userLoginToken");
        console.log("JWT Token: ", token) // check if token exists
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios.get('http://localhost:5005/api/Identity/Settings', config)
        .then((response) => {
            console.log(response.data); // Handle the data from the response
          })
        .catch((err) => {
        console.log(err.message); // Handle any errors
        });  
    }

    return (
        <div>
            <Link to="/">
                <Button variant="primary" className="m-4">Home page</Button>
            </Link>
            <Container fluid className="vh-100">
                <Row className='h-50'>
                    <Col className="w-80 d-flex align-items-center justify-content-center">
                        <Alert key="success" variant="success" className="w-50 text-center py-5 display-5 ">
                            You Loged in successfully!
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="dark" onClick={callSettingAPI}>Call Setting API</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Confirmation_Login;

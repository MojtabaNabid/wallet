import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../assets/imgages/wallet-logo.jpg'
import { Row, Col, Container } from 'react-bootstrap';

function Login() {

    const [formData, setformData] = useState({
        username: "",
        password: ""
    })

    function handleSumbit(e) {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className="App">
          <Container fluid className="vh-100">
            <Row className='h-100 d-flex align-items-center justify-content-center '>
              <Col>
                <Form className='login-form p-4 shadow' onSubmit={handleSumbit}>
                  <img src={logo} className='logo' alt="logo" />
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <FloatingLabel controlId='floatingUsername' label="Username" className='mb-3'>
                      <Form.Control type="email" 
                                    placeholder="Username or Eamil address" 
                                    onChange={e => setformData({...formData, username: e.target.value})}/>
                    </FloatingLabel>
                  </Form.Group>
    
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <FloatingLabel controlId='floatingPassword' label="Password" className='mb-3'>
                      <Form.Control type="password" 
                                    placeholder="Password"
                                    onChange={e => setformData({...formData, password: e.target.value})} />
                    </FloatingLabel>
                  </Form.Group>
    
                  <a className='forgetPassword mb-3'>Forget Password?</a>
    
                  <Button variant="primary" className='w-100 mt-3' type="submit">
                    Sing in
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      );
}

export default Login
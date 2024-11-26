import Nav from './Nav'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <Nav />
            
        </div>
    )
}

export default Home
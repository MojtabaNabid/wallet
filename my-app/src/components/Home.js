import Nav from './Nav';
import Menu from './Menu';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function Home() {
    const navigate = useNavigate();

    return (
            <>
                <Nav />
                <Menu />
            </>
    )
}

export default Home
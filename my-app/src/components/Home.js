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
            {/* <h1>
                Welcome to my <i>WALLET</i>
            </h1> */}
            {/* <Link to='/Login'>
                <Button variant="primary" className=' m-3' type="submit">
                        Login
                </Button>
            </Link> */}
        </div>
    )
}

export default Home
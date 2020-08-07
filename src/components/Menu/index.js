import React from 'react'; 
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from './Button/';
import {Link} from 'react-router-dom';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/home">
                <img className='Logo' src={Logo} alt = 'Logo'></img>
            </Link>
            {/* it makes the button act like a "a" tag */}
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu; 
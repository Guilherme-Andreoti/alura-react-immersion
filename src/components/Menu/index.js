import React from 'react'; 
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from './Button/';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/home">
                <img className='Logo' src={Logo} alt = 'Logo'></img>
            </a>
            {/* it makes the button act like a "a" tag */}
            <Button as="a" className="ButtonLink" href="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu; 
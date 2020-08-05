import React from 'react'; 
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/home">
                <img className='Logo' src={Logo} alt = 'Logo'></img>
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo Video
            </ButtonLink>
        </nav>
    );
}

export default Menu; 
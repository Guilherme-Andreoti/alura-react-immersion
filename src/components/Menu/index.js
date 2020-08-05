import React from 'react'; 
import Logo from '../../assets/img/logo.png';
import './Menu.css';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/home">
                <img className='Logo' src={Logo} alt = 'Logo'></img>
            </a>
            <a className="ButtonLink" href="/">
                Novo Video
            </a>
        </nav>
    );
}

export default Menu; 
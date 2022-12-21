import './Menu.css'
import { Link } from 'react-router-dom'
import React from 'react';

function Menu() {
    return (
        <section className='menu'>
            <div className='menuRotas'>
                <nav >
                <ul className='nav-list'>
                    <li >
                        < Link to="/" className='link' >Home</Link>
                    </li>
                    <li>
                        <Link to="/Elenco" className='link'>Elenco</Link>
                    </li>
                    <li >
                        <Link to="/Contato" className='link'>Homenagem</Link>
                    </li>
                </ul>
                </nav>
            </div>
        </section>

    )
}

export default Menu; 
import { Link } from 'react-router-dom';
import { NavibarComponent, MenuDiv } from '../styles/navbarStyle';

function Navbar() {
    return (
        <NavibarComponent>
            <Link to='/'>
                <h1>REPO<span>PROVAS</span></h1>
            </Link>
            <MenuDiv>
                <Link to='/'>
                    <h3>HOME</h3>
                </Link>
                <Link to='/about'>
                    <h3>SOBRE</h3>
                </Link>
            </MenuDiv>
        </NavibarComponent>
    );
}

export default Navbar;
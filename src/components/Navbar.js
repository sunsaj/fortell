import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <h1 className='nav-title'><Link className='nav-title' to='/'>Foretell</Link></h1>
            <div className="menu">
                <Link className='menu-item' to='/'>Home</Link>
                <Link className='menu-item' to='/about'>About</Link>
            </div>
           
        </nav>
     );
}
 
export default Navbar;
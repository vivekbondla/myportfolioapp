import './Header.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header">
      <div className="header__name">
        <NavLink to='/'><h3>VIVEK KUMAR BONDLA</h3></NavLink>
      </div>
      <div className='header__menu'>
          <div><NavLink to="/"><h3>Home</h3></NavLink></div>
          <div><NavLink to="/projects"><h3>Projects</h3></NavLink></div>
         
      </div>
    </div>
  );
};
export default Header;

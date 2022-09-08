import { NavLink } from 'react-router-dom';
import classes from '../Components/header.module.css';

const Header = () => {

  return (

    <header className={classes.header}>
      <nav>
        <ul>
        <li>
            <NavLink 
              activeClassName={classes.active} to='/'>
              <span className='header-numbers'>1 </span>Start
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/CodeExamples'>
            <span className='header-numbers'>2 </span>All Examples
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/CodeExamplesEasy'>
            <span className='header-numbers'>3 </span>Easy Examples
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/CodeExamplesMiddle'>
            <span className='header-numbers'>4 </span>Middle Examples
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/CodeExamplesHard'>
            <span className='header-numbers'>5 </span>Hard Examples
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/VideoExamples'>
            <span className='header-numbers'>6 </span>Videos
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/Sources'>
            <span className='header-numbers'>7 </span>Sources
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

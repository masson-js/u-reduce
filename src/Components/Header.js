import { NavLink } from 'react-router-dom';
import classes from '../Components/header.module.css';

const Header = () => {

  return (

    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/'
              activeClassName={classes.active}>
                <span className='header-numbers'>1 </span>Start
            </NavLink>
          </li>
          <li>
            <NavLink to='/CodeExamples'
              activeClassName={classes.active} >
              <span className='header-numbers'>2 </span>
              All Examples
            </NavLink>
          </li>
          <li>
            <NavLink to='/CodeExamplesEasy' 
              activeClassName={classes.active} >
              <span className='header-numbers'>3 </span>
              Easy Examples
            </NavLink>
          </li>
          <li>
            <NavLink to='/CodeExamplesMiddle'
            activeClassName={classes.active} >
            <span className='header-numbers'>4 </span>
            Middle Examples
            </NavLink>
          </li>
          <li>
            <NavLink to='/CodeExamplesHard' 
              activeClassName={classes.active}>
              <span className='header-numbers'>5 </span>
              Hard Examples
            </NavLink>
          </li>
          <li>
            <NavLink to='/VideoExamples' 
              activeClassName={classes.active}>
              <span className='header-numbers'>6 </span>
              Videos
            </NavLink>
          </li>
          <li>
            <NavLink to='/Sources'
              activeClassName={classes.active}>
              <span className='header-numbers'>7 </span>
              Sources
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import { NavLink } from 'react-router-dom';

import classes from '../Components/Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/CodeExamples'>
            CodeExamples
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/VideoExamples'>
            VideoExamples
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/Sources'>
            Sources
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// function Header() {

//   // const showExamples = {props};


//   return (
//     <div className="Header">
//       <ul class="nav">
//         <li className="HeaderButton"><span>Code Examples</span></li> 
//         <li><Link to="./Pages/CodeExamples" className="HeaderButton" href="https://www.w3schools.com/"><span>Video Examples</span></Link></li> 
//         <li><Link to="./Pages/CodeExamples" className="HeaderButton" href="https://www.w3schools.com/"><span>Sources</span></Link></li> 
//       </ul>
//     </div>
//   );
// }

// export default Header;
import React from 'react';


function Header(props) {

  const showExamples = {props};


  return (
    <div className="Header">
      <ul class="nav">
        <li><a className="HeaderButton" onClick={() => {showExamples()}}><span>Code Examples</span></a></li> 
        <li><a className="HeaderButton"><span>Video Examples</span></a></li> 
        <li><a className="HeaderButton"><span>Sources</span></a></li> 
    </ul>
    </div>
  );
}

export default Header;
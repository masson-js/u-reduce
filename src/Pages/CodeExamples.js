import React from 'react';

import './Examples.css';

function CodeExamples() {
  
  return (
    <div className="CodeExamplesDiv">
      <div id="id-001" className="Example EaseExample">
      <span className='difficultEasy'>Easy</span>
        <h1>
          Reduce 1 
        </h1>
        <p>
           is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
        </p>


      </div>
      <div id="id-002" className="Example Hardxample">
        <span className='difficultHard'>Hard</span>
        <h1>
        Reduce 2
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, remaining 
          essentially unchanged. It was popularised in the 1960s with 
          the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus 
          PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  );
  
}

export default CodeExamples;
import React from 'react';
import data from '../StorageExamples/DataExamples'

import './Examples.css';

function CodeExamples() {

  return (
    <>
      {data.map((example) => (
        <div className={example.nameComponent}>
          <header className="ExampleHeader">
            <h2 className="ExampleId"> {example.id}</h2>
            <h2 className="ExampleHeaderText"> {example.headerText}</h2>
            <h2 className={example.diffecaltLevel}>{example.diffecaltLevel}</h2>
          </header>
          <div className="ExampleContent">
            <code className='codeText'>
              {example.codeExample}
            </code>
            <p>
              {example.mainText}
            </p>
          </div>
        </div>
        ))
      }
    </>
    
    );
  }
  
export default CodeExamples;
import React from 'react';
import data from '../storage/data-examples'


import './examples.css';
// import '../prism/prism.css';


function CodeExamples() {

  return (
    <>
      {data.map((example) => (
        <div className={example.nameComponent}>
          <header className="ExampleHeader">
            <h2 className="ExampleId">{`id#${example.id}`}</h2>
            <h2 className="ExampleHeaderText"> {example.headerText}</h2>
            <h2 className={example.diffecaltLevel}>{example.diffecaltLevel.toUpperCase()}</h2>
          </header>
          <div className="ExampleContent">
            <pre>
              <code className='language-javascript'>
                {example.codeExample}
              </code>
            </pre>
            <p className="mainText">
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
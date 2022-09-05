import React from 'react';

import easyExamples from '../storage/data-easy-examples'

import './examples.css';

function CodeExamplesEasy() {

  return (
    <>
      {easyExamples.map((example) => (
        <div className={example.nameComponent}>
          <header className="ExampleHeader">
            <h2 className="ExampleId">{`id#${example.id}`}</h2>
            <h2 className="ExampleHeaderText"> {example.headerText}</h2>
            <h2 className={example.diffecaltLevel}>{example.diffecaltLevel.toUpperCase()}</h2>
          </header>
          <div className="ExampleContent">
            <pre className='language-javascript'>
              <code>
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
  
export default CodeExamplesEasy;
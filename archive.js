import React from 'react';

import './Examples.css';

function CodeExamples() {

  const data = [
    {
      
    }
  ]
  
  return (
    <>
    <div className="CodeExamplesComponent" id='1'>
      <header className="ExampleHeader">
        <h2 className="ExampleId">id:1</h2>
        <h2 className="ExampleHeaderText">Example Header text</h2>
        <h2 className="DiffecaltLevelEasy">Diffecalt level</h2>
      </header>
      <div className="ExampleContent">
        <p> Paragraph text Up</p>
        <pre className='codeText'>
          
          <span class="token comment">// <code>Arrow()</code> function</span><br></br>
          <span class="token function">reduce</span>
          

        </pre>
        <p>Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown </p>
      </div>
      
    </div>
        <div className="CodeExamplesComponent"  id='2'>
        <header className="ExampleHeader">
          <h2 className="ExampleId">id:2</h2>
          <h2 className="ExampleHeaderText">Example Header text</h2>
          <h2 className="DiffecaltLevelHard">Diffecalt level</h2>
        </header>
        <div className="ExampleContent">
          <p> Paragraph text Up</p>
          <pre className='codeText'>
            
            <span class="token comment">// <code>Arrow()</code> function</span><br></br>
            <span class="token function">reduce</span>
            
  
          </pre>
          <p>Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown </p>
        </div>
      </div>
    </>
    
    );
  }

export default CodeExamples;
import React from 'react';

import './Examples.css';

function CodeExamples() {
  
  return (
    <>
    <div className="CodeExamplesComponent">
      <header className="ExampleHeader">
        <h2 className="ExampleId">id Example</h2>
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
        <div className="CodeExamplesComponent">
        <header className="ExampleHeader">
          <h2 className="ExampleId">id Example</h2>
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






      {/* <div id="id-001" className="EasyExample">
      <span className='difficultEasy'>Easy</span>
        <h1>
          Reduce 1 
        </h1>
        <p>
           is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
        </p>


      </div>
      <div id="id-002" className="HardExample">
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
      </div> */}
  
export default CodeExamples;
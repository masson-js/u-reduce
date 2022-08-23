import React, { useState } from 'react';

import Header from './Layouts/Header';
import CodeExamples from './Layouts/CodeExamples';
import VideoExamples from './Layouts/VideoExamples'
import Sources from './Layouts/Sources';

import './App.css';


const App = () => {

  const initialState = false;

  const [codeExamplesState, setExamples] = useState(false);

  const showExamples = () => setExamples((showExamples) => !showExamples)


  return (
    <div className="App">
      <Header showExamples = {showExamples}
      />
      <div className="Container-section">
        {codeExamplesState && <CodeExamples />}
        <VideoExamples />
        <Sources />
      </div>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";

import Header from './Components/header';

import Start from './Pages/start-page'
import CodeExamples from './Pages/all-code-examples';
import VideoExamples from './Pages/video-examples'
import Sources from './Pages/sources';
import CodeExamplesEasy from './Pages/code-examples-easy'
import CodeExamplesMiddle from './Pages/code-examples.middle';
import CodeExamplesHard from './Pages/code-examples-hard';



const App = () => {

  return (
    
    <div>
      <Header />
    <main>
      <Routes>
        <Route exact path ='/' element={<Start />} />
        <Route path ='/CodeExamples' element={<CodeExamples />} />
        <Route path ='/CodeExamplesEasy' element={<CodeExamplesEasy />} />
        <Route path ='/CodeExamplesMiddle' element={<CodeExamplesMiddle />} />
        <Route path ='/CodeExamplesHard' element={<CodeExamplesHard />} />
        <Route path="/VideoExamples" element={<VideoExamples />} />
        <Route path="/Sources" element={<Sources />} />
      </Routes>
    </main>
    </div>
  );
}

export default App;

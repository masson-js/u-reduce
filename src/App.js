import { Route, Routes } from "react-router-dom";

import Header from './Components/header';
import CodeExamples from './Pages/code-examples';
import VideoExamples from './Pages/video-examples'
import Sources from './Pages/sources';


const App = () => {
  return (
    <div>
      <Header />
    <main>
      <Routes>
        <Route path ='/CodeExamples' element={<CodeExamples />} />
        <Route path="/VideoExamples" element={<VideoExamples />} />
        <Route path="/Sources" element={<Sources />} />
      </Routes>
    </main>
    </div>
  );
}

export default App;

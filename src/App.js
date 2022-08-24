import { Route, Routes } from "react-router-dom";

import Header from './Components/Header';
import CodeExamples from './Pages/CodeExamples';
import VideoExamples from './Pages/VideoExamples'
import Sources from './Pages/Sources';


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

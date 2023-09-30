import React, { useState, state } from 'react';
import NavBar from './components/navbar';
import News from './components/News'; // Import News component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
const App = (props) => {

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3} // thickness of progress bar
        // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/general" element={<News setProgress={setProgress} key="general" pageSize={12} country="in" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} key="business" pageSize={12} country="in" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={12} country="in" category="entertainment" />} />
          <Route path="/health" element={<News setProgress={setProgress} key="health" pageSize={12} country="in" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} key="science" pageSize={12} country="in" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={12} country="in" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={12} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div >
  );

}
export default App
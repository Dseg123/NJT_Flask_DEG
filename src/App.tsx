import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const TreeMap = lazy(() => import('./pages/TreeMap'));
const Upload = lazy(() => import('./pages/Upload'));
const About = lazy(() => import('./pages/About'));

const App: React.FC = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TreeMap />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;

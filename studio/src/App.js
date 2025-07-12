import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryListingPage from './pages/CategoryListingPage';
import PhotographerProfilePage from './pages/PhotographerProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CategoryListingPage />} />
        <Route path="/photographer/:id" element={<PhotographerProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

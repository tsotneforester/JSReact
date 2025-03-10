import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Home from './pages/Home';
import NewEmploee from './pages/NewEmploee';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/new-emploee" element={<NewEmploee />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StaticRoute } from '../features/router/constants';
import { IndexesPage } from '../features/indexes/components/IndexesPage';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={StaticRoute.Indexes} element={<IndexesPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;

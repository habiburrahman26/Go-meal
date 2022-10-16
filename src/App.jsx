import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Menu from './pages/Menu';
import FoodOrder from './pages/foodOrder/FoodOrder';
import RootLayout from './utils/RootLayout';
import Reviews from './pages/Reviews';
import Settings from './pages/Settings';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="menu" element={<Menu />} />
      <Route path="food-order" element={<FoodOrder />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
